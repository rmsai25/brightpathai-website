"use client";
import { useState } from "react";

export default function RequestAccessForm() {
  const [state, setState] = useState({ name: "", company: "", email: "", usecase: "" });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  async function onSubmit(e){
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/request-access", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(state)
      });
      if(res.ok) setSent(true);
      else throw new Error("Failed");
    } catch(err){
      alert("Failed to submit — please email team@bpai.in");
      console.error(err);
    } finally { setLoading(false); }
  }}

//   if(sent){
//     return (
//       <div className="max-w-3xl mx-auto -mt-12 p-6 rounded-2xl bg-white/5 backdrop-blur border border-white/6 text-center">
//         <h3 className="font-semibold text-white">Thanks — we’ll be in touch.</h3>
//         <p className="mt-2 text-sm text-gray-300">We review partner requests and respond to early access applications.</p>
//       </div>
//     );
//   }

//   return (
//     <form onSubmit={onSubmit} className="max-w-3xl mx-auto -mt-12 p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/3 backdrop-blur border border-white/6 shadow-lg">
//       <div className="grid sm:grid-cols-2 gap-3">
//         <input required placeholder="Name" value={state.name} onChange={e=>setState({...state, name:e.target.value})} className="p-3 rounded-md bg-transparent border border-white/10 placeholder-gray-400" />
//         <input required placeholder="Company" value={state.company} onChange={e=>setState({...state, company:e.target.value})} className="p-3 rounded-md bg-transparent border border-white/10 placeholder-gray-400" />
//       </div>

//       <input required type="email" placeholder="Email" value={state.email} onChange={e=>setState({...state, email:e.target.value})} className="mt-3 p-3 rounded-md bg-transparent border border-white/10 w-full placeholder-gray-400" />

//       <textarea placeholder="Short description of your use-case" value={state.usecase} onChange={e=>setState({...state, usecase:e.target.value})} className="mt-3 p-3 rounded-md bg-transparent border border-white/10 w-full min-h-[90px] placeholder-gray-400" />

//       <div className="flex justify-end mt-4">
//         <button type="submit" disabled={loading} className="bg-[#00E6B8] text-black px-5 py-2 rounded-lg font-semibold">
//           {loading ? "Sending..." : "Request access"}
//         </button>
//       </div>
//     </form>
//   );
// }

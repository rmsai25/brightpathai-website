import "./globals.css";
import Header from "../../components/Header.jsx";

const basePath = "";

export const metadata = {
  title: "Brightpath AI",
  description: "Production-ready AI systems",
  icons: {
    icon: `${basePath}/logu.png`,     
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans">
        <Header />
        <main>{children}</main>
      </body>
    </html>
    
  );
}


// export const metadata = {
//   title: "Brightpath AI ",
//   icons: {
//     icon: "/logu.png",     
//   },
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body>{children}</body>
//     </html>
//   );
// }

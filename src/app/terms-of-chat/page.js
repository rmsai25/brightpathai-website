"use client";

import Link from "next/link";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

const sections = [
  {
    id: "purpose",
    number: "1",
    title: "Purpose of Chat Support",
    content: [
      "Our chat support is provided to help users with general enquiries, booking-related questions, property support, maintenance requests, payment-related guidance, check-in/check-out assistance, and other customer service matters.",
      "Chat support is meant to make communication easier and faster. It is not a replacement for official booking records, invoices, receipts, agreements, written policies, legal notices, or authorized written confirmation from our team.",
    ],
  },
  {
    id: "ai-responses",
    number: "2",
    title: "Human and AI-Assisted Responses",
    content: [
      "This chat may be answered by RentMyStay support staff, AI-assisted systems, automated workflows, or a combination of these.",
      "AI may be used to help our team respond faster, understand your request, summarize previous conversations, suggest replies, route conversations to the correct team, classify issues, detect urgency, and improve support quality.",
      "Some replies may be fully human-written, some may be AI-assisted and reviewed by staff, and some may be automated. Because of this, you should not assume every reply is written entirely by a human.",
    ],
  },
  {
    id: "accuracy",
    number: "3",
    title: "Accuracy and Verification",
    content: [
      "We try to provide accurate and helpful responses. However, chat replies may sometimes be incomplete, delayed, outdated, misunderstood, or incorrect.",
      "For important matters, please verify the information before taking action. This includes, but is not limited to: booking confirmation; rent, deposit, invoice, or payment status; refund or cancellation terms; check-in and check-out details; maintenance commitments; property availability; pricing; legal or policy-related matters; safety, security, electrical, plumbing, or access-related issues.",
      "Final confirmation should come only from official records, invoices, receipts, booking confirmations, written policies, authorized staff communication, or other official documents issued by us. If there is any difference between a chat reply and our official records, the official records will prevail.",
    ],
  },
  {
    id: "booking-payment",
    number: "4",
    title: "Booking, Payment, and Property Matters",
    content: [
      "Any booking, payment, refund, cancellation, rent, deposit, or property-related information shared over chat is subject to verification against our official records.",
      "A chat message by itself does not create a confirmed booking, refund, discount, waiver, price commitment, maintenance commitment, legal obligation, or policy exception unless it is confirmed through an official authorized channel.",
      "Official channels may include confirmed booking details, invoices, receipts, signed agreements, email confirmations, written policies, account statements, system records, or authorized staff communication.",
    ],
  },
  {
    id: "storage",
    number: "5",
    title: "Chat Storage, Monitoring, Review, and Audit",
    content: [
      "All chat conversations with us will be stored and may be monitored, reviewed, and audited by RentMyStay for business, support, safety, quality, compliance, training, dispute resolution, fraud prevention, security, and operational purposes.",
      "This may include: messages sent by you; replies sent by our staff; AI-assisted or automated replies; internal notes; timestamps; user, booking, property, and device-related context; uploaded files, screenshots, documents, and images; conversation labels, priority, status, routing, assignment, and support actions.",
      "We may review and audit chat conversations to verify what was communicated, resolve complaints or disputes, improve support quality, monitor staff performance, check AI-assisted response quality, detect errors, misuse, fraud, spam, or abuse, maintain service records, and comply with legal, regulatory, accounting, security, and internal policy requirements.",
      "By using this chat, you understand and agree that your chat conversations may be stored, linked with your booking, user, property, payment, support, email, call, or other business records, and reviewed or audited when required.",
    ],
  },
  {
    id: "automated",
    number: "6",
    title: "Automated Processing of Messages",
    content: [
      "By using this chat, you understand that your messages may be processed using automated systems.",
      "Automated processing may be used for: responding to your query; routing your conversation to the correct team; identifying booking or user context; summarizing previous conversations; detecting issue type, urgency, or priority; creating internal notes or support tickets; checking staff or AI response quality; improving customer support and internal operations.",
      "Where relevant, we may connect your chat with other business records, such as booking details, user account details, support tickets, emails, call logs, payment status, property information, or maintenance records.",
    ],
  },
  {
    id: "privacy",
    number: "7",
    title: "Privacy and Personal Information",
    content: [
      "Your use of chat is also governed by our Privacy Policy. Please read our Privacy Policy to understand how we collect, use, store, share, protect, and retain your personal information.",
      "Please avoid sharing unnecessary sensitive information in chat, including passwords, OTPs, full card details, bank passwords, or highly sensitive personal information not relevant to your support request.",
      "We will never ask you to share your password or OTP in chat. If you share incorrect, incomplete, or misleading information, our response may also be incorrect or incomplete.",
    ],
  },
  {
    id: "attachments",
    number: "8",
    title: "Attachments, Images, and Documents",
    content: [
      "You may be allowed to share images, screenshots, documents, or other files in chat.",
      "By uploading any file, you confirm that you have the right to share it, that it is relevant to your support request, and that it does not contain unlawful, harmful, misleading, or malicious content.",
      "Uploaded files may be reviewed manually or using automated systems to understand, verify, and resolve your issue.",
    ],
  },
  {
    id: "urgent",
    number: "9",
    title: "Urgent Issues and Emergencies",
    content: [
      "If you are reporting an urgent issue, please clearly mention that it is urgent in your message.",
      "Urgent issues may include safety or security concerns, electrical issues, water leakage, plumbing emergencies, lock or access problems, fire, smoke, hazardous conditions, or other serious property-related issues.",
      "Chat may not always be monitored instantly. For emergencies or immediate danger, please contact emergency services, building security, the property caretaker, or local authorities directly. Do not rely only on chat support for emergency response.",
    ],
  },
  {
    id: "response-time",
    number: "10",
    title: "Response Time and Human Escalation",
    content: [
      "We try to respond as quickly as possible, but we do not guarantee instant replies. Response times may vary based on team availability, issue complexity, business hours, holidays, technical issues, staff availability, or the need for internal verification.",
      "Automated or AI-assisted replies may be sent outside regular working hours, but final resolution may still require review by our team.",
      "If you believe a response is incorrect, incomplete, unclear, or not helpful, you may ask for human support by saying: \"Please connect me to a human agent\", \"Please escalate this issue\", \"Please ask a manager to review this\", or \"This is urgent\".",
      "We may escalate your request based on issue type, priority, booking status, property status, staff availability, and internal support policies.",
    ],
  },
  {
    id: "prohibited",
    number: "11",
    title: "Prohibited Use",
    content: [
      "You agree not to misuse chat support.",
      "You must not use chat to send abusive, threatening, defamatory, obscene, unlawful, fraudulent, or misleading content; harass staff or other users; impersonate another person; upload malware or harmful files; spam or overload the system; or request illegal, unsafe, or unauthorized actions.",
      "We may restrict, suspend, or stop responding to users who misuse chat support.",
    ],
  },
  {
    id: "no-advice",
    number: "12",
    title: "No Professional Advice",
    content: [
      "Chat responses are provided for customer support and general assistance only.",
      "Nothing in this chat should be treated as legal advice, financial advice, tax advice, technical certification, safety certification, or any other professional advice.",
      "For legal, financial, safety, or technical matters, please consult a qualified professional or request written confirmation from our authorized team.",
    ],
  },
  {
    id: "liability",
    number: "13",
    title: "Limitation of Liability",
    content: [
      "To the maximum extent permitted by applicable law, we are not liable for losses arising only from reliance on incomplete, delayed, outdated, misunderstood, or incorrect chat responses, especially where the matter should have been verified through official records, written confirmation, or authorized staff communication.",
      "This does not limit any rights you may have under applicable law, confirmed agreements, official invoices, receipts, or written commitments issued by us.",
    ],
  },
  {
    id: "changes",
    number: "14",
    title: "Changes to These Terms",
    content: [
      "We may update these Terms of Chat from time to time.",
      "The updated version will be posted on our website or made available through the chat interface. Continued use of chat after changes are posted means you accept the updated Terms of Chat.",
    ],
  },
  {
    id: "contact",
    number: "15",
    title: "Contact",
    content: [
      "For questions, corrections, escalation, or official confirmation, please contact us at:",
    ],
    contact: {
      email: "team@bpai.in",
      website: "https://bpai.in/",
    },
  },
];

export default function TermsOfChat() {
  return (
    <div className="bg-white min-h-screen">
      <Header />

      {/* Hero banner */}
      <div
        className="relative w-full pt-32 pb-16 px-6 text-white text-center"
        style={{
          background:
            "radial-gradient(ellipse at bottom, #0b1f2e 0%, #030b14 60%, #02070e 100%)",
        }}
      >
        <div className="max-w-3xl mx-auto">
          <span className="inline-block text-xs font-semibold bg-[#e9fbf6] text-[#00a980] px-3 py-1 rounded-full mb-4 tracking-wide">
            Legal
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
            Terms of Chat
          </h1>
          <p className="text-gray-400 text-base max-w-xl mx-auto leading-relaxed">
            How our chat support works — including AI-assisted responses, storage,
            monitoring, and what you can rely on.
          </p>
          <p className="mt-4 text-gray-500 text-sm">
            Effective Date: 01-07-2026 &nbsp;·&nbsp; Brightpath AI
          </p>
        </div>
      </div>

      {/* Intro notice */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="bg-[#f8fffe] border border-[#d0f5eb] rounded-2xl p-6 text-sm text-gray-600 leading-relaxed">
          <p>
            These Terms of Chat explain how our chat support works, including human
            support, AI-assisted replies, automated processing, chat storage,
            monitoring, review, and audit.
          </p>
          <p className="mt-2">
            By starting or continuing a chat with us, you agree to these Terms of
            Chat, our Privacy Policy, Website Terms, and any other applicable policies.
          </p>
        </div>
      </div>

      {/* Table of contents */}
      <div className="max-w-4xl mx-auto px-6 pb-6">
        <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
          <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-4">
            Contents
          </h2>
          <ol className="grid sm:grid-cols-2 gap-1.5">
            {sections.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className="text-sm text-gray-600 hover:text-[#00a980] transition-colors flex items-center gap-2 group"
                >
                  <span className="w-5 h-5 rounded-full bg-[#e9fbf6] text-[#00a980] text-[10px] font-bold flex items-center justify-center flex-shrink-0 group-hover:bg-[#00a980] group-hover:text-white transition-colors">
                    {s.number}
                  </span>
                  {s.title}
                </a>
              </li>
            ))}
          </ol>
        </div>
      </div>

      {/* Sections */}
      <div className="max-w-4xl mx-auto px-6 pb-20 space-y-10">
        {sections.map((s) => (
          <div
            key={s.id}
            id={s.id}
            className="scroll-mt-24 border-t border-gray-100 pt-8"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#e9fbf6] text-[#00a980] text-sm font-bold flex items-center justify-center">
                {s.number}
              </div>
              <h2 className="text-xl font-bold text-gray-900 leading-snug pt-0.5">
                {s.title}
              </h2>
            </div>
            <div className="pl-12 space-y-3">
              {s.content.map((para, i) => (
                <p key={i} className="text-gray-600 text-sm leading-relaxed">
                  {para}
                </p>
              ))}
              {s.contact && (
                <div className="mt-4 space-y-1.5 text-sm text-gray-600">
                  <p>
                    <span className="font-semibold text-gray-800">Email: </span>
                    <a
                      href={`mailto:${s.contact.email}`}
                      className="text-[#00a980] hover:underline"
                    >
                      {s.contact.email}
                    </a>
                  </p>
                  <p>
                    <span className="font-semibold text-gray-800">Website: </span>
                    <a
                      href={s.contact.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#00a980] hover:underline"
                    >
                      {s.contact.website}
                    </a>
                  </p>
                </div>
              )}
            </div>
          </div>
        ))}

        {/* AI notice footer */}
        <div className="border-t border-gray-100 pt-8">
          <div className="flex items-start gap-4 p-5 rounded-2xl bg-[#f8fffe] border border-[#d0f5eb]">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#00a980] text-white text-xs font-bold flex items-center justify-center">
              AI
            </div>
            <div>
              <p className="font-semibold text-gray-900 text-sm mb-0.5">
                AI-assisted. Verify important info.
              </p>
              <p className="text-gray-500 text-xs leading-relaxed">
                This chat may use AI-assisted responses. For important matters —
                bookings, payments, refunds, property issues — always verify
                through official records or authorized staff confirmation.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

"use client";

import Link from "next/link";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

const faqItems = [
  {
    question: "Am I speaking to a human or AI?",
    answer: "Your conversation may be handled by RentMyStay staff, AI-assisted systems, automated workflows or a combination of these. You may ask to speak with a human agent at any time by writing 'Connect me to a human agent' or similar.",
  },
  {
    question: "Who operates this chat?",
    answer: "RentMyStay is owned and operated by BrightPath Technology and Services Pvt. Ltd. The chat uses Brightpath AI technology developed and operated by the same company.",
  },
  {
    question: "What information does the chat collect?",
    answer: "The chat may process your messages, contact details, timestamps, uploaded files and relevant booking, payment, property or support information needed to handle your request.",
  },
  {
    question: "Is my chat connected to my booking?",
    answer: "Where necessary, your conversation may be connected with your RentMyStay account, enquiry, booking, payment, property, maintenance or previous support records.",
  },
  {
    question: "Are conversations stored?",
    answer: "Conversations may be retained for customer support, booking management, dispute resolution, fraud prevention, security and legal compliance. Different records may have different retention periods. See 'Data Retention and Deletion' for details.",
  },
  {
    question: "Is my information used to train AI?",
    answer: "Chat information is not permitted to be used to train publicly available AI models. It may be processed under controlled conditions to operate, secure, test and improve RentMyStay's private support system.",
  },
  {
    question: "Can chat confirm a booking, payment or refund?",
    answer: "A chat reply is not final confirmation unless it clearly states that it is authorized and is supported by the relevant booking record, invoice, receipt, agreement or account record.",
  },
  {
    question: "How do I reach a human?",
    answer: "Write 'Connect me to a human agent' or contact RentMyStay at help@rentmystay.com or +91 9035750377.",
  },
  {
    question: "What should I do during an emergency?",
    answer: "Do not rely only on chat. Contact emergency services, building security, the caretaker or the appropriate local authority immediately.",
  },
  {
    question: "How can I access, correct or delete my data?",
    answer: "Contact RentMyStay at contact@rentmystay.com. Requests may require identity verification, and some records may need to be retained for bookings, payments, disputes or legal compliance.",
  },
];

const sections = [
  {
    id: "who-operates",
    number: "1",
    title: "Who Operates This Chat",
    content: [
      "RentMyStay is a brand and service owned and operated by BrightPath Technology and Services Pvt. Ltd. This chat uses Brightpath AI technology developed and operated by the same company to provide human, AI-assisted and automated customer support.",
      "In these Chat Terms, 'RentMyStay,' 'we,' 'us' and 'our' refer to BrightPath Technology and Services Pvt. Ltd. 'Brightpath AI' refers to the technology used to provide and support the chat service.",
      "Third-party service providers may process limited information on our behalf where necessary to host, secure, operate or support the service, subject to appropriate contractual and privacy safeguards.",
    ],
  },
  {
    id: "purpose",
    number: "2",
    title: "Purpose of Chat Support",
    content: [
      "Our chat support is provided to help users with general enquiries, booking-related questions, property support, maintenance requests, payment-related guidance, check-in/check-out assistance, and other customer service matters.",
      "Chat support is meant to make communication easier and faster. It is not a replacement for official booking records, invoices, receipts, agreements, written policies, legal notices, or authorized written confirmation from our team.",
    ],
  },
  {
    id: "ai-responses",
    number: "3",
    title: "Human and AI-Assisted Responses",
    content: [
      "This chat may be answered by RentMyStay support staff, AI-assisted systems, automated workflows, or a combination of these.",
      "AI may be used to help our team respond faster, understand your request, summarize previous conversations, suggest replies, route conversations to the correct team, classify issues, detect urgency, and improve support quality.",
      "Some replies may be fully human-written, some may be AI-assisted and reviewed by staff, and some may be automated. Because of this, you should not assume every reply is written entirely by a human.",
    ],
  },
  {
    id: "accuracy",
    number: "4",
    title: "Accuracy and Verification",
    content: [
      "We try to provide accurate and helpful responses. However, chat replies may sometimes be incomplete, delayed, outdated, misunderstood, or incorrect.",
      "For important matters, please verify the information before taking action. This includes, but is not limited to: booking confirmation; rent, deposit, invoice, or payment status; refund or cancellation terms; check-in and check-out details; maintenance commitments; property availability; pricing; legal or policy-related matters; safety, security, electrical, plumbing, or access-related issues.",
      "Final confirmation should come only from official records, invoices, receipts, booking confirmations, written policies, authorized staff communication, or other official documents issued by us. If there is any difference between a chat reply and our official records, the official records will prevail.",
    ],
  },
  {
    id: "booking-payment",
    number: "5",
    title: "Booking, Payment, and Property Matters",
    content: [
      "Any booking, payment, refund, cancellation, rent, deposit, or property-related information shared over chat is subject to verification against our official records.",
      "A chat reply is not final confirmation of a booking, payment, refund, discount, cancellation, maintenance commitment or policy exception unless the reply clearly states that it is an authorized final confirmation and is supported by the applicable booking record, invoice, receipt, agreement, email or account record.",
      "If there is any difference between a chat reply and our official records, the official records will prevail.",
    ],
  },
  {
    id: "storage",
    number: "6",
    title: "Chat Records, Monitoring and Quality Review",
    content: [
      "Chat conversations and related records may be stored and retained where reasonably necessary for customer support, booking management, service security, quality review, dispute resolution, fraud prevention and compliance with legal obligations.",
      "This may include: messages sent by you; replies sent by our staff; AI-assisted or automated replies; internal notes; timestamps; user, booking, property, and device-related context; uploaded files, screenshots, documents, and images; conversation labels, priority, status, routing, assignment, and support actions.",
      "We may review chat conversations to verify what was communicated, resolve complaints or disputes, improve support quality, monitor staff performance, check AI-assisted response quality, detect errors, misuse, fraud, spam, or abuse, maintain service records, and comply with legal, regulatory, accounting, security, and internal policy requirements.",
      "By using this chat, you understand that your chat conversations may be stored, linked with your booking, user, property, payment, support, email, call, or other business records, and reviewed where required.",
    ],
  }, {
    id: "retention",
    number: "7",
    title: "Data Retention and Deletion",
    content: [
      "Chat records are retained for the period reasonably required to provide support, maintain booking and financial records, resolve disputes, prevent fraud, and meet legal and regulatory obligations. Different records may have different retention periods.",
      "For example, chat from completed bookings may be retained longer to ensure records are complete. Anonymous enquiries that do not result in a booking may be retained for a shorter period. Payment-related messages may be retained to comply with financial regulations.",
      "If you request deletion of your chat information, we will assess your request based on legal obligations, active bookings, pending disputes, payment processing, and other applicable reasons. Some information may not be eligible for deletion.",
      "Details on how to request access, correction, updating, or deletion of your personal information are provided in the \"Your Privacy Rights\" section below.",
    ],
  }, {
    id: "automated",
    number: "8",
    title: "Automated Processing of Messages",
    content: [
      "By using this chat, you understand that your messages may be processed using automated systems.",
      "Automated processing may be used for: responding to your query; routing your conversation to the correct team; identifying booking or user context; summarizing previous conversations; detecting issue type, urgency, or priority; creating internal notes or support tickets; checking staff or AI response quality; improving customer support and internal operations.",
      "Where relevant, we may connect your chat with other business records, such as booking details, user account details, support tickets, emails, call logs, payment status, property information, or maintenance records.",
    ],
  },
  {
    id: "ai-training",
    number: "9",
    title: "AI Training and Model Development",
    content: [
      "We do not permit customer chat content to be used to train publicly available or shared AI models.",
      "Chat information may be processed by authorized employees and contracted service providers where necessary to host, operate, secure, evaluate and improve RentMyStay's private customer-support system. Such providers are permitted to process the information only for the contracted service and subject to applicable privacy and security requirements.",
      "Chat data may be processed to analyze response quality, detect errors, identify common issues, refine AI-assisted reply suggestions, and monitor system performance.",
    ],
  },
  {
    id: "privacy",
    number: "10",
    title: "Privacy and Personal Information",
    content: [
      "Your use of chat is also governed by our Privacy Policy. Please read our Privacy Policy to understand how we collect, use, store, share, protect, and retain your personal information.",
      "Please avoid sharing unnecessary sensitive information in chat, including passwords, OTPs, full card details, bank passwords, or highly sensitive personal information not relevant to your support request.",
      "We will never ask you to share your password or OTP in chat. If you share incorrect, incomplete, or misleading information, our response may also be incorrect or incomplete.",
    ],
  },
  {
    id: "data-rights",
    number: "11",
    title: "Your Privacy Rights",
    content: [
      "You have the right to request access to, correct, update, or request deletion of your personal information collected through chat, subject to applicable privacy laws and legal obligations.",
      "To exercise these rights, please contact RentMyStay privacy support with your request and any relevant chat reference. Include specific details about what information you wish to access, correct, or delete.",
      "You can also request to withdraw optional consent for certain types of data processing, where applicable. You can request that we stop using your chat data for certain non-essential purposes (such as improvement of the system), while retaining data necessary for active bookings or legal compliance.",
      "We will respond to your request in accordance with applicable privacy laws. Some requests may be denied if deletion would interfere with active bookings, payment records, dispute resolution, or legal obligations.",
      "If you have a privacy concern or wish to file a grievance, please contact us using the contact details provided in the \"Contact\" section below.",
    ],
  },
  {
    id: "attachments",
    number: "12",
    title: "Attachments, Images, and Documents",
    content: [
      "You may be allowed to share images, screenshots, documents, or other files in chat.",
      "By uploading any file, you confirm that you have the right to share it, that it is relevant to your support request, and that it does not contain unlawful, harmful, misleading, or malicious content.",
      "Uploaded files may be reviewed manually or using automated systems to understand, verify, and resolve your issue.",
    ],
  },
  {
    id: "urgent",
    number: "13",
    title: "Urgent Issues and Emergencies",
    content: [
      "If you are reporting an urgent issue, please clearly mention that it is urgent in your message.",
      "Urgent issues may include safety or security concerns, electrical issues, water leakage, plumbing emergencies, lock or access problems, fire, smoke, hazardous conditions, or other serious property-related issues.",
      "Chat may not always be monitored instantly. For emergencies or immediate danger, please contact emergency services, building security, the property caretaker, or local authorities directly. Do not rely only on chat support for emergency response.",
    ],
  },
  {
    id: "response-time",
    number: "14",
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
    number: "15",
    title: "Prohibited Use",
    content: [
      "You agree not to misuse chat support.",
      "You must not use chat to send abusive, threatening, defamatory, obscene, unlawful, fraudulent, or misleading content; harass staff or other users; impersonate another person; upload malware or harmful files; spam or overload the system; or request illegal, unsafe, or unauthorized actions.",
      "We may restrict, suspend, or stop responding to users who misuse chat support.",
    ],
  },
  {
    id: "no-advice",
    number: "16",
    title: "No Professional Advice",
    content: [
      "Chat responses are provided for customer support and general assistance only.",
      "Nothing in this chat should be treated as legal advice, financial advice, tax advice, technical certification, safety certification, or any other professional advice.",
      "For legal, financial, safety, or technical matters, please consult a qualified professional or request written confirmation from our authorized team.",
    ],
  },
  {
    id: "liability",
    number: "17",
    title: "Limitation of Liability",
    content: [
      "To the maximum extent permitted by applicable law, we are not liable for losses arising only from reliance on incomplete, delayed, outdated, misunderstood, or incorrect chat responses, especially where the matter should have been verified through official records, written confirmation, or authorized staff communication.",
      "This does not limit any rights you may have under applicable law, confirmed agreements, official invoices, receipts, or written commitments issued by us.",
    ],
  },
  {
    id: "changes",
    number: "18",
    title: "Changes to These Terms",
    content: [
      "We may update these Terms of Chat from time to time.",
      "The updated version will be posted on our website or made available through the chat interface. Continued use of chat after changes are posted means you accept the updated Terms of Chat.",
    ],
  },
  {
    id: "contact",
    number: "19",
    title: "Contact",
    content: [
      "For different questions, please contact the appropriate team:",
    ],
    contacts: [
      {
        label: "RentMyStay – Bookings, Payments, Escalation",
        email: "help@rentmystay.com",
        details: "For booking inquiries, payment issues, property maintenance, refunds, and support escalation.",
      },
      {
        label: "RentMyStay – Privacy and Data Access",
        email: "contact@rentmystay.com",
        details: "For privacy questions, data access requests, corrections, deletion requests, and privacy grievances.",
      },
      {
        label: "RentMyStay – Support Phone",
        email: "+91 9035750377",
        details: "For urgent support issues and escalation by phone.",
      },
    ],
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
            RentMyStay Chat Terms — Powered by Brightpath AI
          </h1>
          <p className="text-gray-400 text-base max-w-xl mx-auto leading-relaxed">
            How our chat support works — including AI-assisted responses, storage,
            monitoring, and what you can rely on.
          </p>
          <p className="mt-4 text-gray-500 text-sm">
            Effective Date: June 1, 2026 &nbsp;·&nbsp; RentMyStay
          </p>
        </div>
      </div>

      {/* Intro notice */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="bg-[#f8fffe] border border-[#d0f5eb] rounded-2xl p-6 text-sm text-gray-600 leading-relaxed">
          <p>
            This chat is operated by RentMyStay (owned and operated by BrightPath Technology and Services Pvt. Ltd.) for customer support. These Terms of Chat explain how the chat works, including human support, AI-assisted replies, storage, monitoring, and your privacy rights.
          </p>
          <p className="mt-2">
            By using this chat, you acknowledge and accept these Chat Terms. Information about how personal data is processed is provided in the <a
              href="https://www.rentmystay.com/Info/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
            >
              RentMyStay Privacy Policy
            </a>. Where separate consent is legally required for an optional use of your information, we will request it separately.
          </p>
          <p className="mt-2 text-xs text-gray-500">
            <strong>Quick links:</strong> <a href="#data-rights" className="text-[#00a980] hover:underline">Privacy Rights</a> · <a href="#retention" className="text-[#00a980] hover:underline">Data Retention</a> · <a href="#ai-training" className="text-[#00a980] hover:underline">AI Training</a> · <a href="#contact" className="text-[#00a980] hover:underline">Contact</a>
          </p>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto px-6 py-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqItems.map((item, idx) => (
            <details key={idx} className="group border border-gray-200 rounded-lg p-4 hover:border-[#00a980] transition-colors">
              <summary className="cursor-pointer font-semibold text-gray-900 text-sm group-open:text-[#00a980]">
                {item.question}
              </summary>
              <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                {item.answer}
              </p>
            </details>
          ))}
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
              {s.contacts && (
                <div className="mt-4 space-y-3 text-sm text-gray-600">
                  {s.contacts.map((c, i) => (
                    <div key={i} className="p-3 rounded-lg bg-white border border-gray-100">
                      <p className="font-semibold text-gray-800 mb-1">{c.label}</p>
                      <p className="mb-2">
                        {c.email.startsWith("+") ? (
                          <a
                            href={`tel:${c.email}`}
                            className="text-[#00a980] hover:underline"
                          >
                            {c.email}
                          </a>
                        ) : (
                          <a
                            href={`mailto:${c.email}`}
                            className="text-[#00a980] hover:underline"
                          >
                            {c.email}
                          </a>
                        )}
                      </p>
                      <p className="text-xs text-gray-500">{c.details}</p>
                    </div>
                  ))}
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

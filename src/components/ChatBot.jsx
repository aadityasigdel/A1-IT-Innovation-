import { useState, useRef, useEffect } from "react";

const BOT_NAME = "A1 Assistant";

const QUICK_REPLIES = [
  "Our Services",
  "Free Internship",
  "Contact Us",
  "DevOps",
];

function getBotReply(input) {
  const msg = input.toLowerCase().trim();

  if (/^(hi|hello|hey|namaste|howdy|yo)\b/.test(msg))
    return "Hi there! 👋 Welcome to A1 IT Innovation. I can help you with our services, internship, pricing, or contact info. What would you like to know?";

  if (/intern/.test(msg))
    return "🎓 We offer **FREE IT Internships** in Web Dev, Mobile App, Node.js, Flutter & more! Great for students across Nepal.\n\nApply here → /services/internship";

  if (/web|website|frontend|react/.test(msg))
    return "💻 Our Web Development team builds fast, SEO-optimized, responsive websites — from startups to enterprises across Nepal.\n\nLearn more → /services/web-dev";

  if (/mobile|app|android|ios|flutter/.test(msg))
    return "📱 We build Android & iOS apps using Flutter. High-performance, cross-platform mobile apps.\n\nLearn more → /services/mobile-dev";

  if (/devops|docker|kubernetes|cicd|ci\/cd|pipeline|cloud|server|infra/.test(msg))
    return "⚙️ We provide CI/CD pipelines, Kubernetes deployment, Terraform, Grafana monitoring & managed cloud infrastructure.\n\nLearn more → /services/devops";

  if (/security|audit|vulnerab|pentest/.test(msg))
    return "🔒 Our Security Audit service detects vulnerabilities and strengthens your system against threats.\n\nLearn more → /services/security-audit";

  if (/domain|hosting|host/.test(msg))
    return "🌐 We offer reliable domain registration & web hosting across Nepal — fast, secure, and affordable.\n\nLearn more → /services/domain-hosting";

  if (/service/.test(msg))
    return "🚀 We offer:\n• Web Development\n• Mobile App Development\n• DevOps as a Service\n• Security Audit\n• Domain & Hosting\n• Free IT Internship\n\nWhich one interests you?";

  if (/price|cost|rate|charge|budget|afford/.test(msg))
    return "💰 Our pricing is designed to be affordable for Nepali startups and businesses — enterprise-grade quality at local prices.\n\nGet a free quote → /contact";

  if (/contact|phone|email|reach|call|address|location/.test(msg))
    return "📞 You can reach us at:\n• 📍 Damak, Jhapa & Kathmandu\n• 📱 +977-9816032025\n• 🌐 /contact\n\nWe'd love to hear from you!";

  if (/about|who|company|team/.test(msg))
    return "🏢 A1 IT Innovation is Nepal's trusted IT company — founded in 2021, serving 20+ clients with web, mobile, DevOps & AI solutions.\n\nLearn more → /company/about";

  if (/portfolio|work|project|client/.test(msg))
    return "📁 We've delivered 19+ projects for clients across Nepal — from ridesharing platforms to gaming apps.\n\nView our work → /works";

  return "Thanks for your message! 🙏 I'm a simple bot for now — for detailed queries, our team is always ready to help.\n\nContact us → /contact";
}

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      from: "bot",
      text: "👋 Hello! I'm the A1 IT Innovation assistant.\n\nAsk me about our services, internship, pricing, or anything else!",
    },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const bottomRef = useRef(null);

  useEffect(() => {
    if (open) bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open, typing]);

  function sendMessage(text) {
    const userText = text ?? input;
    if (!userText.trim()) return;

    setMessages((prev) => [...prev, { from: "user", text: userText }]);
    setInput("");
    setTyping(true);

    setTimeout(() => {
      setTyping(false);
      setMessages((prev) => [...prev, { from: "bot", text: getBotReply(userText) }]);
    }, 700);
  }

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close chat" : "Open chat"}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
      >
        {open ? (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"/>
          </svg>
        )}
      </button>

      {/* Chat panel */}
      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden"
          style={{ maxHeight: "520px" }}>

          {/* Header */}
          <div className="bg-indigo-600 px-4 py-3 flex items-center gap-3">
            <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center font-bold text-indigo-600 text-sm flex-shrink-0">
              A1
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-white font-semibold text-sm leading-tight">{BOT_NAME}</p>
              <p className="text-indigo-200 text-xs">A1 IT Innovation • Nepal</p>
            </div>
            <span className="flex items-center gap-1 text-xs text-indigo-200">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"/>
              Online
            </span>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3 bg-gray-50" style={{ minHeight: "300px" }}>
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}>
                {msg.from === "bot" && (
                  <div className="w-7 h-7 bg-indigo-600 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0 mt-0.5 mr-2">
                    A1
                  </div>
                )}
                <div
                  className={`max-w-[75%] px-3 py-2 rounded-2xl text-sm leading-relaxed whitespace-pre-line ${
                    msg.from === "user"
                      ? "bg-indigo-600 text-white rounded-br-sm"
                      : "bg-white text-gray-800 shadow-sm border border-gray-100 rounded-bl-sm"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {typing && (
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 bg-indigo-600 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                  A1
                </div>
                <div className="bg-white border border-gray-100 shadow-sm px-4 py-2.5 rounded-2xl rounded-bl-sm flex gap-1.5 items-center">
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }}/>
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }}/>
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }}/>
                </div>
              </div>
            )}
            <div ref={bottomRef}/>
          </div>

          {/* Quick replies */}
          <div className="px-4 pt-2 flex flex-wrap gap-1.5 bg-white border-t border-gray-100">
            {QUICK_REPLIES.map((q) => (
              <button
                key={q}
                onClick={() => sendMessage(q)}
                className="text-xs bg-indigo-50 text-indigo-700 border border-indigo-200 px-2.5 py-1 rounded-full hover:bg-indigo-100 transition-colors"
              >
                {q}
              </button>
            ))}
          </div>

          {/* Input */}
          <div className="px-3 py-3 bg-white flex items-center gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Type a message..."
              className="flex-1 bg-gray-100 rounded-full px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-300 text-gray-800 placeholder-gray-400"
            />
            <button
              onClick={() => sendMessage()}
              disabled={!input.trim()}
              className="w-9 h-9 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-40 text-white rounded-full flex items-center justify-center transition-colors flex-shrink-0"
            >
              <svg className="w-4 h-4 rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}

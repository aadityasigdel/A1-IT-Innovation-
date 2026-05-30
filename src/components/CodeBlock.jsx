import { useState } from "react";

const LANG_LABELS = {
  bash: "Bash",
  sh: "Shell",
  shell: "Shell",
  yaml: "YAML",
  yml: "YAML",
  json: "JSON",
  js: "JavaScript",
  jsx: "JSX",
  ts: "TypeScript",
  tsx: "TSX",
  python: "Python",
  py: "Python",
  go: "Go",
  rust: "Rust",
  sql: "SQL",
  html: "HTML",
  css: "CSS",
  dockerfile: "Dockerfile",
  toml: "TOML",
  ini: "INI",
  text: "Text",
};

export default function CodeBlock({ code, language = "" }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
    } catch {
      const el = document.createElement("textarea");
      el.value = code;
      el.style.position = "fixed";
      el.style.opacity = "0";
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const label = LANG_LABELS[language.toLowerCase()] ?? language ?? "Code";

  return (
    <div className="relative my-6 rounded-xl overflow-hidden border border-gray-700 shadow-xl">
      {/* Header bar */}
      <div className="flex items-center justify-between bg-gray-800 px-4 py-2.5">
        <div className="flex items-center gap-3">
          {/* macOS-style dots */}
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-red-500/80" />
            <span className="w-3 h-3 rounded-full bg-yellow-400/80" />
            <span className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          {label && (
            <span className="text-xs font-mono text-gray-400 uppercase tracking-wider select-none">
              {label}
            </span>
          )}
        </div>

        {/* Copy button */}
        <button
          onClick={handleCopy}
          aria-label="Copy code to clipboard"
          className={`flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-md
            transition-all duration-200 select-none cursor-pointer
            ${copied
              ? "bg-green-700 text-green-100"
              : "bg-gray-700 hover:bg-gray-600 text-gray-300 hover:text-white"
            }`}
        >
          {copied ? (
            <>
              <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
              Copied!
            </>
          ) : (
            <>
              <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2
                     m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              Copy
            </>
          )}
        </button>
      </div>

      {/* Code area */}
      <pre className="bg-gray-950 px-5 py-4 overflow-x-auto max-h-[500px] scrollbar-thin">
        <code className="text-sm font-mono text-gray-200 leading-relaxed whitespace-pre">
          {code}
        </code>
      </pre>
    </div>
  );
}

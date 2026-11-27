// "Get it on Google Play" button. variant: "dark" (black, for light backgrounds) or "light" (white, for dark/colour backgrounds).
export default function PlayStoreButton({ href, label = "Get it on", variant = "dark", className = "", appName }) {
  const look =
    variant === "light"
      ? "bg-white text-gray-900 hover:bg-gray-100"
      : "bg-gray-900 text-white hover:bg-black";
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={appName ? `Get ${appName} on Google Play` : "Get it on Google Play"}
      className={`inline-flex items-center gap-3 px-4 py-2 rounded-xl shadow-sm transition-colors ${look} ${className}`}
    >
      <svg viewBox="0 0 24 24" className="w-6 h-6 flex-shrink-0" aria-hidden="true">
        <path fill="#34A853" d="M3.6 1.8 13.5 12l-9.9 10.2c-.4-.2-.6-.6-.6-1.1V2.9c0-.5.2-.9.6-1.1z" />
        <path fill="#FBBC04" d="m17 8.4-3.5 3.6 3.5 3.6 4-2.3c.9-.5.9-1.7 0-2.2l-4-2.7z" />
        <path fill="#4285F4" d="M13.5 12 3.6 22.2c.3.2.8.2 1.2 0L17 15.6 13.5 12z" />
        <path fill="#EA4335" d="M3.6 1.8 13.5 12 17 8.4 4.8 1.8c-.4-.2-.9-.2-1.2 0z" />
      </svg>
      <span className="flex flex-col leading-tight text-left">
        <span className="text-[10px] uppercase tracking-wide opacity-80">{label}</span>
        <span className="text-base font-semibold">Google Play</span>
      </span>
    </a>
  );
}

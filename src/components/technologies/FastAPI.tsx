export default function FastAPI() {
  return (
    <svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id="fastapiGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#009688"/>
          <stop offset="100%" stopColor="#00695C"/>
        </linearGradient>
      </defs>
      <rect width="256" height="256" fill="#fff"/>
      <circle cx="128" cy="128" r="100" fill="url(#fastapiGradient)"/>
      <path d="M128 48L80 176h96z" fill="#fff"/>
      <path d="M128 88v60M108 128h40" stroke="#009688" strokeWidth="8" strokeLinecap="round"/>
    </svg>
  );
}

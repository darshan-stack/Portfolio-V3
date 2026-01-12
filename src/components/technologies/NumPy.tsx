export default function NumPy() {
  return (
    <svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id="numpyBlue" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4DABCF"/>
          <stop offset="100%" stopColor="#013243"/>
        </linearGradient>
      </defs>
      <rect width="256" height="256" fill="#fff"/>
      <path d="M64 128L128 64l64 64-64 64z" fill="url(#numpyBlue)"/>
      <path d="M128 180v40M108 200h40M128 36v40M108 56h40" stroke="#013243" strokeWidth="4"/>
      <circle cx="128" cy="128" r="24" fill="#fff"/>
      <text x="128" y="240" fontSize="48" fontWeight="bold" textAnchor="middle" fill="#013243">N</text>
    </svg>
  );
}

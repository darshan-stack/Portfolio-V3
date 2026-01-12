export default function PyTorch() {
  return (
    <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" preserveAspectRatio="xMidYMid">
      <defs>
        <linearGradient id="ptGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#EE4C2C"/>
          <stop offset="100%" stopColor="#FF6F47"/>
        </linearGradient>
      </defs>
      <path d="M200 50 Q250 50 280 80 Q310 110 310 160 Q310 210 280 240 Q250 270 200 270 L200 230 Q230 230 250 210 Q270 190 270 160 Q270 130 250 110 Q230 90 200 90 L200 50" fill="url(#ptGradient)" stroke="#EE4C2C" strokeWidth="3"/>
      <circle cx="290" cy="70" r="15" fill="#EE4C2C"/>
      <path d="M200 90 L200 350" stroke="url(#ptGradient)" strokeWidth="30" strokeLinecap="round"/>
    </svg>
  );
}

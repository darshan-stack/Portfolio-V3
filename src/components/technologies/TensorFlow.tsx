export default function TensorFlow() {
  return (
    <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" preserveAspectRatio="xMidYMid">
      <defs>
        <linearGradient id="tfGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF9800"/>
          <stop offset="100%" stopColor="#FFB300"/>
        </linearGradient>
      </defs>
      <path d="M50 50L200 50L200 150L150 150L150 350L50 350Z" fill="#FF6F00"/>
      <path d="M350 50L350 350L250 350L250 250L200 250L200 150L250 150L250 50Z" fill="url(#tfGradient)"/>
    </svg>
  );
}

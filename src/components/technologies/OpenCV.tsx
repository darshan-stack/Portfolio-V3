export default function OpenCV() {
  return (
    <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" preserveAspectRatio="xMidYMid">
      {/* Red Circle - Top */}
      <path d="M200 50 Q250 50 250 100 Q250 140 220 160 Q220 160 200 170 L200 70 Q200 50 200 50" fill="#FF0000"/>
      <path d="M200 50 Q150 50 150 100 Q150 140 180 160 Q180 160 200 170 L200 70 Q200 50 200 50" fill="#FF0000"/>
      <circle cx="200" cy="100" r="30" fill="none" stroke="#fff" strokeWidth="25"/>
      
      {/* Green Circle - Bottom Left */}
      <path d="M100 250 Q100 200 150 200 Q180 200 190 220 L120 280 Q100 270 100 250" fill="#00FF00"/>
      <path d="M100 250 Q100 300 150 300 Q180 300 190 280 L120 220 Q100 230 100 250" fill="#00FF00"/>
      <circle cx="140" cy="250" r="30" fill="none" stroke="#fff" strokeWidth="25"/>
      
      {/* Blue Circle - Bottom Right */}
      <path d="M300 250 Q300 200 250 200 Q220 200 210 220 L280 280 Q300 270 300 250" fill="#0000FF"/>
      <path d="M300 250 Q300 300 250 300 Q220 300 210 280 L280 220 Q300 230 300 250" fill="#0000FF"/>
      <circle cx="260" cy="250" r="30" fill="none" stroke="#fff" strokeWidth="25"/>
    </svg>
  );
}

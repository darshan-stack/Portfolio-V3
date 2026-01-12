export default function Kaggle() {
  return (
    <svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id="kaggleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#20BEFF"/>
          <stop offset="100%" stopColor="#1A8CFF"/>
        </linearGradient>
      </defs>
      <rect width="256" height="256" fill="#fff"/>
      <path d="M40 40h40v176H40z" fill="url(#kaggleGradient)"/>
      <path d="M95 128l-15 15v73H40v-88l55-55 121 121-45 45-76-76z" fill="#20BEFF"/>
      <path d="M211 83L95 199l-15-15L195 68z" fill="#1A8CFF"/>
    </svg>
  );
}

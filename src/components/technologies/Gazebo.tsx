export default function Gazebo() {
  return (
    <svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="256" height="256" fill="#F58025"/>
      <path d="M128 40l80 40v80l-80 40-80-40V80z" fill="#fff" opacity="0.2"/>
      <path d="M128 60l60 30v60l-60 30-60-30V90z" fill="none" stroke="#fff" strokeWidth="8"/>
      <circle cx="128" cy="128" r="20" fill="#fff"/>
      <path d="M128 40v40M88 60l-20-10M168 60l20-10M88 196l-20 10M168 196l20 10M128 216v-40" stroke="#fff" strokeWidth="6" strokeLinecap="round"/>
    </svg>
  );
}

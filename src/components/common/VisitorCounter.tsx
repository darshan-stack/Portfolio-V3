'use client';

import { Users } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function VisitorCounter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Simulate visitor count - replace with actual API call
    const storedCount = localStorage.getItem('visitorCount');
    const currentCount = storedCount ? parseInt(storedCount) : Math.floor(Math.random() * 5000) + 1000;
    
    // Increment on each visit
    const newCount = currentCount + 1;
    localStorage.setItem('visitorCount', newCount.toString());
    setCount(newCount);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#111111] border border-zinc-800 shadow-lg backdrop-blur-sm">
        <Users size={16} className="text-zinc-400" />
        <span className="text-xs font-mono text-zinc-300">
          {count.toLocaleString()} visitors
        </span>
      </div>
    </div>
  );
}

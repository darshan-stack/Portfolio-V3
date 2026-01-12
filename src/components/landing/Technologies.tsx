import AWSIcon from '@/components/technologies/AWSIcon';
import Bun from '@/components/technologies/Bun';
import Docker from '@/components/technologies/Docker';
import Figma from '@/components/technologies/Figma';
import Gazebo from '@/components/technologies/Gazebo';
import GoogleCloud from '@/components/technologies/GoogleCloud';
import HuggingFace from '@/components/technologies/HuggingFace';
import JavaScript from '@/components/technologies/JavaScript';
import MongoDB from '@/components/technologies/MongoDB';
import NextJs from '@/components/technologies/NextJs';
import NodeJs from '@/components/technologies/NodeJs';
import NumPy from '@/components/technologies/NumPy';
import OpenCV from '@/components/technologies/OpenCV';
import Pandas from '@/components/technologies/Pandas';
import PostgreSQL from '@/components/technologies/PostgreSQL';
import Postman from '@/components/technologies/Postman';
import Prisma from '@/components/technologies/Prisma';
import PyTorch from '@/components/technologies/PyTorch';
import Python from '@/components/technologies/Python';
import ReactIcon from '@/components/technologies/ReactIcon';
import ROS from '@/components/technologies/ROS';
import ScikitLearn from '@/components/technologies/ScikitLearn';
import TailwindCss from '@/components/technologies/TailwindCss';
import TensorFlow from '@/components/technologies/TensorFlow';
import TypeScript from '@/components/technologies/TypeScript';
import Vercel from '@/components/technologies/Vercel';

interface TechBadgeProps {
  name: string;
  icon: React.ReactNode;
}

function TechBadge({ name, icon }: TechBadgeProps) {
  return (
    <div className="inline-flex items-center gap-2 bg-[#161616] border border-white/10 rounded-md px-3 py-2 hover:bg-[#1e1e1e] transition-colors">
      <div className="h-5 w-5 flex-shrink-0">{icon}</div>
      <span className="text-white font-mono text-sm font-medium">{name}</span>
    </div>
  );
}

export default function Technologies() {
  const technologies = {
    'Core Languages': [
      { name: 'Python', icon: <Python /> },
      { name: 'TypeScript', icon: <TypeScript /> },
      { name: 'JavaScript', icon: <JavaScript /> },
    ],
    'Machine Learning': [
      { name: 'PyTorch', icon: <PyTorch /> },
      { name: 'TensorFlow', icon: <TensorFlow /> },
      { name: 'scikit-learn', icon: <ScikitLearn /> },
      { name: 'Hugging Face', icon: <HuggingFace /> },
      { name: 'OpenCV', icon: <OpenCV /> },
      { name: 'NumPy', icon: <NumPy /> },
      { name: 'Pandas', icon: <Pandas /> },
    ],
    'Robotics & Simulation': [
      { name: 'ROS', icon: <ROS /> },
      { name: 'Gazebo', icon: <Gazebo /> },
    ],
    'Web Frameworks': [
      { name: 'Next.js', icon: <NextJs /> },
      { name: 'React', icon: <ReactIcon /> },
      { name: 'Node.js', icon: <NodeJs /> },
    ],
    'Tools & Backend': [
      { name: 'Bun', icon: <Bun /> },
      { name: 'PostgreSQL', icon: <PostgreSQL /> },
      { name: 'Prisma', icon: <Prisma /> },
      { name: 'MongoDB', icon: <MongoDB /> },
      { name: 'Tailwind CSS', icon: <TailwindCss /> },
      { name: 'Figma', icon: <Figma /> },
      { name: 'Docker', icon: <Docker /> },
    ],
    'Cloud & Deployment': [
      { name: 'AWS', icon: <AWSIcon /> },
      { name: 'Google Cloud', icon: <GoogleCloud /> },
      { name: 'Vercel', icon: <Vercel /> },
      { name: 'Postman', icon: <Postman /> },
    ],
  };

  return (
    <section className="py-20 bg-background">
      <div className="mx-auto max-w-4xl px-4">
        <h2 className="text-white text-3xl font-bold font-mono mb-12">
          Technologies & Tools
        </h2>

        <div className="space-y-10">
          {Object.entries(technologies).map(([category, tools]) => (
            <div key={category}>
              <h3 className="text-white/60 text-sm font-mono font-bold uppercase tracking-wider mb-4">
                {category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {tools.map((tech) => (
                  <TechBadge key={tech.name} name={tech.name} icon={tech.icon} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

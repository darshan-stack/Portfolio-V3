import Image from 'next/image';

const skills = [
  { name: 'Python', path: '/skills/python.svg' },
  { name: 'PyTorch', path: '/skills/pytorch.svg' },
  { name: 'TensorFlow', path: '/skills/tensorflow.svg' },
  { name: 'Hugging Face', path: '/skills/huggingface.svg' },
  { name: 'React', path: '/skills/react.svg' },
  { name: 'Next.js', path: '/skills/nextjs.svg' },
  { name: 'TypeScript', path: '/skills/typescript.svg' },
  { name: 'JavaScript', path: '/skills/javascript.svg' },
  { name: 'Node.js', path: '/skills/nodejs.svg' },
  { name: 'Docker', path: '/skills/docker.svg' },
  { name: 'Kubernetes', path: '/skills/kubernetes.svg' },
  { name: 'AWS', path: '/skills/aws.svg' },
  { name: 'MongoDB', path: '/skills/mongodb.svg' },
  { name: 'PostgreSQL', path: '/skills/postgresql.svg' },
  { name: 'Prisma', path: '/skills/prisma.svg' },
  { name: 'Bun', path: '/skills/bun.svg' },
];

export const mySkills = skills.map(skill => (
  <Image 
    key={skill.name.toLowerCase()} 
    src={skill.path} 
    alt={skill.name} 
    width={32} 
    height={32} 
  />
));

export const about = {
  name: 'Darshan',
  description: `I'm a Machine Learning and Robotics Developer specializing in AI research, computer vision, and autonomous systems. I build intelligent solutions for real-world problems.`,
};

import Image from 'next/image';

export interface Technology {
  name: string;
  href: string;
  icon: React.ReactNode;
}

export interface Experience {
  company: string;
  position: string;
  location: string;
  image: string;
  description: string[];
  startDate: string;
  endDate: string;
  website: string;
  x?: string;
  linkedin?: string;
  github?: string;
  technologies: Technology[];
  isCurrent: boolean;
  isBlur?: boolean;
}

export const experiences: Experience[] = [
  {
    isCurrent: true,
    isBlur: true,
    company: 'Atomic Finance',
    position: 'Machine Learning Engineer',
    location: 'United States (Remote)',
    image: '/company/atomic-finance.png',
    description: [
      'Developed and deployed computer vision models for real-time object detection and tracking using PyTorch and TensorFlow.',
      'Optimized deep learning models achieving 40% reduction in inference latency while maintaining 95%+ accuracy.',
      'Implemented ML pipelines for automated model training, validation, and deployment using MLflow and Docker.',
      'Built perception systems for autonomous navigation.',
      'Architected scalable ML infrastructure on AWS for processing large-scale visual data.',
    ],
    startDate: 'August 2025',
    endDate: 'Present',
    website: 'https://atomic.finance',
    technologies: [
      {
        name: 'Python',
        href: 'https://python.org/',
        icon: <Image src="/skills/python.svg" alt="Python" width={20} height={20} />,
      },
      {
        name: 'PyTorch',
        href: 'https://pytorch.org/',
        icon: <Image src="/skills/pytorch.svg" alt="PyTorch" width={20} height={20} />,
      },
      {
        name: 'TensorFlow',
        href: 'https://tensorflow.org/',
        icon: <Image src="/skills/tensorflow.svg" alt="TensorFlow" width={20} height={20} />,
      },
      {
        name: 'scikit-learn',
        href: 'https://scikit-learn.org/',
        icon: <Image src="/skills/scikit-learn.svg" alt="scikit-learn" width={20} height={20} />,
      },
      {
        name: 'OpenCV',
        href: 'https://opencv.org/',
        icon: <Image src="/skills/opencv.svg" alt="OpenCV" width={20} height={20} />,
      },
      {
        name: 'Pandas',
        href: 'https://pandas.pydata.org/',
        icon: <Image src="/skills/pandas.svg" alt="Pandas" width={20} height={20} />,
      },
      {
        name: 'NumPy',
        href: 'https://numpy.org/',
        icon: <Image src="/skills/numpy.svg" alt="NumPy" width={20} height={20} />,
      },
      {
        name: 'Hugging Face',
        href: 'https://huggingface.co/',
        icon: <Image src="/skills/huggingface.svg" alt="Hugging Face" width={20} height={20} />,
      },
    ],
    github: '#',
    x: '#',
  },
];

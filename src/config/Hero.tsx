/*
 * CUSTOMIZATION EXAMPLE
 *
 * Want to customize this portfolio for yourself? Here's how easy it is:
 *
 * 1. Update your personal info:
 *    name: "Your Name"
 *    title: "Your Professional Title"
 *    avatar: "/path/to/your/image.jpg"
 *
 * 2. Add your skills:
 *    skills: [
 *      { name: "Python", href: "https://python.org", component: "Python" }, // Note: You'd need to create Python component
 *      { name: "React", href: "https://react.dev", component: "ReactIcon" },
 *      { name: "Node.js", href: "https://nodejs.org", component: "NodeJs" },
 *    ]
 *
 * 3. Write your description using the template:
 *    template: "I'm a **passionate developer** who loves building apps with {skills:0} and {skills:1}. I specialize in **web development** and enjoy working with {skills:2}."
 *
 * 4. Update your social links:
 *    Just change the href values to your own social media profiles
 *
 * That's it! Your portfolio will automatically update with your information.
 */
import Github from '@/components/svgs/Github';
import LinkedIn from '@/components/svgs/LinkedIn';
import Mail from '@/components/svgs/Mail';
import X from '@/components/svgs/X';
import Image from 'next/image';

// Component mapping for skills - now using Image components with SVGs
export const skillComponents = {
  PyTorch: () => <Image src="/skills/pytorch.svg" alt="PyTorch" width={20} height={20} />,
  TensorFlow: () => <Image src="/skills/tensorflow.svg" alt="TensorFlow" width={20} height={20} />,
  HuggingFace: () => <Image src="/skills/huggingface.svg" alt="Hugging Face" width={20} height={20} />,
  Python: () => <Image src="/skills/python.svg" alt="Python" width={20} height={20} />,
  OpenCV: () => <Image src="/skills/opencv.svg" alt="OpenCV" width={20} height={20} />,
  ROS: () => <Image src="/skills/ros.svg" alt="ROS" width={20} height={20} />,
  Pandas: () => <Image src="/skills/pandas.svg" alt="Pandas" width={20} height={20} />,
  NumPy: () => <Image src="/skills/numpy.svg" alt="NumPy" width={20} height={20} />,
  ScikitLearn: () => <Image src="/skills/scikit-learn.svg" alt="scikit-learn" width={20} height={20} />,
  GoogleCloud: () => <Image src="/skills/google-cloud.svg" alt="Google Cloud" width={20} height={20} />,
  Docker: () => <Image src="/skills/docker.svg" alt="Docker" width={20} height={20} />,
  AWSIcon: () => <Image src="/skills/aws.svg" alt="AWS" width={20} height={20} />,
};

export const heroConfig = {
  // Personal Information
  name: 'Darshan',
  title: 'ML & Robotics Developer',
  avatar: '/assets/logo.png',

  // Skills Configuration
  skills: [
    {
      name: 'PyTorch',
      href: 'https://pytorch.org/',
      component: 'PyTorch',
    },
    {
      name: 'TensorFlow',
      href: 'https://www.tensorflow.org/',
      component: 'TensorFlow',
    },
    {
      name: 'Hugging Face',
      href: 'https://huggingface.co/',
      component: 'HuggingFace',
    },
    {
      name: 'OpenCV',
      href: 'https://opencv.org/',
      component: 'OpenCV',
    },
    {
      name: 'Python',
      href: 'https://www.python.org/',
      component: 'Python',
    },
  ],

  // Description Configuration
  description: {
    template:
      'Machine Learning & Deep Learning Engineer specializing in Computer Vision, Natural Language Processing, and AI System Architecture. Building intelligent, production-ready solutions with {skills:0}, {skills:1}, and {skills:2} Expertise in model optimization, real-time inference pipelines, and scalable ML deployment.',
  },

  // Buttons Configuration
  buttons: [
    {
      variant: 'outline',
      text: 'Resume / CV',
      href: '/resume',
      icon: 'CV',
    },
    {
      variant: 'default',
      text: 'Get in touch',
      href: '/contact',
      icon: 'Chat',
    },
  ],
};

// Social Links Configuration
export const socialLinks = [
  {
    name: 'X',
    href: 'https://x.com/ramxcodes',
    icon: <X />,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/ramxcodes/',
    icon: <LinkedIn />,
  },
  {
    name: 'Github',
    href: 'https://github.com/ramxcodes',
    icon: <Github />,
  },
  {
    name: 'Email',
    href: 'mailto:ramxcodes@gmail.com',
    icon: <Mail />,
  },
];

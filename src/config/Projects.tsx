import { Project } from '@/types/project';
import Image from 'next/image';

export const projects: Project[] = [
    {
        title: 'vLLM - High-Performance LLM Inference',
        description: 'Contributed to vLLM, a high-throughput and memory-efficient inference engine for Large Language Models. Optimized model serving with PagedAttention and continuous batching for 10x performance improvement.',
        image: '/projects/vllm.png',
        link: 'https://github.com/darshan-stack/vllm',
        technologies: [
            { name: 'Python', icon: <Image src="/skills/python.svg" alt="Python" width={20} height={20} /> },
            { name: 'PyTorch', icon: <Image src="/skills/pytorch.svg" alt="PyTorch" width={20} height={20} /> },
            { name: 'CUDA', icon: <Image src="/skills/cuda.svg" alt="CUDA" width={20} height={20} /> },
            { name: 'Docker', icon: <Image src="/skills/docker.svg" alt="Docker" width={20} height={20} /> },
        ],
        github: 'https://github.com/darshan-stack/vllm',
        live: 'https://github.com/vllm-project/vllm',
        details: true,
        projectDetailsPageSlug: 'vllm-optimization',
        isWorking: true,
    },
    {
        title: 'Auto-R - Autonomous Robotics Platform',
        description: 'Developed autonomous robotics system with computer vision and path planning. Integrated ROS2, OpenCV, and deep learning for real-time object detection and navigation with 95% accuracy.',
        image: '/projects/auto-r.png',
        link: 'https://github.com/darshan-stack/Auto-R',
        technologies: [
            { name: 'ROS2', icon: <Image src="/skills/ros.svg" alt="ROS2" width={20} height={20} /> },
            { name: 'Python', icon: <Image src="/skills/python.svg" alt="Python" width={20} height={20} /> },
            { name: 'C++', icon: <Image src="/skills/cpp.svg" alt="C++" width={20} height={20} /> },
            { name: 'OpenCV', icon: <Image src="/skills/opencv.svg" alt="OpenCV" width={20} height={20} /> },
        ],
        github: 'https://github.com/darshan-stack/Auto-R',
        live: 'https://github.com/darshan-stack/Auto-R',
        details: true,
        projectDetailsPageSlug: 'auto-r-robotics',
        isWorking: true,
    },
    {
        title: 'LLM Concepts - Educational Framework',
        description: 'Comprehensive educational repository covering LLM architectures, training techniques, and deployment. Includes transformer implementations, attention mechanisms, LoRA, QLoRA, and RLHF with 50+ concepts.',
        image: '/projects/llm-concepts.png',
        link: 'https://github.com/darshan-stack/LLM-Concepts',
        technologies: [
            { name: 'PyTorch', icon: <Image src="/skills/pytorch.svg" alt="PyTorch" width={20} height={20} /> },
            { name: 'Hugging Face', icon: <Image src="/skills/huggingface.svg" alt="Hugging Face" width={20} height={20} /> },
            { name: 'Python', icon: <Image src="/skills/python.svg" alt="Python" width={20} height={20} /> },
            { name: 'Jupyter', icon: <Image src="/skills/jupyter.svg" alt="Jupyter" width={20} height={20} /> },
        ],
        github: 'https://github.com/darshan-stack/LLM-Concepts',
        live: 'https://github.com/darshan-stack/LLM-Concepts',
        details: true,
        projectDetailsPageSlug: 'llm-concepts',
        isWorking: true,
    },
];

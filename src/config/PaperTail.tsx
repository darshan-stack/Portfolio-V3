export interface DailyPaper {
  id: string;
  title: string;
  date: string;
  logNumber: number;
  significance: string;
  challenge: string;
  tags: string[];
  arxivId?: string;
  link: string;
  isRecent?: boolean;
  detailedSummary?: string;
  image?: string;
}

export const dailyPapers: DailyPaper[] = [
  {
    id: '1',
    title: 'Attention Is All You Need',
    date: 'Jan 5, 2026',
    logNumber: 247,
    significance:
      'Foundational transformer architecture that eliminated RNN bottlenecks. Implemented multi-head attention to achieve 35% faster convergence in my seq2seq models.',
    challenge:
      'Debugging positional encoding overflow in embeddings for sequences >512 tokens. Switched to learned positional embeddings.',
    tags: ['Transformers', 'NLP', 'PyTorch'],
    arxivId: '1706.03762',
    link: 'https://arxiv.org/abs/1706.03762',
    isRecent: true,
    detailedSummary:
      'The Transformer architecture introduced in this paper revolutionized natural language processing by replacing recurrent layers with self-attention mechanisms. This paradigm shift enabled parallel processing of sequences, dramatically improving training efficiency. In my implementation, I focused on optimizing the multi-head attention mechanism for production environments, achieving 35% faster convergence compared to LSTM-based models. The key insight was that attention weights could capture long-range dependencies without the sequential bottleneck of RNNs. I encountered challenges with positional encodings for sequences longer than 512 tokens, where the sinusoidal encoding led to numerical overflow. After experimenting with various solutions, I switched to learned positional embeddings, which provided more flexibility and stability for longer contexts. This paper remains foundational to my work in sequence modeling and has influenced my approach to building scalable NLP systems.',
  },
  {
    id: '2',
    title: 'LoRA: Low-Rank Adaptation of Large Language Models',
    date: 'Jan 4, 2026',
    logNumber: 246,
    significance:
      'Parameter-efficient fine-tuning that reduced GPU memory by 80%. Fine-tuned a 7B model on 8GB VRAM with 98% baseline performance.',
    challenge:
      'Rank selection was critical—too low degraded accuracy, too high negated memory savings. Settled on rank=8 after grid search.',
    tags: ['Fine-tuning', 'LLM', 'Optimization'],
    arxivId: '2106.09685',
    link: 'https://arxiv.org/abs/2106.09685',
    isRecent: true,
    detailedSummary:
      'LoRA (Low-Rank Adaptation) presents an elegant solution to the challenge of fine-tuning massive language models with limited computational resources. By freezing the pretrained weights and injecting trainable rank decomposition matrices, LoRA achieves remarkable parameter efficiency. In my experiments with a 7B parameter model, I successfully fine-tuned on consumer hardware (8GB VRAM) while maintaining 98% of full fine-tuning performance. The critical hyperparameter was the rank r—setting it too low (r=4) resulted in underfitting and degraded task performance, while too high (r=64) defeated the memory savings. Through systematic grid search, I found r=8 provided the optimal balance. The technique also enabled rapid experimentation, as switching between task-specific adaptations required only swapping small weight matrices. This paper fundamentally changed my approach to model adaptation and demonstrated that clever architectural choices can democratize access to large-scale AI.',
  },
  {
    id: '3',
    title: 'YOLOv10: Real-Time End-to-End Object Detection',
    date: 'Jan 2, 2026',
    logNumber: 245,
    significance:
      'NMS-free architecture enabling true end-to-end detection. Achieved 45 FPS on Jetson Nano with 92% mAP for robotics navigation.',
    challenge:
      'Anchor-free heads required careful loss balancing. Used focal loss with α=0.25 to handle class imbalance in edge cases.',
    tags: ['Computer Vision', 'Real-time', 'Edge AI'],
    arxivId: '2405.14458',
    link: 'https://arxiv.org/abs/2405.14458',
  },
  {
    id: '4',
    title: 'Deep Residual Learning for Image Recognition',
    date: 'Dec 30, 2025',
    logNumber: 244,
    significance:
      'Skip connections solved vanishing gradients in deep networks. Built a 50-layer ResNet for medical imaging with 94% validation accuracy.',
    challenge:
      'Batch normalization placement was tricky—post-activation vs pre-activation significantly impacted convergence speed.',
    tags: ['Computer Vision', 'ResNet', 'Architecture'],
    arxivId: '1512.03385',
    link: 'https://arxiv.org/abs/1512.03385',
  },
];

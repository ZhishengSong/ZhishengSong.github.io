// 履历数据：改这里，首页和 Resume 页会自动更新
export const profile = {
  name: 'Zhisheng Song',
  tagline: 'M.S. Applied Statistics @ University of Michigan',
  location: 'Ann Arbor, MI',
  bio: 'I work on statistical inference, stochastic processes, and machine learning — currently exploring how large language models can support likelihood-based inference for nonlinear stochastic dynamic systems.',
  email: 'zhishengsong2024@gmail.com',
  links: [
    { label: 'GitHub', url: 'https://github.com/ZhishengSong' },
    // 有需要可以继续加，例如：
    // { label: 'LinkedIn', url: 'https://www.linkedin.com/in/yourname' },
  ] as { label: string; url: string }[],
};

export const education = [
  {
    school: 'University of Michigan, Ann Arbor',
    degree: 'M.S. in Applied Statistics',
    period: '2025 – Present',
    detail: 'Statistical Inference, Time Series Analysis, Regression Analysis, Machine Learning',
  },
  {
    school: 'Shandong University',
    degree: 'B.S. in Mathematics and Applied Mathematics (Minor: Computer Science)',
    period: '2021 – 2025',
    detail: 'Real Analysis, Probability Theory, Data Analysis and Decision Making, Advanced Algebra',
  },
];

export const experience = [
  {
    org: 'University of Michigan',
    role: 'Graduate Research Assistant · Advisor: Prof. Edward Ionides',
    period: '01/2026 – Present',
    points: [
      'Investigating the use of large language models to support likelihood-based inference for partially observed nonlinear stochastic dynamic systems.',
      'Exploring prompt engineering and evaluation frameworks to automate statistical coding routines and promote best practices in high-dimensional data analysis.',
    ],
  },
  {
    org: 'Westlake University',
    role: 'Visiting Student · Computer Vision and Geometric Learning Lab',
    period: '11/2024 – 04/2025',
    points: [
      'Researched sampling methods for optimization problems leveraging diffusion models and stochastic processes.',
      'Used optimal transport and Schrödinger bridge theory to analyze and improve the stability of generative sampling methods.',
    ],
  },
  {
    org: 'Beijing Nicon Instrument Co., Ltd.',
    role: 'Data Analysis Intern',
    period: '07/2024 – 09/2024',
    points: [
      'Built Python/SQL pipelines to automate cleaning and organization of large-scale customer usage data.',
      'Produced visualizations delivering actionable insights for product development teams.',
    ],
  },
  {
    org: 'Shandong Victorysoft Co., Ltd.',
    role: 'Software Development Intern',
    period: '07/2023 – 08/2023',
    points: [
      'Developed an enterprise information management platform integrating relational databases with front-end interfaces.',
    ],
  },
];

export const projects = [
  {
    name: 'Curtain Fabric Anomaly Detection',
    period: '2023',
    desc: 'Unsupervised defect-detection pipeline with OpenCV and adaptive thresholding; anomaly scoring and heatmap visualizations of defect severity.',
  },
  {
    name: 'Cavity Search in High-Order Networks',
    period: '2023',
    desc: 'Reproduced clique and cavity detection algorithms in Python and R; applied k-core decomposition to large-scale network topologies.',
  },
  {
    name: 'Mathematical Contest in Modeling (MCM)',
    period: '2024',
    desc: 'Population growth models combining Lotka–Volterra equations with stochastic simulation, plus parameter sensitivity analysis.',
  },
];

export const skills = [
  { group: 'Programming', items: 'Python, R, SQL, C++, MATLAB' },
  { group: 'Machine Learning', items: 'Diffusion Models, LLM Prompting, Statistical Modeling, Unsupervised Learning' },
  { group: 'Tools', items: 'Git, Linux, LaTeX, Jupyter, Mathematica' },
];

export const awards = [
  { name: 'Scholarship for Academic Excellence, Shandong University (Top 10%)', period: '2021 – 2024' },
];

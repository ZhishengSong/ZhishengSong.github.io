// 履历数据：改这里，首页、Publications 和 CV 页会自动更新
export const profile = {
  name: 'Zhisheng Song',
  tagline: 'M.S. Applied Statistics @ University of Michigan',
  location: 'Ann Arbor, MI',
  bio: 'I work on stochastic processes, statistical inference, and machine learning, with a focus on stochastic optimal control and AI for scientific data analysis.',
  email: 'zhishengsong2024@gmail.com',
  interests: [
    'Stochastic Optimal Control',
    'Diffusion & Sampling',
    'Partially Observed Markov Processes',
    'LLM Agents for Science',
  ],
  links: [
    { label: 'GitHub', url: 'https://github.com/ZhishengSong' },
    // 有需要可以继续加，例如：
    // { label: 'Google Scholar', url: 'https://scholar.google.com/citations?user=...' },
    // { label: 'LinkedIn', url: 'https://www.linkedin.com/in/yourname' },
  ] as { label: string; url: string }[],
};

// 动态：最新的放最前面
export const news = [
  { date: '2026-10', text: 'v3 of <em>Jagged AI in Scientific Peer Review</em> is on arXiv.' },
  { date: '2026-09', text: 'Two papers on path-integral control and Schrödinger bridges submitted to ICLR 2027.' },
  { date: '2026-08', text: '<em>Path Integral Value Matching</em> released on arXiv.' },
  { date: '2026-05', text: '<em>Jagged AI in Scientific Peer Review</em> released on arXiv.' },
  { date: '2026-01', text: 'Started research with Prof. Edward Ionides at UMich.' },
];

// 研究方向
export const research = [
  {
    id: 'soc',
    title: 'Stochastic Optimal Control & Sampling',
    where: 'Westlake University · 2024–2025',
    text: 'Path-integral methods that learn value functions from short rollouts, with applications to Bayesian smoothing, mean-field games, and Schrödinger bridges.',
  },
  {
    id: 'pomp',
    title: 'AI Agents for Scientific Inference',
    where: 'University of Michigan · 2026',
    text: 'Evaluating LLM agents as reviewers of likelihood-based analyses of partially observed Markov processes.',
  },
];

export type Paper = {
  title: string;
  authors: string[]; // 留空 = 双盲审稿中，暂不显示作者
  note?: string;
  venue: string;
  year: number;
  status?: string;
  tag: string;
  links: { label: string; url: string }[];
  abstract: string;
  bibtex: string;
};

export const publications: Paper[] = [
  {
    title: 'SPIM: Solving Schrödinger Bridges via Alternating Stochastic Optimal Control',
    authors: [],
    note: 'Author list withheld during double-blind review',
    venue: 'Submitted to ICLR 2027',
    year: 2026,
    status: 'Under review',
    tag: 'schrödinger bridge',
    links: [],
    abstract:
      'Schrödinger bridges and stochastic optimal control are closely related, but the two-endpoint constraints of an SB make terminal-cost SOC solvers hard to apply directly. Schrödinger Potential Iteration Matching (SPIM) alternates forward and backward SOC problems that realize the fixed-point iteration of Schrödinger potentials: each direction uses as terminal cost the relative endpoint energy minus the value returned by the opposite SOC. Under compactness and uniform kernel positivity, exact alternation inherits the Hilbert-metric contraction of the classical iteration, giving geometric convergence. The framework supports energy-to-energy transport without endpoint samples, running state costs, and different solvers in each direction.',
    bibtex: '',
  },
  {
    title: 'Path-Integral Value-Control Matching with Applications to Smoothing and Game',
    authors: [],
    note: 'Author list withheld during double-blind review',
    venue: 'Submitted to ICLR 2027',
    year: 2026,
    status: 'Under review',
    tag: 'stochastic control',
    links: [],
    abstract:
      'Local path-integral value learning allows short-trajectory updates and experience replay, but a scalar value objective does not directly supervise the value gradient that determines the control. PI-VCM spatially differentiates the local path-integral value recursion to obtain a control recursion, so the same short trajectories supply both value and control targets for one network. Affine sensitivity caching and local likelihood correction enable off-policy replay without repeated adjoint propagation. PI-VCM improves control accuracy over PI-VM on SOC benchmarks and is competitive on Bayesian smoothing and mean-field games.',
    bibtex: '',
  },
  {
    title: 'Path Integral Value Matching for Linear Quadratic Stochastic Optimal Control',
    authors: ['Bangyan Liao', 'Chenglei Yu', 'Yuchen Yang', 'Chuanrui Wang', 'Zhisheng Song', 'Peidong Liu', 'Tailin Wu'],
    venue: 'arXiv:2608.10777',
    year: 2026,
    status: 'Under review at ICLR 2027',
    tag: 'stochastic control',
    links: [
      { label: 'arXiv', url: 'https://arxiv.org/abs/2608.10777' },
      { label: 'PDF', url: 'https://arxiv.org/pdf/2608.10777' },
      { label: 'Code', url: 'https://github.com/bangyan101/PIVM/' },
    ],
    abstract:
      'Policy-based methods for linear-quadratic stochastic optimal control rely on full-trajectory simulation, which makes them costly and unstable. We revisit Path Integral Control and show that truncating and marginalizing the path-integral formulation yields a temporal recursion for the value function. PI-VM fits this recursion with temporal-difference learning and uses the Girsanov theorem with experience replay for off-policy training, matching state-of-the-art precision with roughly an order-of-magnitude efficiency gain in low dimensions and reducing mode collapse in high dimensions.',
    bibtex: `@article{liao2026pivm,
  title   = {Path Integral Value Matching for Linear Quadratic Stochastic Optimal Control},
  author  = {Liao, Bangyan and Yu, Chenglei and Yang, Yuchen and Wang, Chuanrui and Song, Zhisheng and Liu, Peidong and Wu, Tailin},
  journal = {arXiv preprint arXiv:2608.10777},
  year    = {2026}
}`,
  },
  {
    title: 'Jagged AI in Scientific Peer Review: Evidence from POMP Data Analysis',
    authors: ['Jin Wook Lee', 'William Szegda', 'Zhisheng Song', 'Edward L. Ionides'],
    venue: 'arXiv:2605.07855',
    year: 2026,
    tag: 'AI for science',
    links: [
      { label: 'arXiv', url: 'https://arxiv.org/abs/2605.07855' },
      { label: 'PDF', url: 'https://arxiv.org/pdf/2605.07855' },
    ],
    abstract:
      'How well do AI tools review scientific work? Using 72 graduate projects that fit partially observed Markov process (POMP) models, we compare human peer reviews with four Claude Code review agents built from different skill files. The agents show a jagged capability profile: they find technical implementation errors and invalid inference that humans missed, but are weaker on interpretive errors, narrative coherence, and domain-informed model critique. Changing the skill file shifts which weaknesses appear without removing the jaggedness.',
    bibtex: `@article{lee2026jagged,
  title   = {Jagged AI in Scientific Peer Review: Evidence from POMP Data Analysis},
  author  = {Lee, Jin Wook and Szegda, William and Song, Zhisheng and Ionides, Edward L.},
  journal = {arXiv preprint arXiv:2605.07855},
  year    = {2026}
}`,
  },
];

export const education = [
  {
    school: 'University of Michigan, Ann Arbor',
    degree: 'M.S. in Applied Statistics',
    period: '2025 – 2026',
    detail: 'Statistical Inference, Time Series Analysis, Regression Analysis, Machine Learning',
  },
  {
    school: 'Shandong University',
    degree: 'B.S. in Mathematics and Applied Mathematics (Minor: Computer Science)',
    period: '2021 – 2025',
    detail: 'Real Analysis, Probability Theory, Stochastic Processes, Optimization',
  },
];

export const experience = [
  {
    org: 'University of Michigan',
    role: 'Master’s Research Opportunity Program · Advisor: Prof. Edward Ionides',
    period: '01/2026 – 09/2026',
    points: [
      'Curated reports, source code, and instructor-validated review issues from 72 open-source POMP projects for evaluating AI-assisted scientific review.',
      'Designed and compared four Claude review-agent configurations — baseline, course-guided, meta-skill, and orchestrated — using structured issue matching and Human Overlap.',
    ],
  },
  {
    org: 'Westlake University',
    role: 'Visiting Student · Computer Vision and Geometric Learning Lab',
    period: '11/2024 – 04/2025',
    points: [
      'Investigated stochastic optimal control and sampling methods, focusing on path-integral control and free-energy representations of value functions.',
      'Evaluated PI-VM against policy-based baselines across stochastic-control and sampling tasks, analyzing computational efficiency and high-dimensional mode collapse.',
      'Contributed to a manuscript now under review at ICLR.',
    ],
  },
  {
    org: 'Beijing Nicon Instrument Co., Ltd.',
    role: 'Data Analyst Intern',
    period: '07/2024 – 09/2024',
    points: ['Analyzed customer usage data with Python and SQL; delivered visual reports for product decisions.'],
  },
  {
    org: 'Shandong Victorysoft Co., Ltd.',
    role: 'Software Development Intern',
    period: '07/2023 – 09/2023',
    points: ['Integrated relational databases with front-end interfaces for an enterprise management platform.'],
  },
];

export const skills = [
  { group: 'Programming', items: 'Python, R, SQL, C++ · NumPy, Pandas, scikit-learn, PyTorch' },
  { group: 'Methods', items: 'Statistical Inference, Time Series, Regression, Stochastic Processes, Optimization, ML' },
  { group: 'Tools', items: 'Git, Linux, Slurm, LaTeX' },
];

export const awards = [
  { name: 'Outstanding Graduate, Shandong University', period: '' },
  { name: 'Top 10% Academic Scholarship, Shandong University', period: '2021 – 2024' },
];

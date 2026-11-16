import { defineConfig } from 'astro/config';

// 网站地址（GitHub Pages）
export default defineConfig({
  site: 'https://zhishengsong.github.io',
  // 旧链接 /resume 自动跳到 /cv
  redirects: { '/resume': '/cv' },
});

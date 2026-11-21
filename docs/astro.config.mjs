// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

const SITE = 'https://bcastillo-2022474.github.io';
const BASE = '/CamperitOs';

// https://astro.build/config
export default defineConfig({
	site: SITE,
	base: BASE,
	integrations: [
		starlight({
			title: 'Camperitos',
			logo: { src: './src/assets/camperitos-mark.svg', alt: '' },
			favicon: '/favicon.svg',
			defaultLocale: 'root',
			locales: { root: { label: 'Español', lang: 'es' } },
			customCss: ['./src/styles/custom.css'],
			head: [
				{ tag: 'link', attrs: { rel: 'icon', href: `${BASE}/favicon.png`, type: 'image/png', sizes: '512x512' } },
				{ tag: 'link', attrs: { rel: 'apple-touch-icon', href: `${BASE}/apple-touch-icon.png` } },
				{ tag: 'meta', attrs: { property: 'og:image', content: `${SITE}${BASE}/og.png` } },
				{ tag: 'meta', attrs: { property: 'og:image:width', content: '1200' } },
				{ tag: 'meta', attrs: { property: 'og:image:height', content: '630' } },
				{ tag: 'meta', attrs: { property: 'og:image:alt', content: 'Camperitos, una distro de Linux hecha en Guatemala' } },
				{ tag: 'meta', attrs: { name: 'twitter:image', content: `${SITE}${BASE}/og.png` } },
			],
			expressiveCode: {
				themes: ['github-dark'],
				useStarlightUiThemeColors: false,
				styleOverrides: {
					borderRadius: '20px',
					borderWidth: '0px',
					codeBackground: '#17130f',
					codeFontFamily: "'JetBrains Mono', ui-monospace, monospace",
					codeFontSize: '0.9375rem',
					frames: {
						frameBoxShadowCssValue: 'none',
						editorTabBarBackground: '#17130f',
						terminalTitlebarBackground: '#17130f',
						terminalTitlebarBorderBottomColor: '#3a332b',
						terminalTitlebarForeground: '#d9d0bc',
						terminalBackground: '#17130f',
					},
				},
			},
			sidebar: [
				{ label: 'Proyecto', items: [{ autogenerate: { directory: 'proyecto' } }] },
				{ label: 'Comunidad', items: [{ autogenerate: { directory: 'comunidad' } }] },
				{ label: 'Legal', items: [{ autogenerate: { directory: 'legal' } }] },
			],
		}),
	],
});

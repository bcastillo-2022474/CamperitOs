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
			title: 'CamperitOs',
			logo: { src: './src/assets/sudoers-mark.png', alt: '' },
			favicon: '/favicon.png',
			defaultLocale: 'root',
			locales: { root: { label: 'Español', lang: 'es' } },
			customCss: ['./src/styles/custom.css'],
			head: [
				{ tag: 'meta', attrs: { property: 'og:image', content: `${SITE}${BASE}/og.png` } },
				{ tag: 'meta', attrs: { property: 'og:image:width', content: '1200' } },
				{ tag: 'meta', attrs: { property: 'og:image:height', content: '630' } },
				{ tag: 'meta', attrs: { property: 'og:image:alt', content: 'CamperitOs, distribución de Linux basada en Fedora' } },
				{ tag: 'meta', attrs: { name: 'twitter:image', content: `${SITE}${BASE}/og.png` } },
				{ tag: 'link', attrs: { rel: 'preconnect', href: 'https://fonts.googleapis.com' } },
				{ tag: 'link', attrs: { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' } },
				{
					tag: 'link',
					attrs: {
						rel: 'stylesheet',
						href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=IBM+Plex+Mono:wght@400;700&family=League+Spartan:wght@700&display=swap',
					},
				},
			],
			expressiveCode: {
				themes: ['github-dark'],
				useStarlightUiThemeColors: false,
				styleOverrides: {
					borderRadius: '16px',
					borderWidth: '2px',
					borderColor: '#242933',
					codeBackground: '#181c23',
					codeFontFamily: "'IBM Plex Mono', ui-monospace, monospace",
					codeFontSize: '0.875rem',
					frames: {
						frameBoxShadowCssValue: 'none',
						editorTabBarBackground: '#181c23',
						terminalTitlebarBackground: '#181c23',
						terminalTitlebarBorderBottomColor: '#242933',
						terminalTitlebarForeground: '#8b93a1',
						terminalBackground: '#181c23',
					},
				},
			},
			sidebar: [
				{ label: '~/proyecto', items: [{ autogenerate: { directory: 'proyecto' } }] },
				{ label: '~/comunidad', items: [{ autogenerate: { directory: 'comunidad' } }] },
				{ label: '~/legal', items: [{ autogenerate: { directory: 'legal' } }] },
			],
		}),
	],
});

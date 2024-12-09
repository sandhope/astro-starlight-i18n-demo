import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://sandhope.github.io',
	base: '/astro-starlight-i18n-demo',
	trailingSlash: 'never',
	integrations: [
		starlight({
			title: {
				en: 'astro-starlight-i18n-demo',
				'zh-CN': 'astro-starlight-i18n-demo',
			},
			social: {
				github: 'https://github.com/withastro/starlight',
			},
			sidebar: [
				{
					label: 'Guides',
					translations: {
						'zh-CN': '引导',
					},
					items: [{ slug: 'guides/example' }],
				},
				{
					label: 'Reference',
					translations: {
						'zh-CN': '参考',
					},
					autogenerate: { directory: 'reference' },
				},
			],
			defaultLocale: 'root',
			locales: {
				root: {
					label: 'English',
					lang: 'en',
				},
				'zh-cn': {
					label: '简体中文',
					lang: 'zh-CN',
				},
			},
		}),
	],
});

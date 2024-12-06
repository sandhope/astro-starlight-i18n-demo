import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: {
				en: 'My Docs',
				'zh-CN': '我的文档',
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

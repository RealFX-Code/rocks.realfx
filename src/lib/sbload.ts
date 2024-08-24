
import { SECRET_STORYBLOK_TOKEN } from "$env/static/private";
import { apiPlugin, storyblokInit } from "@storyblok/svelte";

// Storyblok elements

import Divider from '$lib/components/bloks/Divider.svelte';
import Heading from '$lib/components/bloks/Heading.svelte';
import Page from '$lib/components/bloks/Page.svelte';
import Space from '$lib/components/bloks/Space.svelte';
import Text from '$lib/components/bloks/Text.svelte';
import Link from '$lib/components/bloks/link.svelte';
import Codeblock from '$lib/components/bloks/Codeblock.svelte';
import image from '$lib/components/bloks/image.svelte';

// Largely copied from: https://github.com/roberto-butti/sveltekit-storyblok-workshop/blob/afc0184faad0c8ef37a3972ed8586b636f68ea8e/src/lib/sblib.js#L8

export async function useStoryblok() {
	// 002 setting the access token (from environment variable)
	const accessToken = SECRET_STORYBLOK_TOKEN;
	// 003 call storyblok init
	await storyblokInit({
		// 004 using the access token
		accessToken: accessToken,
		// 005 using the apiPlugin (for connecting with Stroyblok API)
		use: [apiPlugin],
		// 006 listing the needed components
        components: {
            divider: Divider,
            heading: Heading,
            space: Space,
            page: Page,
            text: Text,
            Image: image,
            codeblock: Codeblock,
            article_link: Link
        },
		// 007 setting some api options like https, cache and region
		apiOptions: {
			https: true,
			cache: {
				type: 'memory'
			},
			region: "en" // "us" if your space is in US region
		}
	});
}
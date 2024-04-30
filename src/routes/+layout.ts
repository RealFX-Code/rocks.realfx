import { apiPlugin, storyblokInit, useStoryblokApi } from '@storyblok/svelte';
import type { LayoutLoad } from './$types';

import Divider from '$lib/components/bloks/Divider.svelte';
import Heading from '$lib/components/bloks/Heading.svelte';
import Page    from '$lib/components/bloks/Page.svelte';
import Space   from '$lib/components/bloks/Space.svelte';
import Text    from '$lib/components/bloks/Text.svelte';
import Codeblock from "$lib/components/bloks/Codeblock.svelte";
import image from "$lib/components/bloks/image.svelte";

export const load = (async () => {
    storyblokInit({
        accessToken: 'WComsuHRt7eJxyoQt0t9dgtt',
        use: [apiPlugin],

        components: {
            divider: Divider,
            heading: Heading,
            space: Space,
            page: Page,
            text: Text,
            Image: image,
            codeblock: Codeblock
        }
    });
    const storyblokApi = await useStoryblokApi();

    return {
        storyblokApi: storyblokApi
    };
}) satisfies LayoutLoad;

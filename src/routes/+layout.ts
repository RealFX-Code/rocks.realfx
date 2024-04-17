import { apiPlugin, storyblokInit, useStoryblokApi } from '@storyblok/svelte';
import type { LayoutLoad } from './$types';

import Page from '$lib/components/sb/Page.svelte';
import Text from '$lib/components/sb/Text.svelte';
import Divider from '$lib/components/sb/Divider.svelte';
import Heading from '$lib/components/sb/Heading.svelte';
import Space from '$lib/components/sb/Space.svelte';

export const load = (async () => {
    storyblokInit({
        accessToken: 'WComsuHRt7eJxyoQt0t9dgtt',
        use: [apiPlugin],

        components: {
            divider: Divider,
            heading: Heading,
            space: Space,
            page: Page,
            text: Text
        }
    });
    const storyblokApi = await useStoryblokApi();

    return {
        storyblokApi: storyblokApi
    };
}) satisfies LayoutLoad;

/* import type { PageLoad } from './$types';

export const load = (async ({ parent }) => {
    const dataConfig = await (
        await parent()
    ).storyblokApi.get('cdn/stories/articles/', {
        version: 'draft',
        resolve_links: 'url'
    });

    return dataConfig.data.story.content;
}) satisfies PageLoad; */

import { getStoryblokApi } from '@storyblok/svelte';

export const load = async function () {
    const storyblokApi = getStoryblokApi();

    const x = storyblokApi.get('cdn/stories/articles/', {
        version: 'draft',
        resolve_links: 'url'
    });

    return (await x).data.story.content;
};

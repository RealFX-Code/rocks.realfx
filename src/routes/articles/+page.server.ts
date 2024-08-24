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

import { useStoryblok } from '$lib/sbload';
import { getStoryblokApi, useStoryblokApi } from '@storyblok/svelte';

export const load = async function () {

    await useStoryblok();

    let storyblok = useStoryblokApi();

    const x = storyblok.get('cdn/stories/articles/', {
        version: 'draft',
        resolve_links: 'url'
    });

    return (await x).data.story.content    

};

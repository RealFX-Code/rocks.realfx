import { getStoryblokApi } from '@storyblok/svelte';

export const load = async function ({ params }) {
    const storyblokApi = getStoryblokApi();
    const slug = params.slug;

    // Path
    let path = 'cdn/stories/articles/';
    if (slug) {
        path += slug;
    } else {
        path += 'home';
    }

    // Actual fetching
    const dataStory = storyblokApi.get(path, {
        version: 'draft'
    });

    return {
        story: (await dataStory).data.story
    };
};

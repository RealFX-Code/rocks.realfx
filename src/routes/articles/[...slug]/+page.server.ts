import { useStoryblok } from '$lib/sbload';
import { useStoryblokApi } from '@storyblok/svelte';

//@ts-expect-error ambigous any type how about you suck my nuts
export const load = async function ({ params }) {

    await useStoryblok();

    const storyblokApi = useStoryblokApi();
    const slug = params.slug;

    // Path
    let path = 'cdn/stories/articles/';
    if (slug) {
        path += slug;
    } else {
        path += 'home';
    }

    // Actual fetching
    const dataStory = await storyblokApi.get(path, {
        version: 'draft'
    });

    return {
        story: dataStory.data.story
    };
};

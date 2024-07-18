import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

import { SECRET_PASSWORD } from '$env/static/private';

import pkg from 'js-sha3';
import { getStoryblokApi } from '@storyblok/svelte';
const { sha3_512 } = pkg;

export const load = (async (params) => {
    if (!params.url.searchParams.has('a')) {
        // Password doesn't exist
        throw redirect(301, '/resume/login');
    }

    const password = params.url.searchParams.get('a');

    if (password !== sha3_512(SECRET_PASSWORD)) {
        // :3
        throw redirect(301, 'https://www.youtube.com/watch?v=dQw4w9WgXcQ');
    }

    const storyblokApi = await getStoryblokApi();
    const path = 'cdn/stories/resume';
    const dataStory = await storyblokApi.get(path, {
        version: 'draft'
    });
    return {
        story: dataStory.data.story
    };
}) satisfies PageServerLoad;

import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

import { SECRET_PASSWORD } from '$env/static/private';

import sha3_512 from 'js-sha3';
// what the fuck in the name of javascript is this, kill me.
const hash = sha3_512.sha3_512;

export const load = (async (params) => {
    if (!params.url.searchParams.has('a')) {
        // Password doesn't exist
        throw redirect(301, '/resume/login');
    }

    let password = params.url.searchParams.get('a');

    if (password == hash(SECRET_PASSWORD)) {
        // Retutning an empty object equals a success.
        return {};
    } else {
        // :3
        throw redirect(301, 'https://www.youtube.com/watch?v=dQw4w9WgXcQ');
    }
}) satisfies PageServerLoad;

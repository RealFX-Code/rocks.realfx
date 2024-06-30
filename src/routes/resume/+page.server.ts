import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

import { SECRET_PASSWORD } from '$env/static/private';

import pkg from "js-sha3";
const { sha3_512 } = pkg;

export const load = (async (params) => {
    if (!params.url.searchParams.has('a')) {
        // Password doesn't exist
        throw redirect(301, '/resume/login');
    }

    let password = params.url.searchParams.get('a');

    if (password == sha3_512(SECRET_PASSWORD)) {
        // Retutning an empty object equals a success.
        return {};
    } else {
        // :3
        throw redirect(301, 'https://www.youtube.com/watch?v=dQw4w9WgXcQ');
    }
}) satisfies PageServerLoad;

import { SECRET_PASSWORD } from '$env/static/private';

import sha3_512 from 'js-sha3';
// what the fuck in the name of javascript is this, kill me.
const hash = sha3_512.sha3_512;

export const GET = async ({ params }) => {
    if (params.password === hash(SECRET_PASSWORD)) {
        return new Response('yippee', { status: 200 });
    }

    return new Response('nuh uh', { status: 401 });
};

import { SECRET_PASSWORD } from '$env/static/private';

import pkg from "js-sha3";
const { sha3_512 } = pkg;

export const GET = async ({ params }) => {
    if (params.password === sha3_512(SECRET_PASSWORD)) {
        return new Response('yippee', { status: 200 });
    }

    return new Response('nuh uh', { status: 401 });
};

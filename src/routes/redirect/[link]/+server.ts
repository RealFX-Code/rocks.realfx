import { redirect } from '@sveltejs/kit';

interface linkDefinition {
    urlLink: string; // E.G. discord
    redirectTo: string; // E.G. https://discord.gg/feetfinder
}

const linksDefined: Array<linkDefinition> = [
    {
        urlLink: 'discord',
        redirectTo: 'https://discord.gg/qFdvxqsRg5'
    },
    {
        urlLink: 'github',
        redirectTo: 'https://github.com/RealFX-Code'
    }
];

/** @type {import('./$types').RequestHandler} */
//@ts-expect-error Params doesn't have a type AFAIK and any type throws a TS error.
export async function GET({ params }) {
    let redirectURL = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';

    linksDefined.forEach(function (value) {
        if (params.link === value.urlLink) {
            redirectURL = value.redirectTo;
        }
    });

    throw redirect(303, redirectURL);
}

<script>
    import { storyblokEditable } from '@storyblok/svelte';

    import { A, P } from 'flowbite-svelte';

    /**
     * @type {import("@storyblok/svelte").SbBlokData}
     */
    export let blok;

    /**
     * @type {string}
     */
    //@ts-expect-error LSP errors suck balls
    let imgSrc = blok.src?.filename?.toString();
</script>

<div use:storyblokEditable={blok} class="max-w-full">
    <A href={imgSrc} target="_blank" rel="noreferrer noopener">
        <img src={imgSrc} alt="img" />
    </A>
    <P class="p-1 text-sm">
        {blok.alt?.toString()}
    </P>
</div>

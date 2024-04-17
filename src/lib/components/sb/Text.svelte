<script>
    import { storyblokEditable } from '@storyblok/svelte';

    import { P } from 'flowbite-svelte';

    /**
     * @type {import("@storyblok/svelte").SbBlokData}
     */
    export let blok;
</script>

<div use:storyblokEditable={blok}>
    <P>
        {blok.content}
    </P>
</div>

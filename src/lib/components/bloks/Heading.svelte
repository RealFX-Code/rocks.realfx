<script>
    import { storyblokEditable } from '@storyblok/svelte';

    import { Heading } from 'flowbite-svelte';

    /**
     * @type {import("@storyblok/svelte").SbBlokData}
     */
    export let blok;
</script>

<div use:storyblokEditable={blok}>
    <Heading tag="h1">
        {blok.content}
    </Heading>
</div>

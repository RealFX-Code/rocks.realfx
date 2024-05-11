<script>
    import { storyblokEditable } from '@storyblok/svelte';

    import { Span } from 'flowbite-svelte';

    /**
     * @type {import("@storyblok/svelte").SbBlokData}
     */
    export let blok;
</script>

<div use:storyblokEditable={blok}>
    <Span
        class="mx-auto block w-full whitespace-pre-wrap bg-primary-800 p-5 font-mono text-primary-50"
    >
        {blok.content?.toString()}
    </Span>
</div>

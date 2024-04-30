<script>
    import { storyblokEditable } from '@storyblok/svelte';

    import { Span } from 'flowbite-svelte';

    /**
     * @type {import("@storyblok/svelte").SbBlokData}
     */
    export let blok;
</script>

<div
    use:storyblokEditable={blok}
>
    <Span
        class="w-full bg-primary-800 p-5 mx-auto block font-mono whitespace-pre-wrap text-primary-50"
    >
        {blok.content?.toString()}
    </Span>
</div>

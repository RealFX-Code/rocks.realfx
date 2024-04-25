<script>
    import { storyblokEditable } from '@storyblok/svelte';

    /**
     * @type {import("@storyblok/svelte").SbBlokData}
     */
    export let blok;
</script>

<div use:storyblokEditable={blok}>
    <div class="my-10" />
</div>

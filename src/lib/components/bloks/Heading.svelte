<script lang="ts">
    import type { SbBlokData } from '@storyblok/svelte';
    import { storyblokEditable } from '@storyblok/svelte';

    import { Heading } from 'flowbite-svelte';

    export let blok: SbBlokData;
</script>

<div use:storyblokEditable={blok}>
    <Heading tag="h1">
        {blok.content}
    </Heading>
</div>

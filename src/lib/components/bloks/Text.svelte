<script lang="ts">
    import { storyblokEditable, type SbBlokData } from '@storyblok/svelte';

    import { P } from 'flowbite-svelte';

    export let blok: SbBlokData;
</script>

<div use:storyblokEditable={blok}>
    <P>
        {blok.content}
    </P>
</div>

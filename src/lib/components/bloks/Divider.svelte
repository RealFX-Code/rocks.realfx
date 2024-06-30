<script lang="ts">
    import { storyblokEditable, type SbBlokData } from '@storyblok/svelte';

    export let blok: SbBlokData;
</script>

<div use:storyblokEditable={blok}>
    <div class="my-5">
        <hr class="my-6 border-gray-500 dark:border-primary-600 sm:mx-auto lg:my-8" />
    </div>
</div>

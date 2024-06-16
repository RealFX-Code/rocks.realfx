<script lang="ts">
    import { onMount } from 'svelte';
    import { cubicInOut } from 'svelte/easing';

    import { fade } from 'svelte/transition';

    // The first item is moved to the end of the list, due to some wierd stuff, idk.
    const names: Array<string> = ['Sometime', 'RealFX', '[deadname]', 'Leah'];

    const interval: number = 1500;

    let currentName: string = names[names.length - 1];
    names.forEach(function (_value, index) {
        setInterval(
            function () {
                currentName = _value;
            },
            interval * (index + 1)
        );
    });

    const easingDuration = interval / 4;

    let isChromium : boolean;
    onMount(function(){
        //@ts-expect-error Window isn't defined on the server and thus throws an LSP error.
        isChromium = !!window.chrome;

        if (!isChromium){
            console.warn("Non-chromium browser detected, Name blinker is disabled.");
        }

    })

</script>

{#if isChromium}
    {#key currentName}
        <div class="block">
            <span
                class="absolute"
                in:fade={{ duration: easingDuration, easing: cubicInOut, delay: easingDuration }}
                out:fade={{ duration: easingDuration, easing: cubicInOut }}
            >
                {currentName}
            </span>
        </div>
    {/key}
{:else}
    <div class="block" id="non-chromium">
        <span class="absolute">
            {names[names.length - 1]}
        </span>
    </div>
{/if}
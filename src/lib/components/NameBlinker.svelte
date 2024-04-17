<script lang="ts">
    import { cubicInOut } from 'svelte/easing';

    import { fade } from 'svelte/transition';

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
</script>

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

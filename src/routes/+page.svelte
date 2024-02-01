<script lang="ts">

    import { onMount } from "svelte";

    let nameElement: HTMLSpanElement;

    async function SetIntervalNow(fun: Function, ms: number){
        fun();
        setInterval(fun,ms);
    }

    onMount(function(){
        const names : Array<string> = [
            "Leah",
            "RealFX",
            "Sometime",
            "[deadname]"
        ];

        let nameFlashFreq = 500;

        SetIntervalNow(function(){
            names.forEach(function (value,index) {
                setTimeout(function () {
                    nameElement.innerText = value;
                }, nameFlashFreq*index);
            });
        }, nameFlashFreq*names.length);


    })


</script>

<h1>Hi, I'm <span id="name" bind:this={nameElement}/>!</h1>
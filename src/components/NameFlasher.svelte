<script lang="ts">

    export let names : Array<string>;

    import { onMount } from "svelte";

    let nameElement: HTMLSpanElement;

    async function SetIntervalNow(fun: Function, ms: number){
        fun();
        setInterval(fun,ms);
    }

    onMount(function(){

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

<span bind:this={nameElement}/>

<style>
    span {
        display: inline-block;
        width: 134px;
    }
    /*
        TODO: fix this
    */
    #name {
      animation: blinker 0.75s linear infinite;
    }

    @keyframes blinker {
      50% {
        opacity: 0;
      }
    }
</style>
<script lang="ts">

    // yipee

</script>

<footer>
    <div class="grid grid-2-horiz">
        <h1 id="webname">
            <strong>
                www.realfx.rocks
            </strong>
        </h1>
        <div class="grid grid-2-vert">
            <div class="copy center">
                <span>
                    &copy; {new Date().getFullYear()}, Leah
                </span>
            </div>
            <div class="poweredby center">
                <div class="list">
                    <p>This site is powered by:</p>
                    <ul>
                        <li>
                            <span>SvelteKit</span>
                        </li>
                        <li>
                            <span>Cloudflare Pages</span>
                        </li>
                        <li>
                            <span>Plausible</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</footer>

<style>
    footer {
        box-shadow: 0px -5px 96px 0px var(--bg-2);
        padding: 2.5rem 0px;
        margin: 5rem 0px 0px 0px;
        width: 100%;
        height: fit-content;
        background-color: var(--bg-2);
    }

    div {
        padding: 0px;
        margin: 0px;
        width: 100%;
        height: 100%;
    }

    .grid-2-horiz {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr;
        grid-auto-columns: 1fr;
        gap: 0px 0px;
        grid-auto-flow: row;
        grid-template-areas: ". .";
    }

    .grid-2-vert {
        display: grid; 
        grid-auto-columns: 1fr; 
        grid-template-columns: 1fr; 
        grid-template-rows: 1fr 1fr; 
        gap: 0px 0px; 
        grid-template-areas: "." "."; 
    }

    div.grid > h1,
    div.grid > div.poweredby.center,
    div.grid > div.copy {
        height: fit-content;
        width: fit-content;
        margin: auto auto;
    }

    @media only screen and (max-width: 600px) {
        h1#webname {
            display: none;
        }
        .grid-2-horiz {
            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: 1fr;
            grid-auto-columns: 1fr;
            gap: 0px 0px;
            grid-auto-flow: row;
            grid-template-areas: ".";
        }
    }

</style>
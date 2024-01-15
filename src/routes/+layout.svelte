<script lang="ts">

    import NavBar from "../components/NavBar.svelte";
    import Footer from "../components/Footer.svelte";

    import "../colors.css";

</script>

<svelte:head>
    <style>
        body{margin:0px;padding:0px;}
    </style>
</svelte:head>

<div class="content-container">
    <NavBar />
    <section class="main">
        <slot />
    </section>
    <Footer />
</div>

<style>

    div.content-container,
    section {
        margin: 0px;
        padding: 0px;
        width: 100%;
        height: 100%;
    }

    section.main {
        width: 85vmin;
        margin: 0 auto;
    }

</style>
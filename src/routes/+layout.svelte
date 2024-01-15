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

<section>
    <NavBar />
    <div class="content">
        <slot />
    </div>
    <Footer />
</section>

<style>

    section {
        margin: 0px;
        padding: 0px;
        width: 100%;
        height: 100%;
    }

</style>
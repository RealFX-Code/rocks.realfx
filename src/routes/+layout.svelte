<script lang="ts">
	import NavBar from '../components/NavBar.svelte';
	import Footer from '../components/Footer.svelte';

	import '../global.css';
</script>

<svelte:head>
	<title>www.realfx.rocks</title>

	<link rel="preconnect" href="https://fonts.googleapis.com" crossorigin="true" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="true" />
	<link
		rel="preload"
		as="style"
		href="https://fonts.googleapis.com/css2?family=A&family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&display=swap"
	/>
	<link
		rel="stylesheet"
		href="https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:ital,wght@0,400;0,700;1,400;1,700&display=swap&family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&display=swap"
	/>

	<noscript>
		<link
			rel="stylesheet"
			href="https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:ital,wght@0,400;0,700;1,400;1,700&display=swap&family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&display=swap"
		/>
	</noscript>

	<style>
		body {
			margin: 0px;
			padding: 0px;
		}
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

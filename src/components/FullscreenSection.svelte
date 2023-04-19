<script>
	export let centerContent = false;
	export let background = '#ffffff';
</script>

<section class="fullscreen" style="background: {background};">
	{#if centerContent}
		<div class="center">
			<div class="parent">
				<slot />
			</div>
		</div>
	{/if}
	{#if !centerContent}
		<slot />
	{/if}
</section>

<style>
	section {
		background-size: cover;
	}

	section.fullscreen {
		margin: 0px 0px 0px 0px;
		/* width: 100vw; */
		height: 100vh;
	}

	section.fullscreen > div.center {
		height: 100%;
		display: flex;
		justify-content: center;
		align-content: center;
	}
	section.fullscreen > div.center > div.parent {
		width: fit-content;
		height: fit-content;
		margin: auto auto;
	}
</style>

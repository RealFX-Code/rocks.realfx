<script>
	import FullscreenSection from '../../components/FullscreenSection.svelte';
	import Project from '../../components/projects/Project.svelte';
</script>

<svelte:head>
	<title>736F6D6574696D65</title>
</svelte:head>

<div class="app">
	<div class="mobileWarning">
		<h1>
			This page isn't fully working on small displays like the one that's in use right now, please
			use a bigger display / window.
		</h1>
	</div>
	<FullscreenSection
		centerContent="true"
		background="linear-gradient(120deg, rgba(36,36,36,0.25) 0%, rgba(255,119,170,0.1) 50%, rgba(36,36,36,0.25) 100%)"
	>
		<div class="projectContainer">
			<Project
				title="www.realfx.rocks"
				subtitle="This website."
				description="My homepage, With some cool style i made."
				repo="https://github.com/RealFX-Code/rocks.realfx"
			/>
		</div>
	</FullscreenSection>
	<FullscreenSection
		centerContent="true"
		background="linear-gradient(190deg, rgba(36,36,36,0.25) 0%, rgba(119,170,255,0.1) 50%, rgba(36,36,36,0.25) 100%)"
	>
		<div class="projectContainer">
			<Project
				title="prns.page"
				subtitle="An alternate front-end for pronouns.page"
				description="A personal project to push what i could do from a simple API call."
				repo="https://github.com/RealFX-Code/prns.page"
			/>
		</div>
	</FullscreenSection>
	<FullscreenSection
		centerContent="true"
		background="linear-gradient(75deg, rgba(36,36,36,0.25) 0%, rgba(170,255,119,0.1) 50%, rgba(36,36,36,0.25) 100%)"
	>
		<div class="projectContainer">
			<Project
				title="jeg.er-veldig.gay"
				subtitle="A front-end to an LGBTQ+ help resource."
				description="Simple front-end for a help-resource website."
				repo="https://github.com/RealFX-Code/jeg.er-veldig.gay"
			/>
		</div>
	</FullscreenSection>
</div>

<style>
	@media screen and (max-width: 768px) {
		.mobileWarning {
			color: white;
			padding: 0px;
			margin: 0px auto;
			margin-top: 10rem;
			text-align: center;
			font-size: 0.75rem;
			display: unset !important;
			position: absolute;
		}
	}

	.mobileWarning {
		display: none;
	}

	.app {
		padding: 0px;
		margin: 0px;
		background-color: black;
	}
</style>

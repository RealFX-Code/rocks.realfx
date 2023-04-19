<script>
	import FullscreenSection from '../../components/FullscreenSection.svelte';
	import Fa from 'svelte-fa';
	import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
	import { faDiscord, faTwitter } from '@fortawesome/free-brands-svg-icons';
</script>

<svelte:head>
	<title>736F6D6574696D65</title>
</svelte:head>

<div class="app">
	<FullscreenSection
		centerContent="true"
		background="linear-gradient(225deg, rgba(36,36,36,0.25) 0%, rgba(255,119,170,0.1) 50%, rgba(36,36,36,0.25) 100%)"
	>
		<div class="contact">
			<h1>Do you want to contact me? Here's some ways to do that!</h1>
			<div class="methods">
				<div class="method discord" title="I prefer this.">
					<div class="icon">
						<Fa icon={faDiscord} size="lg" />
					</div>
					<a href="https://discord.gg/qFdvxqsRg5">
						<p>Discord</p>
					</a>
				</div>
				<div class="method twitter" title="I don't use twitter.">
					<div class="icon">
						<Fa icon={faTwitter} size="lg" />
					</div>
					<a href="https://twitter.com/realfx6">
						<p>Twitter</p>
					</a>
				</div>
				<div class="method mail" title="Do this if u don't care about urgency.">
					<div class="icon">
						<Fa icon={faEnvelope} size="lg" />
					</div>
					<a href="mailto:rlfx@realfx.rocks">
						<p>E-Mail</p>
					</a>
				</div>
			</div>
		</div>
	</FullscreenSection>
</div>

<style>
	.method > a {
		text-decoration: none;
	}

	.method > .icon {
		margin-right: 8px;
	}

	.method > * {
		font-size: 2rem;
		margin: auto 0px;
	}

	.method {
		color: white;
		flex-direction: row;
		display: flex;
		align-content: center;
		justify-content: center;
	}

	.app {
		padding: 0px;
		margin: 0px;
		background-color: black;
	}

	h1 {
		text-align: center;
		color: white;
		font-weight: 400;
		font-size: 2rem;
	}

	a,
	a:visited {
		text-decoration-color: #ffffff;
		color: #ffffff;
		transition: letter-spacing 0.25s ease;
	}
</style>

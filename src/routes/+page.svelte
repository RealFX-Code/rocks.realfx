<script lang="ts">
	import MessageProvider from '../components/MessageProvider.svelte';

	import NameSelector from '../components/NameSelector.svelte';
	import type IMessage from '../routes/types';

	let names: Array<string> = ['Sometime', 'Leah', 'RealFX', '[deadname]'];

	let messageProvider: MessageProvider;

	let ThankYouMessage: IMessage = {
		content: 'I like this name, Thank you.',
		duration: 1500,
		severity: 'info'
	};

	let DeadnameMessage: IMessage = {
		content: "Don't call me that please.",
		duration: 1500,
		severity: 'error'
	};

	function showThankYou() {
		messageProvider.SendMessage(ThankYouMessage);
	}

	function showScrewYou() {
		messageProvider.SendMessage(DeadnameMessage);
	}
</script>

<MessageProvider bind:this={messageProvider} />

<h1>
	Hi, I'm<NameSelector
		on:onLeahSelected={showThankYou}
		on:onDeadnameSelected={showScrewYou}
		{names}
	/>!
</h1>
<h2>Or whatever you want to call me, I go by lots of different names.</h2>

<p>
	I am a 15 year old kid who sometimes does tech stuff; Like software/web development, PC Building,
	Gaming, Linux
	<a href="https://www.urbandictionary.com/define.php?term=smartassery"><i>smartassery</i></a>, and
	other stuff in those categories.
</p>

<style>
	h1 {
		display: flex;
		align-items: center;
		justify-content: center;
		width: fit-content;
	}
</style>

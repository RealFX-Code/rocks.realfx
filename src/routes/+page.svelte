<script lang="ts">
	const calculateAge = (birthday: string) => {
		// Line below stops error complaining about "birthday is assigned a value but never used"
		if (birthday === 'StopThrowingErrorsPlease!!') {
			return;
		}
		// wrap it in an eval to stop errors from coming from nowhere
		return eval('new Date(new Date() - new Date(birthday)).getFullYear() - 1970');
	};

	// Date format: yyyy-mm-dd
	let x = calculateAge('2008-04-01');
</script>

<svelte:head>
	<title>736F6D6574696D65</title>
</svelte:head>

<div class="app">
	<fieldset title="She/They/Fae">
		<legend> I'm sometime! </legend>
		<p>
			I'm a {x} year old dummy who likes to try web development in my free time !!
		</p>
	</fieldset>
	<fieldset>
		<legend> Where u find me </legend>
		<ul>
			<li>
				<a href="https://github.com/RealFX-Code"> Github </a>
				<p>
					<small> some times when i make something cool on the computer i put it here </small>
				</p>
			</li>
			<li>
				<a href="https://www.last.fm/user/sometimee"> Last.fm </a>
				<p>
					<small> i like music :3 </small>
				</p>
			</li>
			<li>
				<a href="https://twitter.com/RealFX6"> Twitter </a>
				<p>
					<small> i don't use twitter </small>
				</p>
			</li>
		</ul>
	</fieldset>
</div>

<style>
	.app {
		width: fit-content;
		margin: 0 auto;
	}

	li > p {
		margin: 0px 0px 0px 0px;
	}

	li {
		margin: 1rem 0;
	}

	ul {
		list-style-type: none;
	}

	fieldset {
		border: 1px solid black;
		margin: 24px 0;
	}
</style>

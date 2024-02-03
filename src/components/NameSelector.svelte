<script lang="ts">
	import { onMount } from 'svelte';
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	export let names: Array<string>;

	let inputElement: HTMLSelectElement;

	onMount(function () {
		inputElement.addEventListener('submit', function (e) {
			e.preventDefault();
		});
		inputElement.addEventListener('change', function () {
			if (inputElement.value == 'Leah') {
				dispatch('onLeahSelected');
			} else if (inputElement.value == '[deadname]') {
				dispatch('onDeadnameSelected');
			}
		});
	});
</script>

<select name="names-list" bind:this={inputElement}>
	{#each names as name}
		<option value={name}>{name}</option>
	{/each}
</select>

<style>
	select {
		display: inline-block;
		background-color: var(--bg-2);
		height: 100%;
		padding: 0px;
		margin: auto 4px;
	}
</style>

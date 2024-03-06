<script lang="ts">
	import { page } from '$app/stores';
</script>

<div id="error-container">
	<main>
		<h1>{$page.status}: {$page.error?.message}</h1>
		<p>
			Here's a link back to <a href="/">"/"</a>.
		</p>
	</main>
</div>

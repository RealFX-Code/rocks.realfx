<script lang="ts">
    import { page } from '$app/stores';
</script>

<div id="error-container">
    <fieldset style="width: fit-content">
        <legend>
            An error has occured.
        </legend>
        <h1>{$page.status}: {$page.error?.message}</h1>
    </fieldset>
</div>
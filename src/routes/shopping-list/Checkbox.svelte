<script lang="ts">
	export let size = 1.5;

	let checked = false;
</script>

<div
	style={`height: ${size}rem; width: ${size}rem;`}
	on:click={() => {
		checked = !checked;
	}}
	class={checked ? 'checked' : ''}
/>

<style>
	div {
		border: 2px solid gray;
		border-radius: 5px;
	}

	.checked {
		background: var(--primary);
	}
</style>

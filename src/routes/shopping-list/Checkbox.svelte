<script lang="ts">
	export let size = 1.5;

	export let completed = false;
</script>

<div
	style={`height: ${size}rem; width: ${size}rem;`}
	on:click={() => {
		completed = !completed;
	}}
	class={completed ? 'checked' : ''}
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

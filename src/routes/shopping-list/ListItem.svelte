<script lang="ts">
	import Checkbox from './Checkbox.svelte';
	export let isCompleted = false;
	export let itemText: string;
</script>

<div>
	<Checkbox bind:completed={isCompleted} />
	<input type="text" name="item" id="item" bind:value={itemText} />
</div>

<style>
	div {
		box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
		border-radius: 5px;
		width: 20%;
		height: 2.5rem;
		display: flex;
		align-items: center;
		padding: 0 0.5rem;
	}
	input {
		background: none;
		border: none;
		outline: none;
		padding-left: 1rem;
		font-size: large;
		width: 80%;
		text-overflow: ellipsis;
	}
</style>

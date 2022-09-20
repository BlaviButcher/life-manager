<script>
	import Checkbox from './Checkbox.svelte';
</script>

<page-content>
	<h1>Shopping List</h1>
	<list-item>
		<Checkbox />
	</list-item>
</page-content>

<style>
	page-content {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
	}

	list-item {
		box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
		border-radius: 5px;
		width: 20%;
		height: 2.5rem;
		display: flex;
		align-items: center;
		padding: 0 0.5rem;
	}
</style>

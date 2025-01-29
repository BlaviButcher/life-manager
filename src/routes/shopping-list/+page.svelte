<script>
	import ListItem from './ListItem.svelte';
</script>

<page-content>
	<h1>Shopping List</h1>
	<ListItem itemText="Ham" />
</page-content>

<style>
	page-content {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
	}
</style>

<script lang="ts">
	import { base } from '$app/paths';
	import Sidebar from '$lib/Sidebar.svelte';
	import { CheckboxChecked, Home, Settings } from 'carbon-icons-svelte';
</script>

<main>
	<Sidebar
		size={32}
		items={[
			{
				icon: Home,
				label: 'Home',
				href: `${base}/`
			},
			{
				icon: CheckboxChecked,
				label: 'Todo',
				href: `${base}/todo`
			},
			{
				icon: Settings,
				label: 'Settings',
				href: `${base}/settings`
			}
		]}
	/>
	<page-content>
		<slot />
	</page-content>
</main>

<style>
	main {
		display: flex;
	}

	page-content {
		display: flex;
		justify-content: center;
		width: 100%;
		/* balance page due to vertical sidebar nav */
		padding-right: 3rem;
	}
</style>

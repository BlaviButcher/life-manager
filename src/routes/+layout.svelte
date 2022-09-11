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
	<slot />
</main>

<style>
	main {
		display: flex;
	}
</style>

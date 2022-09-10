<script lang="ts">
	import Sidebar from '$lib/Sidebar.svelte';
	import { Home } from 'carbon-icons-svelte';
</script>

<Sidebar
	size={32}
	icons={[
		{
			icon: Home,
			label: 'Home'
		},
		{
			icon: Home,
			label: 'Home'
		},
		{
			icon: Home,
			label: 'Home'
		}
	]}
/>
<slot />

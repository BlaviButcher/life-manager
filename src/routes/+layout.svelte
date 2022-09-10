<script lang="ts">
	import Sidebar from '$lib/Sidebar.svelte';
	import { CheckboxChecked, Home, LocationHeart, Settings } from 'carbon-icons-svelte';
</script>

<Sidebar
	size={32}
	icons={[
		{
			icon: Home,
			label: 'Home'
		},
		{
			icon: CheckboxChecked,
			label: 'Todo'
		},
		{
			icon: Settings,
			label: 'Settings'
		}
	]}
/>
<slot />

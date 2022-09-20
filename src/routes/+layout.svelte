<script lang="ts">
	import { base } from '$app/paths';
	import Sidebar from '$lib/Sidebar.svelte';
	import { Catalog, CheckboxChecked, Home, List, Settings } from 'carbon-icons-svelte';
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
				icon: List,
				label: 'Shopping List',
				href: `${base}/shopping-list`
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
	:global(html, body) {
		padding: 0;
		margin: 0;
		font-family: 'Montserrat', sans-serif;
		background-color: #eff2f1;
	}
	:global(:root) {
		--primary: rgba(127, 98, 233, 0.295);

		--primary-gradient: linear-gradient(
			90deg,
			rgba(85, 69, 170, 1) 0%,
			rgba(94, 73, 179, 1) 50%,
			rgba(102, 79, 192, 1) 100%
		);

		--secondary-gradient: linear-gradient(
			180deg,
			rgba(124, 245, 219, 1) 0%,
			rgba(92, 207, 226, 1) 50%,
			rgba(108, 161, 212, 1) 100%
		);
	}
</style>

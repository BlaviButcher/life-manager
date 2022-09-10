<script lang="ts">
	import { Home } from 'carbon-icons-svelte';

	import type { SvelteComponent } from 'svelte';

	type Icon = {
		icon: typeof SvelteComponent;
		label: String;
	};

	export let icons: Icon[] = [];
	export let size = 32;

	$: showMenu = false;
</script>

<sidebar-navigation
	on:mouseleave={() => (showMenu = false)}
	on:mouseenter={() => (showMenu = true)}
>
	{#each icons as i}
		<sidebar-item>
			<sidebar-icon>
				<svelte:component this={i.icon} class="icon" {size} />
			</sidebar-icon>
			<icon-label style={showMenu ? 'display: inline:block;' : 'display: none;'}
				>{i.label}</icon-label
			>
		</sidebar-item>
	{/each}
</sidebar-navigation>

<style>
	sidebar-navigation {
		display: inline-block;
		flex-direction: column;
		height: 100vh;
		background-color: #eff1f3;
	}

	sidebar-item {
		display: flex;
		align-items: center;
		height: 3rem;

		justify-content: center;
	}

	sidebar-item:hover {
		background-color: #e4e5e4;
	}

	sidebar-icon {
		display: inline-block;
		width: 3rem;
		text-align: center;
	}

	icon-label {
		text-align: left;
		width: 0vw;
		transition: visibility 0s, opacity 0.5s linear;
	}
</style>

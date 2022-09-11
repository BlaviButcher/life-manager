<script lang="ts">
	import type { SvelteComponent } from 'svelte';

	type Icon = {
		icon: typeof SvelteComponent;
		label: String;
	};

	export let icons: Icon[] = [];
	export let size = 32;

	let maxVW = 15;

	$: showMenu = false;
</script>

<sidebar-navigation
	on:mouseleave={() => (showMenu = false)}
	on:mouseenter={() => (showMenu = true)}
	style={showMenu ? `width: ${maxVW}vw;` : ''}
>
	{#each icons as i}
		<sidebar-item>
			<selected-indicator />
			<sidebar-icon>
				<svelte:component this={i.icon} class="icon" {size} />
			</sidebar-icon>
			<icon-label>{i.label}</icon-label>
		</sidebar-item>
	{/each}
</sidebar-navigation>

<style>
	sidebar-navigation {
		display: inline-block;
		flex-direction: column;
		height: 100vh;
		background-color: #eff1f3;
		transition: 0.5s;
		width: 3rem;
	}

	sidebar-item {
		display: flex;
		align-items: center;
		height: 3rem;
	}

	selected-indicator {
		background-color: blue;
	}

	sidebar-item:hover {
		background-color: #e4e5e4;
	}

	sidebar-icon {
		min-width: 3rem;
		text-align: center;
	}

	icon-label {
		text-align: left;
		overflow: hidden;
		margin-left: 1rem;
	}
</style>

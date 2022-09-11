<script lang="ts">
	import { goto } from '$app/navigation';

	import type { SvelteComponent } from 'svelte';

	type Icon = {
		icon: typeof SvelteComponent;
		label: string;
		href: string;
	};

	export let items: Icon[] = [];
	export let size = 32;

	let maxVW = 15;

	$: showMenu = false;
</script>

<!-- this allows us to have an absolute position while still overlapping content when extending menu -->
<item-buffer />
<sidebar-navigation
	on:mouseleave={() => (showMenu = false)}
	on:mouseenter={() => (showMenu = true)}
	style={showMenu ? `width: ${maxVW}vw;` : ''}
>
	{#each items as i}
		<sidebar-item
			on:click={() => {
				goto(i.href, { replaceState: true });
			}}
		>
			<selected-indicator />
			<sidebar-icon>
				<svelte:component this={i.icon} class="icon" {size} />
			</sidebar-icon>
			<icon-label>{i.label}</icon-label>
		</sidebar-item>
	{/each}
</sidebar-navigation>

<style>
	item-buffer {
		width: 3rem;
		height: 100vh;
		opacity: 0;
	}
	sidebar-navigation {
		display: inline-block;
		position: absolute;
		flex-direction: column;
		height: 100vh;
		background-color: #eff1f3;
		transition: 0.5s;
		width: 3rem;
		margin-right: 3rem;
	}

	sidebar-item {
		display: flex;
		align-items: center;
		height: 3rem;
	}

	selected-indicator {
		position: absolute;
		height: 3rem;
		width: 5px;
		background-color: #1565fd;
		z-index: 5;
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

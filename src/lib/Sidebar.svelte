<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';

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
				goto(i.href);
			}}
			class={$page.url.pathname === i.href ? 'selected' : ''}
		>
			<selected-indicator
				style={$page.url.pathname === i.href ? 'visibility: visible' : 'visibility: hidden'}
			/>
			<sidebar-icon>
				<svelte:component this={i.icon} class="icon" {size} />
			</sidebar-icon>
			<icon-label>{i.label}</icon-label>
		</sidebar-item>
	{/each}
</sidebar-navigation>

<style>
	item-buffer {
		position: relative;
		width: 3rem;
		height: 100vh;
		opacity: 0;
	}
	sidebar-navigation {
		display: inline-block;
		position: fixed;
		flex-direction: column;
		height: 100vh;
		background: rgb(128, 98, 234);
		background: linear-gradient(
			180deg,
			rgba(128, 98, 234, 1) 0%,
			rgba(98, 79, 190, 1) 50%,
			rgba(79, 66, 163, 1) 100%
		);
		transition: 0.5s;
		width: 3rem;
		color: #fcf8ff;
		flex: 1;
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
		background: rgb(124, 245, 219);
		background: var(--secondary-gradient);
		z-index: 5;
	}

	sidebar-item:hover {
		background: rgb(85, 69, 170);
		background: var(--primary-gradient);
	}

	sidebar-icon {
		min-width: 3rem;
		text-align: center;
	}

	icon-label {
		text-align: left;
		overflow: hidden;
		margin-left: 1rem;
		white-space: nowrap;
	}

	.selected {
		background: rgb(85, 69, 170);
		background: var(--primary-gradient);
	}
</style>

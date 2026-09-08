<script lang="ts">
	import { stateBet } from 'state-shared';

	const MODES = [
		{ key: 'BASE', label: 'Base', cost: '$1.00' },
		{ key: 'ANTE', label: 'Ante (+50%)', cost: '$1.50' },
		{ key: 'BONUS', label: 'Bonus Buy', cost: '$100.00' },
		{ key: 'SUPERBONUS', label: 'Super Bonus', cost: '$500.00' },
	] as const;

	function selectMode(modeKey: (typeof MODES)[number]['key']) {
		stateBet.activeBetModeKey = modeKey;
	}
</script>

<div class="prism-bet-modes">
	{#each MODES as mode}
		<button
			type="button"
			class="prism-mode-btn"
			class:active={stateBet.activeBetModeKey?.toUpperCase() === mode.key}
			onclick={() => selectMode(mode.key)}
		>
			<span class="mode-label">{mode.label}</span>
			<span class="mode-cost">{mode.cost}</span>
		</button>
	{/each}
</div>

<style>
	.prism-bet-modes {
		position: fixed;
		bottom: 16px;
		left: 16px;
		display: flex;
		flex-direction: column;
		gap: 6px;
		z-index: 1000;
		background: rgba(15, 15, 25, 0.85);
		backdrop-filter: blur(8px);
		padding: 10px;
		border-radius: 10px;
		border: 1px solid rgba(255, 255, 255, 0.15);
		box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
	}

	.prism-mode-btn {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 12px;
		background: rgba(255, 255, 255, 0.08);
		color: #e0e0e0;
		border: 1px solid rgba(255, 255, 255, 0.1);
		border-radius: 6px;
		padding: 6px 12px;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
		font-size: 12px;
		font-weight: 600;
		cursor: pointer;
		transition: all 0.2s ease;
	}

	.prism-mode-btn:hover {
		background: rgba(255, 255, 255, 0.18);
		border-color: rgba(255, 255, 255, 0.3);
		color: #ffffff;
	}

	.prism-mode-btn.active {
		background: linear-gradient(135deg, #7928ca, #ff0080);
		border-color: #ff0080;
		color: #ffffff;
		box-shadow: 0 0 12px rgba(255, 0, 128, 0.4);
	}

	.mode-label {
		text-align: left;
	}

	.mode-cost {
		font-size: 11px;
		opacity: 0.85;
		font-variant-numeric: tabular-nums;
	}
</style>

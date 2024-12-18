<script lang="ts">
	import { ModeWatcher } from 'mode-watcher';
	import '../app.css';
	let { children } = $props();
</script>

<ModeWatcher />

<div class="flex min-h-screen flex-col">
	<div class="grow">
		{@render children()}
	</div>
</div>

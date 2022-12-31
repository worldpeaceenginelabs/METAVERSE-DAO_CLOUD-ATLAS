<!-- https://github.com/sveltejs/svelte-virtual-list -->

<script>
	import VirtualList from './VirtualList.svelte';
	import items from './data.js';
	import ListItem from './ListItem.svelte';

	let searchTerm = "";
	
	$: filteredList = items.filter(item => item.name.indexOf(searchTerm) !== -1);
	
  let start;
  let end;
	
</script>




<div class='container'>
	
	<div class="searchfield">
		<input placeholder="Fuzzy Filter" bind:value={searchTerm} />
	</div>

	{#if searchTerm}
	<VirtualList items={filteredList} bind:start bind:end let:item>
		<ListItem {...item}/>
	</VirtualList>
	{/if}
</div>

<style>
	.container {
		border-top: 1px solid #333;
		border-bottom: 1px solid #333;
		height: calc(100vh - 15em);
	}
	.searchfield {
		margin-top: 1em;
		text-align: center;
		position: relative;
		background: black;
	}
</style>
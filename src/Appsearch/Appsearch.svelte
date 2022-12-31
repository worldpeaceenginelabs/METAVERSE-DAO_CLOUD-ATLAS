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

<div class="searchfield" align="center">
	<input placeholder="Fuzzy Filter" bind:value={searchTerm} />
</div>


<div class='container'>
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
		background: white;
	}
</style>
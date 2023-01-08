<script>
	import VirtualList from './VirtualList.svelte';
	import ListItem from './ListItem.svelte';
	import items from './data.js'
	import { clickOutside } from "./click_outside.js";

	let searchTerm = "";

	$: filteredList = items.filter(item => item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1).sort((a, b) => a.title.localeCompare(b.title));	

	let isFocused = false;

	let start;
  	let end;


	
</script>




<div class='container'>
	
	<div class="searchcontainer">
		<input class="searchfield" placeholder="DAPP-STORE | SEARCH" bind:value={searchTerm} on:focus={() => isFocused = true} use:clickOutside on:outclick={() => (isFocused = false)}/>
	</div>

	{#if isFocused}
	<VirtualList items={filteredList} bind:start bind:end let:item on:click={() => isFocused = false}>
		<ListItem {...item} />
	</VirtualList>
	{/if}
</div>

<style>
	.container {
		border-top: 1px solid #333;
		border-bottom: 1px solid #333;
		height: calc(100vh - 15em);
	}

	.searchcontainer {
		position: relative;
		margin-top: 1em;
		text-align: center;
	}
	.searchfield {
					
		border: 1px solid #ccc;
		text-align: center;
		
		/* Safari 5, Chrome support border-radius without vendor prefix.
		* FF 3.0/3.5/3.6, Mobile Safari 4.0.4 require vendor prefix.
		* No support in Safari 3/4, IE 6/7/8, Opera 10.0.
		*/
		-moz-border-radius: 10px;
		-webkit-border-radius: 10px;
		border-radius: 10px;
		
		/* Chrome, FF 4.0 support box-shadow without vendor prefix.
		* Safari 3/4/5 and FF 3.5/3.6 require vendor prefix.
		* No support in FF 3.0, IE 6/7/8, Opera 10.0, iPhone 3.
		* change the offsets, blur and color to suit your design.
		*/
		-moz-box-shadow: 2px 2px 3px #666;
		-webkit-box-shadow: 2px 2px 3px #666;
		box-shadow: 2px 2px 3px #666;
		
		/* using a bigger font for demo purposes so the box isn't too small */
		font-size: 20px;
		
		/* with a big radius/font there needs to be padding left and right
		* otherwise the text is too close to the radius.
		* on a smaller radius/font it may not be necessary
		*/
		padding: 4px 7px;
		
		/* only needed for webkit browsers which show a rectangular outline;
		* others do not do outline when radius used.
		* android browser still displays a big outline
		*/
		outline: 0;

		/* this is needed for iOS devices otherwise a shadow/line appears at the
		* top of the input. depending on the ratio of radius to height it will
		* go all the way across the full width of the input and look really messy.
		* ensure the radius is no more than half the full height of the input, 
		* and the following is set, and everything will render well in iOS.
		*/
		-webkit-appearance: none;
	}

	input:focus {
  
		/* supported IE8+ and all other browsers tested.
		* optional, but gives the input focues when selected.
		* change to a color that suits your design.
		*/
		border-color: #339933;		
  
	}
	
</style>
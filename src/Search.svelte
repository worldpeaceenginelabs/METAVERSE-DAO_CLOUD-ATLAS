<script lang="ts">
	
	const items = 	[
					{value: 'https://iris.to/', label: '🎂 Iris Messenger', group: 'Social Network'},
					{value: 'https://microsoft.com', label: '🍕 Microsoft', group: 'OS'},
					{value: 'cake', label: '🎂 Cake', group: 'Sweet'},
					{value: 'cookies', label: '🍪 Cookies', group: 'Savory'},
					{value: 'ice-cream', label: '🍦 Ice Cream', group: 'Sweet'}
					];
	
	let searchfieldinput = ''
	

	$: exactMatches = searchfieldinput && exact(searchfieldinput, [items])

	const exact = (searchfieldinput, entries) => entries.filter(entry => {
	
		return entry.toUpperCase().includes(searchfieldinput.toUpperCase())
	})


	// const groupBy = (item) => item.group;
	// window.open(app.value, '_blank').focus();
	// <select>

		// {#each items as item}
		//	 					<option>
		//						{item.label}
		//						</option>
		// {/each}
	
	// </select>

</script>

<input bind:value={searchfieldinput}>
<br>
<h1>{searchfieldinput}</h1>
<br>
<br>


	


	<section>
		<h1>Matches</h1>
	
		<h2>Exact</h2>
		<dl>
			<dt>Items</dt>
			<dd>{exactMatches.length ? exactMatches : 'None'}</dd>
		</dl>
	</section>



<style>
	select {
		width: 400px;
		background: #f4f4f4;
		padding: 25px;
		border-radius: 4px;
		 
	}
</style>
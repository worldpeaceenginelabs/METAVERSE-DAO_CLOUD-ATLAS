<script lang="ts">

// Toggle visibility of extensions
let visible = false;

function toggleVisible()   {
                            visible = !visible
                            }

</script>


<main>
    <button on:click={toggleVisible}>
        Iris
    </button>
    
    {#if visible}
        <iframe src="https://iris.to" title="Iris" width="100%" height="100%"></iframe>
    {/if}    
</main>

<style>

main {
	position: relative;
    height: 95%;
    width: 95%;
  }

</style>
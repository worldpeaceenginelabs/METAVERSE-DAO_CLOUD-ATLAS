<script>
// import Auth from "./Auth.svelte";<Auth/>

export let showLogin = false;

</script>


{#if showLogin}
    
<div class="wrapper">
        
</div>

{:else}
<div>
    <a href="https://github.com/worldpeaceenginelabs/METAVERSE-DAO_CLOUD-ATLAS#attention" target="blank">
    <button class="SignUpLoginText"  on:click="{() => {showLogin = false}}" on:keydown="{() => {showLogin = false}}">BETA (2D Mode)</button> <!-- Sign up | Login ;coming with the first dApp-->
    </a>
</div>
{/if}


<style>
    
    .SignUpLoginText{position: absolute; top: 0.5em; right: 0.5em;
                    font-family: -apple-system, BlinkMacSystemFont,'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
                    -webkit-font-smoothing: antialiased;
                    -moz-osx-font-smoothing: grayscale;
                    text-align: center;
                    color: silver;
                    background-color: black;
                    padding: 0%;        
                    text-decoration: none;}

    
    .wrapper {position: absolute; text-align: center; top: 1em; right: 1em;}
    
        
</style>

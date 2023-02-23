<script>
// import Auth from "./Auth.svelte";<Auth/>

export let showLogin = false;

</script>


{#if showLogin}
    
<div class="wrapper">
        
</div>

{:else}
<div>
    <button class="SignUpLoginText"  on:click="{() => {showLogin = true}}" on:keydown="{() => {showLogin = true}}">Sign up | Login</button>
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

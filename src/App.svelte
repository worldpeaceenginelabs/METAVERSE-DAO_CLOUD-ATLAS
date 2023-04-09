<script lang="ts">  
    
import Cesium from "./Cesium/Cesium.svelte";
import Appsearch from "./Dappstore/Appsearch.svelte";
import Infobox from "./Infobox.svelte";
import LoginPopUp from "./Auth/LoginPopUp.svelte";
    
</script>

<!-- Here starts the app-->
<div>
<Cesium/>

<LoginPopUp/>
<Infobox/>
<Appsearch/>
</div>
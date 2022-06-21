// I already inserted this into template.hmtl above <!-- The main stylesheet -->

// <!-- needed for cesium  -->
// <link href="/build/Widgets/widgets.css" rel="stylesheet" />
// <script async type='text/javascript'>window.CESIUM_BASE_URL = '/build/';</script>






// Typescript Snippet Cesium
// no worries about Svelte, it acts just like normal Typescript
// only difference: useEffect is replaced by onMount

// I just having some issue with switching the js file to a ts file (something related to import / not a module something)

// This goes into /src/js/views Cesium.js; rename to Cesium.ts
import {onMount} from 'svelte'
import {Viewer} from 'cesium'
import * as Cesium from 'cesium';
import {  } from 'cesium';


  // avoid "window not declared"
	if (typeof window !== "undefined"){
		// browser code
	}
	
  // cesium viewer
  let viewer: Viewer;
  // cesium basic settings
  onMount(async () => { 
		viewer = new Viewer('cesiumContainer', {
    "animation": false,
    "baseLayerPicker": false,
    "fullscreenButton": false,
    "vrButton": false,
    "geocoder": false,
    "homeButton": false,
    "infoBox": false,
    "sceneModePicker": false,
    "selectionIndicator": false,
    "timeline": false,
    "navigationHelpButton": false,
    "shouldAnimate": true
    
    //Use OpenStreetMaps
    // imageryProvider : new Cesium.OpenStreetMapImageryProvider({
    //    url : 'https://a.tile.openstreetmap.org/'
    // })
    
		});
	});
	// cesium access token
	Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJkNTY0ZjMxYy1hZTdjLTRiMzQtYTc4Yi02NWQ5MzU4MWUxMjgiLCJpZCI6NDcwNzcsImlhdCI6MTYxNjg2MzYxOX0.V-4tUKhYM_XHdchqDu3MAAJPezusOzxMeimdYzCXd94';




  // Same snippet but React TS, maybe that helps?

  import React, { useEffect } from 'react';

import {
  createDefaultImageryProviderViewModels,
  Ion,
  Viewer,
} from 'cesium';

import { makeStyles } from '@material-ui/core';

const styles = makeStyles({
  container: {
    width: '100%',
    height: '100%',
    margin: 0,
    padding: 0,
    overflow: 'hidden',
  },
});

let viewer: Viewer;
const containerId = 'cesiumContainer';

const CesiumMap: React.FunctionComponent = () => {
  

  useEffect(() => {
    void (async (): Promise<void> => {
      

     
      // Set custom token
      Ion.defaultAccessToken = 'your cesium ion token here';

      // Get the index of OpenStreetMap provider to select it first
      const viewModels = createDefaultImageryProviderViewModels();
      const openStreetMapModelIndex = viewModels.findIndex((model) =>
        model.iconUrl.includes('openStreetMap')
      );

      
  const classes = styles();

  return <div id={containerId} className={classes.container} />;
});

export default CesiumMap;
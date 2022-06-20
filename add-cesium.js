// This is how to add CesiumJS. I have two working snippets, one for React TS and one for Typesript

// Maybe it helps to see them in action?
// From https://github.com/worldpeaceenginelabs/PWA-JAMStack-Starter-Kit-with-Cesium (which is React TS)
// From https://github.com/worldpeaceenginelabs/CLOUD-ATLAS-SVELTE, src/Cesium.svelte (which is Typescript)


// 1. Insert this into template.hmtl above <!-- The main stylesheet -->

// <!-- needed for cesium  -->
// <link href="/build/Widgets/widgets.css" rel="stylesheet" />
// <script async type='text/javascript'>window.CESIUM_BASE_URL = '/build/';</script>



// 2. Clone /src/views/feed.ts
// Insert the Cesium React or Typescript snippet into the cloned feed.ts and rename the file Cesium.ts

// Then link Cesium.ts to Home in /src/js/components/Menu.ts, and the existing feed.ts entry in Menu.ts
// rename to "Feed", under the Cesium Homebutton. (still "Home")

// 3. add <CesiumMap /> component to Main.ts
// add Cesium.ts to router on Main.ts (Menu.ts "Home", now ./.)

// 4. Then npm i cesium.

// 5. npm install

// Done (It should look like Mockup Starterkit in readme.md)







// This goes into Iris feed.js file. Its origin is a create react app with TS.

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









// Typescript Version
// This goes into Iris feed.js

import {Viewer} from 'cesium'
  import * as Cesium from 'cesium';
	import {  } from 'cesium';
	import '../node_modules/cesium/Build/Cesium/Widgets/widgets.css'


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

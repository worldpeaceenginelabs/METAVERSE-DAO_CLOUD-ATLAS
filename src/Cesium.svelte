<script lang="ts">

	import {onMount} from 'svelte';

  import {Viewer,
  Cartesian3,
  ClockRange,
  Color,
  Entity,
  HermitePolynomialApproximation,
  JulianDate,
  SampledProperty,
  } from 'cesium';

  import * as Cesium from 'cesium';
  import "cesium/Build/Cesium/Widgets/widgets.css";
  
  import Gun from 'gun';
  import { nanoid } from 'nanoid';
  
   // Get user location from browser api
  const getLocationFromNavigator = (): Promise<GeolocationPosition> => {
    return new Promise((resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            resolve(position);
          },
          (error) => {
            reject(error);
          }
        );
      } else {
        reject(new Error('Geolocation is not supported by this browser.'));
      }
    });
  };
  


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
  


  // user location
let userLocationCartesian: Cartesian3 | null;
const userLocationPointId = 'user-location';

// user location
  onMount(async (): Promise<void> => {
let userLocation: GeolocationPosition | null = null;
try {
userLocation = await getLocationFromNavigator();
}
catch (error) {  
  // Ignore user decline
}

// Globe Auto Rotation

let rotationPaused = true;
let lastRotationTime: number | null = null;
let eventHandler: (() => void) | null = null;

const doRotate = (viewer: Viewer, rotationSpeed: number) => {
  if (rotationPaused) {
    return;
  }

  const now = Date.now();
  // Positiv: rotates from left to right
  const spinRate = rotationSpeed;
  const delta = (now - (lastRotationTime ?? now)) / 1000;

  lastRotationTime = now;

  viewer.scene.camera.rotate(Cartesian3.UNIT_Z, spinRate * delta);
};

const startRotation = (viewer: Viewer, rotationSpeed = 0.5) => {
  // Already added, just continue the loop
  if (eventHandler !== null) {
    if (rotationPaused) {
      // Updating this prevents a large rotation after a longer pause
      lastRotationTime = Date.now();
      rotationPaused = false;
    }

    return;
  }

  lastRotationTime = Date.now();
  eventHandler = () => doRotate(viewer, rotationSpeed);

  viewer.scene.postRender.addEventListener(eventHandler);
};

const stopRotation = () => {
  rotationPaused = true;
};

startRotation(viewer, -0.05);

// fly to user location on startup

viewer.camera.flyTo({
            destination: Cesium.Cartesian3.fromDegrees(userLocation.coords.longitude,
            userLocation.coords.latitude, 10000000.0),
 });



// user location
if (userLocation !== null) {
                userLocationCartesian = Cartesian3.fromDegrees(
                    userLocation.coords.longitude,
                    userLocation.coords.latitude,
                )
                
                addUserLocation(
                    viewer,
                    userLocation,
                    userLocationCartesian,
                    userLocationPointId
                )
            }
});

const addUserLocation = (
  viewer: Viewer,
  userLocation: GeolocationPosition,
  userLocationCartesian: Cartesian3,
  userLocationPointId: string
) => {
  viewer.entities.add(
    createPulsatingPoint(
      viewer,
      userLocationPointId,
      Cartesian3.fromDegrees(
        userLocation.coords.longitude,
        userLocation.coords.latitude,
        0
      ),
      Color.GREEN
    )
  );
};

// make user location dot pulsate

const createPulsatingPoint = (
    viewer: Viewer,
    pointId: string,
    userDestination: Cartesian3,
    color: Color
  ): Entity => {
    const start = JulianDate.now();
    const mid = JulianDate.addSeconds(start, 0.5, new JulianDate());
    const stop = JulianDate.addSeconds(start, 2, new JulianDate());
  
    viewer.clock.startTime = start;
    viewer.clock.currentTime = start;
    viewer.clock.stopTime = stop;
    viewer.clock.clockRange = ClockRange.LOOP_STOP;
  
    const pulseProperty = new SampledProperty(Number);
    pulseProperty.setInterpolationOptions({
      interpolationDegree: 3,
      interpolationAlgorithm: HermitePolynomialApproximation,
    });
  
    pulseProperty.addSample(start, 7.0);
    pulseProperty.addSample(mid, 15.0);
    pulseProperty.addSample(stop, 7.0);
  
    return new Entity({
      id: pointId,
      position: userDestination,
      point: {
        pixelSize: pulseProperty,
        color,
      },
    });
  };



// Start Svelte Lifecycle
onMount(async () => {

// Initialize GUN and tell it we will be storing all data local, and sync with relay http://localhost:8765/gun, and under the node 'mapmarker' in the graph.
var db = Gun(['http://localhost:8765/gun']).get('mapmarker')


// fetch latitude, longitude on click and save to Gun
let handler = new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas);
handler.setInputAction(function(result) {

                                        // pick position
                                        const cartesian = viewer.scene.pickPosition(result.position);
                                        // save Cartesian coordinates (x,y,z)
                                        const cartographic = Cesium.Cartographic.fromCartesian(cartesian);
                                        
                                        // convert from Cartesian to Degrees and shorten the numbers to 7 digits after comma
                                        const longitudeString = Cesium.Math.toDegrees(cartographic.longitude).toFixed(7);
                                        const latitudeString = Cesium.Math.toDegrees(cartographic.latitude).toFixed(7);

                                        // Generate random ID
                                        var randomid = nanoid(); 

                                        // Save coordinates to Gun - in this example under mapmarker.randomid.longitude:number&latitude:number(pseudocode)
                                        // The random ID is generated every time the function is executed. This equals naming every record differently.                                       
                                        db.get(randomid).put({longitude: longitudeString, latitude: latitudeString});
                                        
                                        },
Cesium.ScreenSpaceEventType.LEFT_CLICK);


// Fetch Gun data db.on(data => {//your function here});
db.on(data => { 

// Cesium constructor

let reddot = viewer.entities.add({
			name: "red dot",
			position: Cartesian3.fromDegrees(
                                      Number(data.longitude),
                                      Number(data.latitude),
                                      0
                                      ),
                                      
			point: {pixelSize : 10, color : Cesium.Color.RED, outlineColor : Cesium.Color.GREEN, outlineWidth : 3},

});

});

});

</script>


<main id="cesiumContainer">
</main>



<style>

main {
	position: absolute;
    width: 100%;
    height: 100%;
  }

</style>
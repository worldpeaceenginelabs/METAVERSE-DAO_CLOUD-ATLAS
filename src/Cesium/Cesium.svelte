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
    //    url : 'https://tile.openstreetmap.org/'
    // })
    
		});
	});


	// cesium access token

	Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJiOThiNzJiOC1iNDFhLTQ4ZGMtODc0Zi0wYjJmZWIyMjZkNzAiLCJpZCI6NDcwNzcsImlhdCI6MTcwMDY3Mzk1Mn0.5AKEDm3pPCzy9lr4NKYFtK2sLLQKJyEDo2VxQib0A4w';
  


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

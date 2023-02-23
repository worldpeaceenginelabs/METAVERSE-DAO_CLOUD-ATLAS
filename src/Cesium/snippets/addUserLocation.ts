import {
  ClockRange,
  Color,
  Entity,
  HermitePolynomialApproximation,
  JulianDate,
  SampledProperty,
  } from 'cesium'

  import { onMount } from 'svelte';
	import { Viewer, Cartesian2, Cartesian3, } from 'cesium';

  export const getLocationFromNavigator = (): Promise<GeolocationPosition> => {
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

// user location

if (userLocation !== null) {
                userLocationCartesian = Cartesian3.fromDegrees(
                    userLocation.coords.longitude,
                    userLocation.coords.latitude,
                )
                
            ;

            }
});



export let addUserLocation = (
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
      Color.CORNFLOWERBLUE
    )
  );
};


// make user location dot pulsate

export let createPulsatingPoint = (
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

  export default addUserLocation;
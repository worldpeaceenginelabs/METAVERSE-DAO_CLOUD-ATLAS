import React, { useEffect } from 'react';
import {
  createDefaultImageryProviderViewModels,
  Ion,
  Viewer,
  Cartesian3,
} from 'cesium';
import { makeStyles } from '@material-ui/core';
import appConfig from 'src/getConfig';
import addToggleZoomToUserLocation from 'src/Components/views/actions/addToggleZoomToUserLocation';
import addUserLocationInteraction from 'src/Components/views/actions/addUserLocationInteraction';
import useHasMouseSupport from 'src/hooks/useHasMouseSupport';
import addGlobeAutoRotation from 'src/Components/views/actions/addGlobeAutoRotation';

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
let userLocationCartesian: Cartesian3 | null;
const containerId = 'cesiumContainer';
const userLocationPointId = 'user-location';

const CesiumMap: React.FunctionComponent = () => {
  const hasMouseSupport = useHasMouseSupport();

  useEffect(() => {
    void (async (): Promise<void> => {
      let userLocation: GeolocationPosition | null = null;

      try {
        userLocation = await getLocationFromNavigator();
      } catch (error) {
        // Ignore user decline
      }

      // Set custom token
      Ion.defaultAccessToken = appConfig.app.cesium.accessToken;

      // Get the index of OpenStreetMap provider to select it first
      const viewModels = createDefaultImageryProviderViewModels();
      const openStreetMapModelIndex = viewModels.findIndex((model) =>
        model.iconUrl.includes('openStreetMap')
      );

      viewer = new Viewer(containerId, {
        ...appConfig.app.cesium,
        shouldAnimate: true,
        selectedImageryProviderViewModel:
          openStreetMapModelIndex === -1
            ? viewModels[0]
            : viewModels[openStreetMapModelIndex],
      });
      viewer.scene.screenSpaceCameraController.enableTilt = false;

      if (userLocation !== null) {
        userLocationCartesian = Cartesian3.fromDegrees(
          userLocation.coords.longitude,
          userLocation.coords.latitude,
          appConfig.app.zoomHeightUser * 1000
        );

        addUserLocationInteraction(
          viewer,
          userLocation,
          userLocationCartesian,
          userLocationPointId
        );
      }

      addToggleZoomToUserLocation(
        viewer,
        userLocationPointId,
        userLocationCartesian
      );

      if (hasMouseSupport && appConfig.app.enableGlobeAutoRotation) {
        addGlobeAutoRotation(viewer, appConfig.app.globeRotationSpeed);
      }
    })();
  }, [hasMouseSupport]);

  const classes = styles();

  return <div id={containerId} className={classes.container} />;
};

export default CesiumMap;

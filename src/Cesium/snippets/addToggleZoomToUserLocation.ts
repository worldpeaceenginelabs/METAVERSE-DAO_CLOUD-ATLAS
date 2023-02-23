import { Cartesian2, Cartesian3, Viewer } from 'cesium';
import pickEntity from 'src/utils/cesium/pickEntity';
import getCameraPositionWithNewHeight from 'src/utils/cesium/getCameraPositionWithNewHeight';
import appConfig from 'src/getConfig';

let zoomOutOnLocationClick = false;

const addToggleZoomToUserLocation = (
  viewer: Viewer,
  userLocationPointId: string,
  userDestination: Cartesian3 | null
) => {
  window.addEventListener('click', (event: MouseEvent) => {
    if (!userDestination) {
      return;
    }

    const clickPosition = new Cartesian2(event.x, event.y);
    const pickedEntity = pickEntity(viewer, clickPosition);

    if (pickedEntity?.id !== userLocationPointId) {
      return;
    }

    if (zoomOutOnLocationClick) {
      viewer.camera.flyTo({
        destination: getCameraPositionWithNewHeight(
          viewer,
          appConfig.app.zoomHeightStart
        ),
      });
    } else {
      viewer.camera.flyTo({
        destination: userDestination,
      });
    }

    zoomOutOnLocationClick = !zoomOutOnLocationClick;
  });
};

export default addToggleZoomToUserLocation;

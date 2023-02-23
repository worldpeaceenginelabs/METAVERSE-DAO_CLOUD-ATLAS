import { Cartesian2, Viewer } from 'cesium';
import { startRotation, stopRotation } from 'src/utils/cesium/globeRotation';

const addGlobeAutoRotation = (viewer: Viewer, rotationSpeed: number): void => {
  viewer.canvas.addEventListener('mousemove', (event: MouseEvent) => {
    const mousePosition = new Cartesian2(event.x, event.y);

    // Get the position of the globe below the mouse position
    // Will be undefined if the globe isn't below the cursor
    const cartesian = viewer.camera.pickEllipsoid(
      mousePosition,
      viewer.scene.globe.ellipsoid
    );

    if (!cartesian) {
      startRotation(viewer, rotationSpeed);
      return;
    }

    stopRotation();
  });

  startRotation(viewer, rotationSpeed);
};

export default addGlobeAutoRotation;

import { Viewer } from 'cesium';

const getCameraPositionWithNewHeight = (
  viewer: Viewer,
  heightInKilometer: number
) => {
  const ellipsoid = viewer.scene.mapProjection.ellipsoid;

  const cartographic = ellipsoid.cartesianToCartographic(
    viewer.camera.position
  );
  cartographic.height = heightInKilometer * 1000;

  return ellipsoid.cartographicToCartesian(cartographic);
};

export default getCameraPositionWithNewHeight;

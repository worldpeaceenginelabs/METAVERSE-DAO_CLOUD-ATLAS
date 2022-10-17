import { Cartesian3, Viewer } from 'cesium';

let rotationPaused = false;
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

export { startRotation, stopRotation };

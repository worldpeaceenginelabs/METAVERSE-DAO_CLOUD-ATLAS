import {
  Cartesian2,
  Entity,
  PointPrimitive,
  PointPrimitiveCollection,
  Viewer,
} from 'cesium';

interface PickedObject {
  id?: Entity;
  collection?: PointPrimitiveCollection;
  primitive?: PointPrimitive;
}

type PickResult = PickedObject | undefined | null;

const pickEntity = (viewer: Viewer, position: Cartesian2): Entity | null => {
  const picked = viewer.scene.pick(position) as PickResult;
  if (!picked) {
    return null;
  }

  const entity =
    picked.id ?? (picked.primitive?.id as Entity | undefined) ?? null;
  if (entity instanceof Entity) {
    return entity;
  }

  return null;
};

export default pickEntity;

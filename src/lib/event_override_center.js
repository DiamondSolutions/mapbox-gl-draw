export default function (center, mapEvent, createCopy) {
  const point = mapEvent.point || { x: 0, y: 0 };
  if (createCopy) {
    return {
      ...mapEvent,
      lngLat: center,
      point,
    };
  } else {
    mapEvent.lngLat = center;
    mapEvent.point = point;
    return mapEvent;
  }
}

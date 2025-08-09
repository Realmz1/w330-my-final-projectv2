export async function getStaticMap(place, token) {
  if (!token) return null;
  const geoUrl =
    `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(place)}.json?access_token=${token}`;
  try {
    const geoRes = await fetch(geoUrl);
    if (!geoRes.ok) throw new Error('geo');
    const geo = await geoRes.json();
    const [lon, lat] = geo.features[0].center;
    const staticUrl =
      `https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/pin-s+${encodeURIComponent('d71e28')}(${lon},${lat})/${lon},${lat},10/400x200?access_token=${token}`;
    return staticUrl;
  } catch (e) {
    return null;
  }
}

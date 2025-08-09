export async function getMortgageRates(apiKey) {
  const end = new Date();
  const start = new Date();
  start.setMonth(start.getMonth() - 12);
  const params = new URLSearchParams({
    series_id: 'MORTGAGE30US',
    observation_start: start.toISOString().slice(0,10),
    observation_end: end.toISOString().slice(0,10),
    api_key: apiKey || '',
    file_type: 'json'
  });
  const url = `https://api.stlouisfed.org/fred/series/observations?${params}`;
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error('network');
    const data = await res.json();
    return data.observations
      .filter(o => o.value !== '.')
      .map(o => ({ date: o.date, value: Number(o.value) }));
  } catch (e) {
    // fallback sample data
    const sample = [
      { date: '2023-01-01', value: 6.3 },
      { date: '2023-03-01', value: 6.7 },
      { date: '2023-05-01', value: 6.9 },
      { date: '2023-07-01', value: 7.1 },
      { date: '2023-09-01', value: 7.3 },
      { date: '2023-11-01', value: 7.5 },
      { date: '2024-01-01', value: 6.8 },
      { date: '2024-03-01', value: 6.6 },
      { date: '2024-05-01', value: 6.4 }
    ];
    return sample;
  }
}

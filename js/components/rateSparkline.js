export function drawSparkline(el, rates) {
  const width = 300;
  const height = 80;
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  el.innerHTML = '';
  el.appendChild(canvas);
  const ctx = canvas.getContext('2d');
  const values = rates.map(r => r.value);
  const min = Math.min(...values);
  const max = Math.max(...values);
  ctx.strokeStyle = '#d71e28';
  ctx.lineWidth = 2;
  ctx.beginPath();
  rates.forEach((r, i) => {
    const x = (i / (rates.length - 1)) * width;
    const y = height - ((r.value - min) / (max - min)) * height;
    i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
  });
  ctx.stroke();
}

import tinycolor from "tinycolor2";

export const drawPolygon = (ctx, item) => {
  const angle = (item.rotation * Math.PI) / 180;

  ctx.translate(item.x, item.y);
  ctx.rotate(angle);

  ctx.fillStyle = item.color;
  ctx.fillRect(-item.width / 2, -item.height / 2, item.width, item.height);

  ctx.resetTransform();
};

export const drawLabel = (ctx, item) => {
  const fontSize = 15;
  const padding = 5;
  const color = tinycolor(item.color);

  ctx.textAlign = "center";
  ctx.font = `${fontSize}px Arial`;
  ctx.fillStyle = color.isLight() ? "#000" : "#FFF";
  ctx.strokeStyle = color.isLight() ? "#000" : "#FFF";

  const text = `${item.rotation}°`;
  const textWidth = ctx.measureText(text).width;

  ctx.beginPath();
  ctx.arc(item.x, item.y, 2, 0, 2 * Math.PI);
  ctx.stroke();

  ctx.fillText(text, item.x + textWidth / 2 + padding, item.y + padding);
};

export const drawBoundingBox = (ctx, item) => {
  const x = item.x - item.width / 2;
  const y = item.y - item.height / 2;
  const angle = (item.rotation * Math.PI) / 180;

  const c1 = getCorner(item.x, item.y, x, y, angle);
  const c2 = getCorner(item.x, item.y, x + item.width, y, angle);
  const c3 = getCorner(item.x, item.y, x + item.width, y + item.height, angle);
  const c4 = getCorner(item.x, item.y, x, y + item.height, angle);

  const bx1 = Math.min(c1.x, c2.x, c3.x, c4.x);
  const by1 = Math.min(c1.y, c2.y, c3.y, c4.y);
  const bx2 = Math.max(c1.x, c2.x, c3.x, c4.x);
  const by2 = Math.max(c1.y, c2.y, c3.y, c4.y);

  ctx.strokeStyle = "#FF0000";
  ctx.strokeRect(bx1, by1, bx2 - bx1, by2 - by1);
};

export const getCorner = (centerX, centerY, cornerX, cornerY, angle) => {
  const diffX = cornerX - centerX;
  const diffY = cornerY - centerY;
  const distance = Math.sqrt(diffX * diffX + diffY * diffY);

  angle += Math.atan2(diffY, diffX);

  const x = centerX + distance * Math.cos(angle);
  const y = centerY + distance * Math.sin(angle);

  return { x: x, y: y };
};

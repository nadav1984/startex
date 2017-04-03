// creating canvas, the size according to a given canvas
export default (can) => {
  const copyCanvas = document.createElement('canvas');
  copyCanvas.width = can.width;
  copyCanvas.height = can.height;
  return copyCanvas;
};

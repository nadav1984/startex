import waterImage from '../../assets/water.jpg';
import stoneImage from '../../assets/stone.jpg';
import desertImage from '../../assets/desert.jpg';
import createCopyCanvas from './create_same_size_canvas.js';
import loadImage from 'image-promise';
// draw all
export default (can,walls,water) => {
  const sizeOfUnitWall = 50;
  const ctx = can.getContext("2d");
  can.width = sizeOfUnitWall * (walls.length + 2);
  can.height =   (Math.max( ...walls ) + 2) * sizeOfUnitWall;
  // helper canvas for drawing, scale to the target canvas
  const stoneCanvas = createCopyCanvas(can);
  const waterCanvas = createCopyCanvas(can);
  const ctxWater = waterCanvas.getContext("2d");
  const ctxStone = stoneCanvas.getContext("2d");
  const images = [waterImage, stoneImage,desertImage];
  loadImage(images).then((allImgs) => {
    // draw to helper canvas
    ctxStone.drawImage(allImgs[1],0,0,stoneCanvas.width,stoneCanvas.height);
   ctxWater.drawImage(allImgs[0],0,0,waterCanvas.width,waterCanvas.height);
    // draw background
    ctx.drawImage(allImgs[2],0,0,can.width,can.height);
    // draw block of water only in the wall position in the canvas
    walls.forEach((wall,index) => {
      const x = sizeOfUnitWall*(index + 1);
      const y = can.height - wall*sizeOfUnitWall;
      const w = sizeOfUnitWall;
      const h = wall*sizeOfUnitWall;
      // draw stone
      ctx.drawImage(stoneCanvas,x,y,w,h,x,y,w,h);
      // drow water
      ctx.drawImage(waterCanvas,x,y - water[index]*(sizeOfUnitWall),w,water[index]*sizeOfUnitWall,x,y-water[index]*(sizeOfUnitWall),w,water[index]*sizeOfUnitWall);
    });
})
.catch((err) => {
    console.error('One or more images have failed to load :(');
    console.error(err.errored);
});
};

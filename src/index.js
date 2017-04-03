import calcWaterPlace from './core/calc_water_place.js';
import drawOnCanvas from './core/draw_on_canvas.js';
import '../styles/index.scss';
const buttonPaint = document.getElementById('btn-paint');
const buttonRandom = document.getElementById('btn-random');
const action = () => {
  const wallFromInput = document.getElementById("input-wall").value;
  if(wallFromInput) {
    const walls = wallFromInput.split(",");
    const notValidWall = walls.find((elem) => { return isNaN(elem) || elem < 0 });
    if(!notValidWall) {
      const water = calcWaterPlace(walls);
      drawOnCanvas(document.getElementById("can"),walls,water);
      document.getElementById("water-volume").innerHTML = "Volume: " + water.reduce((a,b) => { return a + b }, 0);
    } else {
      alert("Not valid input")
    }
  }
};
buttonPaint.onclick = () => {
  action();
};
buttonRandom.onclick = () => {
  var newVal = [...new Array(8)].map(() => (Math.round(Math.random() * 100)) % 9);
  document.getElementById("input-wall").value = newVal.toString();
  action();
};

// Calculate array that represent where to put water
export default (walls) => {
  // there is no water in size 2 or less
  if (!walls || walls.length <= 2) {
    return walls.map(() => { return 0; });
  };
  // The highest wall from the left
  const maxFromLeft = walls.reduce((target,wall,index)=>{
    target[index] = index === 0 ? wall : Math.max(target[index-1],wall);
    return target;
  },[]);
  // The highest wall from the Right
  const maxFromRight = walls.slice().reverse().reduce((target,wall,index)=>{
    target[index] = index === 0 ? wall : Math.max(target[index-1],wall);
    return target;
  },[]).reverse();
  return walls.map((wall,index) => {
    // The water is must be the between the heighest wall from the left & right  
    return Math.min(maxFromLeft[index],maxFromRight[index]) - wall;
  });
};

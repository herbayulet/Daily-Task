let papancatur = (x, y) => {
  let txt = "";
  for (let i = 1; i <= x; i++) {
    if (i % 2 === 0) {
      for (let i = 1; i < y; i++) {
        if (i % 2 === 0) {
          txt += " ";
        } else {
          txt += "#";
        }
      }
    } else {
      for (let j = 1; j <= y; j++) {
        if (j % 2 === 0) {
          txt += "#";
        } else {
          txt += " ";
        }
      }
    }
    txt += "\n";
  }
  return txt;
};
console.log(papancatur(8, 8));

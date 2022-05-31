let perulangan = (x) => {
  let txt = "";
  for (let i = 1; i <= x; i++) {
    if (i % 2 === 0) {
      txt += i + " - Berkualitas" + "\n";
    } else if (i % 3 === 0) {
      txt += i + " - I Love Coding" + "\n";
    } else {
      txt += i + " - Santai" + "\n";
    }
  }
  return txt;
};
console.log(perulangan(20));

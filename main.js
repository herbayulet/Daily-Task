function jamBerubah(s) {
  // mencari AM atau PM nya
  let waktu = s.substring(8);
  // mencari jam nya tanpa AM atau PM
  let jam = s.substring(0, 8);
  // dibungkus ke dalam array
  let arr = jam.split(":");
  // jika ini adalah waktu malam atau PM maka ditambah dengan 12
  if (waktu === "PM") {
    if (arr[0] !== "12") {
      arr[0] = parseInt(arr[0]) + 12;
    }
  } else {
    // jika di jam terang atau AM
    if (arr[0] === "12") {
      arr[0] = parseInt(arr[0]) - 12;
    }
  }
  return arr.join(":");
}
console.log(jamBerubah("01:00:00PM"));

let timeConversion = (s) => {
  let amPM = s.charAt(8);
  let jam = "";
  if (amPM == "A") {
    //am
    if (s.substring(0, 2) == "12") {
      jam = "00";
    } else {
      jam = s.substring(0, 2);
    }
  } //pm
  else {
    if (s.substring(0, 2) == "12") {
      jam = s.substring(0, 2);
    } else {
      jam = parseInt(s.substring(0, 2), 10) + 12;
      console.log(jam);
    }
  }
  return jam + s.substring(2, 8);
};
console.log(timeConversion("12:40:22AM"));

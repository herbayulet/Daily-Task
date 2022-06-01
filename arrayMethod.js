let dataHandling2 = (x) => {
  // Method Splice
  x.splice(1, 2, "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung"), x.splice(3, 1, "21/05/1989"), x.splice(4, 1, "Pria", "SMA International Metro");
  console.log(x);

  //   Tanggal Bulan Tahun
  let tanggal = x[3].split("/");
  //   Menentukan bulan
  let bulan = parseInt(tanggal[1]);
  switch (bulan) {
    case 01:
      console.log("Januari");
      break;
    case 02:
      console.log("Februari");
      break;
    case 03:
      console.log("Maret");
      break;
    case 04:
      console.log("April");
      break;
    case 05:
      console.log("Mei");
      break;
    case 06:
      console.log("Juni");
      break;
    case 07:
      console.log("Juli");
      break;
    case 08:
      console.log("Agustus");
      break;
    case 09:
      console.log("September");
      break;
    case 10:
      console.log("Oktober");
      break;
    case 11:
      console.log("November");
      break;
    case 12:
      console.log("Desember");
      break;
    default:
      console.log("Gak ada bulan ke 13");
      break;
  }
  //   Mengganti (/) menjadi (-) dalam proses penanggalan
  let handlingBulan = tanggal.join("-");
  // Sorting dari yang terbesar ke terkecil
  let urut = tanggal.sort((a, b) => b - a);
  console.log(urut);
  console.log(handlingBulan);
  //   menghapus suatu karakter dalam string
  let nama = x[1].slice(0, 15);
  console.log(nama);
};
dataHandling2(["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1998", "Membaca"]);

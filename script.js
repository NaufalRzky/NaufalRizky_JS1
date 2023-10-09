function checkNumber(number) {
    if (number % 2 === 0) {
      alert(number + " adalah angka genap.");
    } else {
      alert(number + " adalah angka ganjil.");
    }
  }
  
  function checkAge(age) {
    if (age >= 18) {
      if (age < 60) {
        alert("Anda adalah dewasa.");
      } else {
        alert("Anda adalah senior.");
      }
    } else {
      alert("Anda adalah anak-anak atau remaja.");
    }
  }
  
  function getDayName(day) {
    let dayName;
    switch (day) {
      case 0:
        dayName = "Minggu";
        break;
      case 1:
        dayName = "Senin";
        break;
      case 2:
        dayName = "Selasa";
        break;
      case 3:
        dayName = "Rabu";
        break;
      case 4:
        dayName = "Kamis";
        break;
      case 5:
        dayName = "Jumat";
        break;
      case 6:
        dayName = "Sabtu";
        break;
      default:
        dayName = "Hari tidak valid";
    }
    alert("Hari ini adalah " + dayName);
  }
  
  // Iterasi dengan for
  for (let i = 1; i <= 5; i++) {
    document.getElementById("forLoopResult").innerHTML += "<li>Iterasi ke-" + i + "</li>";
  }
  
  // Iterasi dengan while
  let count = 0;
  while (count < 5) {
    document.getElementById("whileLoopResult").innerHTML += "<li>Perulangan ke-" + (count + 1) + "</li>";
    count++;
  }
  
  // Iterasi dengan do while
  let n = 1;
  do {
    document.getElementById("doWhileLoopResult").innerHTML += "<li>Iterasi ke-" + n + "</li>";
    n++;
  } while (n <= 3);
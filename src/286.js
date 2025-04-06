// Example: A simple countdown clock with hourglass shape
    
function displayHourglass() {
  // This function displays an hourglass-shaped pattern of dots using ASCII characters.
  const hours = "0123456789";
  for (let i = 0; i < 8; i++) {
    let line = "";
    for (let j = 0; j < 8 - i; j++) {
      line += " ";
    }
    for (let k = 0; k < i + 1; k++) {
      line += hours[k];
      if ((k + i) % 2 === 0) {
        line += "|";
      } else {
        line += "#";
      }
    }
    console.log(line);
  }
}

// Example: A countdown clock with a custom pattern of stars
function displayCustomPattern() {
  const starCount = 5;
  for (let i = 0; i < starCount * 3 - 1; i++) {
    let line = "";
    for (let j = 0; j < 2 * starCount + 1; j++) {
      if ((i === 0 && j % 2 !== 0) || (j >= starCount / 4 && i >= starCount - 3 && i <= starCount - 1)) {
        line += "#";
      } else {
        line += " ";
      }
    }
    console.log(line);
  }
}

// Example: A timer with a bar chart
function displayBarChart() {
  // This function displays a bar chart using ASCII characters.
  const data = [
    ["0", "1", "2", "3", "4", "5", "6", "7", "8"],
    [0, 1, 2, 3, 4, 5, 6, 7, 8],
    [0, 1, 2, 3, 4, 5, 6, 7, 8],
    [0, 1, 2, 3, 4, 5, 6, 7, 8]
  ];
  
  let barChart = "";
  for (let i = 0; i < data[0].length; i++) {
    barChart += ` |`;
  }
  console.log(barChart);
  for (let i = 0; i <= 1; i++) {
    const barCount = Math.floor(data[i][data[0].length - 1]);
    for (let j = 0; j < data[i][barCount]; j++) {
      let line = "";
      for (let k = 0; k < data[0].length - 1; k++) {
        if ((k + i) % 2 !== 0) {
          line += " ";
        } else {
          line += "#";
        }
      }
      console.log(line);
    }
  }
}

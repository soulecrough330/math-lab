function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

document.body.innerHTML += `
  <div id="results"></div>
`;

for (let i = 0; i < 20; i++) {
  const randomNum = getRandomInt(1, 10);
  document.getElementById("results").innerHTML += `
    <p>Question: ${i + 1}</p>
    <input type="number" id="${randomNum}" min="1" max="10" value="5">
    <button onclick="changeAnswer(${randomNum})">Submit</button>
  `;
}

function changeAnswer(num) {
  const question = document.getElementById("results").firstChild;
  question.textContent = `Question: ${num + 1}`;
}

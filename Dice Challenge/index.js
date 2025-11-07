let img1 = document.querySelector(".img1");
let img2 = document.querySelector(".img2");
let header = document.querySelector("h1");

function firstImageSelector(num1, num2) {
  img1.src = `./images/dice${num1}.png`;
  img2.src = `./images/dice${num2}.png`;
}

function determineWinner(num1, num2) {
  if (num1 === num2) {
    header.textContent = "Draw!";
  } else if (num1 > num2) {
    header.textContent = "Player 1 Wins";
  } else {
    header.textContent = "Player 2 Wins";
  }
}

function runAll() {
  header.textContent = "Rolling...";
  let rollCount = 0;
  const rollInterval = setInterval(() => {
    // Quickly cycle through random dice faces
    const temp1 = Math.floor(Math.random() * 6) + 1;
    const temp2 = Math.floor(Math.random() * 6) + 1;
    firstImageSelector(temp1, temp2);
    rollCount++;
    if (rollCount >= 20) { // about 2 seconds at 100ms/frame
      clearInterval(rollInterval);
      const final1 = Math.floor(Math.random() * 6) + 1;
      const final2 = Math.floor(Math.random() * 6) + 1;
      firstImageSelector(final1, final2);
      determineWinner(final1, final2);
    }
  }, 100);
}

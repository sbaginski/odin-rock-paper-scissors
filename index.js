function getComputerChoice() {
  let randomNumer = Math.floor(Math.random() * 3);
  switch (randomNumer) {
    case 0:
      return "Rock";
    case 1:
      return "Paper";
    case 2:
      return "Scissors";
  }
}
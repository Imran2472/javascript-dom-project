var ShowWinPage = document.querySelector(".win-message");
var message = document.querySelector(".message");
var xCount = document.querySelector(".x-player-number-count");
var oCount = document.querySelector(".o-player-number-count");
var game = true;
var Xcounter = 0;
var Ocounter = 0;
var counter = 0;
function StartGame(element) {
  console.log(element);
  if (game) {
    element.innerHTML = "X";
    Xcounter++;
    counter++;
    xCount.innerHTML = `${element.innerHTML} Take Play ${Xcounter} times`;
    element.classList.add("desiable");
    game = false;
  } else {
    element.innerHTML = "O";
    Ocounter++;
    counter++;
    oCount.innerHTML = `${element.innerHTML} Take Play ${Ocounter} times`;
    element.classList.add("desiable");
    game = true;
  }
  CheckWin();
}

function CheckWin() {
  var cells = document.getElementsByClassName("cell");
  var winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (var i = 0; i < winningCombinations.length; i++) {
    var combination = winningCombinations[i];
    console.log(combination[0], combination[1], combination[2]);
    var cell1 = cells[combination[0]];
    // console.log(cell1);
    var cell2 = cells[combination[1]];
    // console.log(cell2);
    var cell3 = cells[combination[2]];
    // console.log(cell3);
    if (
      cell1.innerHTML === cell2.innerHTML &&
      cell2.innerHTML === cell3.innerHTML &&
      cell1.innerHTML !== ""
    ) {
      ShowWinPage.classList.replace("d-none", "d-flex");
      message.innerHTML = `Congratulations ${cell1.innerHTML} wins the Game!`;
      game = false;
      Xcounter = 0;
      Ocounter = 0;
      counter = 0;
      xCount.innerHTML = `X Take Play ${Xcounter} times`;
      oCount.innerHTML = `O Take Play ${Ocounter} times`;
      scrollToTop();
      return;
    } else if (counter === 9) {
      Swal.fire({
        title: "Game Draw ",
        text: "Lets Play Again",
        icon: "question",
      });
      ResetGame();
    }
  }
}

function ResetGame() {
  var cell = document.getElementsByClassName("cell");
  for (var i = 0; i < cell.length; i++) {
    cell[i].innerHTML = "";
    cell[i].classList.remove("desiable");
    game = true;
  }
  Xcounter = 0;
  Ocounter = 0;
  counter = 0;
  ShowWinPage.classList.replace("d-flex", "d-none");
  message.innerHTML = "";
  xCount.innerHTML = `X Take Play ${Xcounter} times`;
  oCount.innerHTML = `O Take Play ${Ocounter} times`;
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

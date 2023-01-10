const computer=document.querySelector(".computer img");

const player=document.querySelector(".player img");

const options=document.querySelectorAll(".btnclick");
const computerPoints = document.querySelector(".computerPoints");
const playerPoints = document.querySelector(".playerPoints");

options.forEach(function (option)  {
  option.addEventListener("click",function () {
    player.classList.add("computershake");
  computer.classList.add("playershake");

setTimeout(() => {
  player.classList.remove("computershake");
computer.classList.remove("playershake");
var player_term=option.innerHTML;
player.src="images/player"+ player_term+".png";
let computerOption=["STONE","PAPER","SCISSORS"];
let random_comp=Math.floor(Math.random()*3);
let computerChoice=computerOption[random_comp];
computer.src="images/computer"+computerChoice+".png";

let cPoints = parseInt(computerPoints.innerHTML);
    let pPoints = parseInt(playerPoints.innerHTML);

      if (option.innerHTML === "STONE") {
        if (computerChoice === "PAPER")
        computerPoints.innerHTML = cPoints + 1;
        else if (computerChoice === "SCISSORS")
          playerPoints.innerHTML = pPoints + 1;
      } else if (option.innerHTML === "PAPER") {
        if (computerChoice === "SCISSORS")
          computerPoints.innerHTML = cPoints + 1;
        else if (computerChoice === "STONE")
          playerPoints.innerHTML = pPoints + 1;
      } else {
        if (computerChoice === "STONE")
          computerPoints.innerHTML = cPoints + 1;
        else if (computerChoice === "PAPER")
          playerPoints.innerHTML = pPoints + 1;
      }
    }, 900);


});
});

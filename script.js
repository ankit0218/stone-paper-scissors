// Prevent animation on load
setTimeout(() => {
    document.body.classList.remove("preload");
  }, 500);
  
  // DOM
  const btnRules = document.querySelector(".rules-btn");
  const btnClose = document.querySelector(".close-btn");
  const modalRules = document.querySelector(".modal");
  
  const CHOICES = [
    {
      name: "paper",
      beats: "rock",
    },
    {
      name: "scissors",
      beats: "paper",
    },
    {
      name: "rock",
      beats: "scissors",
    },
  ];
  const choiceButtons = document.querySelectorAll(".choice-btn");
  const gameDiv = document.querySelector(".game");
  const resultsDiv = document.querySelector(".results");
  const resultDivs = document.querySelectorAll(".results__result");
  
  const resultWinner = document.querySelector(".results__winner");
  const resultText = document.querySelector(".results__text");
  
  const playAgainBtn = document.querySelector(".play-again");
  
  const scoreNumber = document.querySelector(".score__number");
  const c_scoreNumber = document.querySelector(".c-score__number");
  let score = 0;
  let c_score=0;
  let max_score=15;
  
  // Game Logic
  choiceButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const choiceName = button.dataset.choice;
      const choice = CHOICES.find((choice) => choice.name === choiceName);
      choose(choice);
    });
  });
  
  function choose(choice) {
    const computer_choice = computer_Choose();
    displayResults([choice, computer_choice]);
    displayWinner([choice, computer_choice]);
  }
  
  function computer_Choose() {
    const rand = Math.floor(Math.random() * CHOICES.length);
    return CHOICES[rand];
  }
  
  function displayResults(results) {
    resultDivs.forEach((resultDiv, idx) => {
      setTimeout(() => {
        resultDiv.innerHTML = `
          <div class="choice ${results[idx].name}">
            <img src="images/icon-${results[idx].name}.svg" alt="${results[idx].name}" />
          </div>
        `;
      }, idx * 1000);
    });
  
    gameDiv.classList.toggle("hidden");
    resultsDiv.classList.toggle("hidden");
  }
  
// win(results){
//   score++;
//   scoreNumber.innerHTML=score;
//   c_scoreNumber.innerHTML=c_score;
// }

  function displayWinner(results) {
    setTimeout(() => {
      const userWins = isWinner(results);
      const ComputerWins = isWinner(results.reverse());
  
      if (userWins) {
        resultText.innerText = "you win";
        resultDivs[0].classList.toggle("winner");
      
        // win(results);
        // win(score,c_score);
        won(1);
      } else if (ComputerWins) {
        resultText.innerText = "you lose";
        resultDivs[1].classList.toggle("winner");
        // loss(score,c_score);
        loss(1)
      } else {
        resultText.innerText = "draw";
      }
      resultWinner.classList.toggle("hidden");
      resultsDiv.classList.toggle("show-winner");
    }, 1000);
  }
  
  function isWinner(results) {
    return results[0].beats === results[1].name;

  }
  
  // function win(score,c_score) {
  // score++;
  // scoreNumber.innerHTML= score;
  // c_scoreNumber.innerHTML=c_score;

  //   // score += point;
  //   // scoreNumber.innerText = score; 
  // }
  // // function loss(score,c_score) {
  // //   c_score++;
  // //   c_scoreNumber.innerHTML=c_score;
  // //   scoreNumber.innerHTML= score;
  
  // //     // score += point;
  // //     // scoreNumber.innerText = score; 
  // //   }
    function won(point){
      score += point;
      scoreNumber.innerText = score; 
      if(score>=5){
        window.location.href=("second.html");
      }
      // if(score>15){
      //   resultText.innerHTML= "USER";
      // }
    }
    function loss(point){
      c_score += point;
      c_scoreNumber.innerText = c_score; 
      if(c_score>=5){
        window.location.href=("third.html");
      }
      // if(score>15){
      //   resultText.innerHTML= "USER";
      // }
    }

  // Play Again
  playAgainBtn.addEventListener("click", () => {
    gameDiv.classList.toggle("hidden");
    resultsDiv.classList.toggle("hidden");
  
    resultDivs.forEach((resultDiv) => {
      resultDiv.innerHTML = "";
      resultDiv.classList.remove("winner");
    });
  
    resultText.innerText = "";
    resultWinner.classList.toggle("hidden");
    resultsDiv.classList.toggle("show-winner");
  });
  
  // Show/Hide Rules
  btnRules.addEventListener("click", () => {
    modalRules.classList.toggle("show-modal");
  });
  btnClose.addEventListener("click", () => {
    modalRules.classList.toggle("show-modal");
  });












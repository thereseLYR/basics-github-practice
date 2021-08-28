var trycount = 0;

var checkGuess = function (guess) {
  if (guess == "banana" || guess == "chisel" || guess == "faucet") {
    return true;
  }
  return false;
};

var main = function (input) {
  while (trycount <= 1) {
    trycount = trycount + 1;
    console.log(`current trycount: ${trycount}`);
    if (checkGuess(input) == true) {
      return "you won!";
    }
    return "Guessed wrongly. Try again.";
  }
  return "Too many tries. You lose.";
};

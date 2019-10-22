const sentence = "hello there from lighthouse labs";
let animate = function(sent) {
  let newsent = sent + "\n";
  let count = 0;
  for (const char of newsent) {
    setTimeout(() => {
      process.stdin.write(char);
    }, (count += 50));
  }
};
animate(sentence);

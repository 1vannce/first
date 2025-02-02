const letterText = [
  "Happy first monthsary babe! ❤️",

  "It’s been a month, but it feels like I’ve known you forever since our first meeting last year HAHAHA. Every moment with you is special, and I’m so grateful to have you in my life Clab. You make me smile, you make my days brighter, and you make my heart feel at home.",

  "I know things aren’t always easy, but I want you to know that I’m always here for you. No matter what happens, I’ll be by your side, loving and supporting you.",

  "Thank you for being you. Thank you for letting me in. I’m so lucky to have you, and I can’t wait for more days, months, or even years and moments with you.",

  "I love you, Dear. 💕",

  "Your Love,<br>Ivan",
];

let index = 0;
const speed = 50;

function startTyping() {
  const letterElement = document.getElementById("letter");
  letterElement.innerHTML = ""; // Clear previous text
  index = 0;
  typeNextSentence();
}

function typeNextSentence() {
  if (index < letterText.length) {
    const newParagraph = document.createElement("p");
    document.getElementById("letter").appendChild(newParagraph);
    typeSentence(letterText[index], newParagraph, () => {
      index++;
      setTimeout(typeNextSentence, 800);
    });
  }
}

function typeSentence(sentence, paragraphElement, callback) {
  let letterIndex = 0;
  function type() {
    if (letterIndex < sentence.length) {
      paragraphElement.innerHTML += sentence.charAt(letterIndex);
      letterIndex++;
      setTimeout(type, speed);
    } else {
      setTimeout(callback, 500);
    }
  }
  type();
}

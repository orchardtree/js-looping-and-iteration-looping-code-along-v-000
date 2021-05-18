// Code your solutions in this file
const cards = []

function writeCards(recipients, event) {
  for (let i = 0; i < recipients.length; i++) {
    cards(`Thank you, ${recipients[i]}, for the wonderful ${event} gift!`);
  }

}

writeCards(["Lisa", "Kaitlin", "Jan"], "surprise");

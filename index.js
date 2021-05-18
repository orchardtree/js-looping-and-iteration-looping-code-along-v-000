// Code your solutions in this file
function writeCards(recipients, event) {
  for (let i = 0; i < recipients.length; i++) {
    console.log(`Thank you, ${recipients[i]}, for the wonderful ${event} gift!`);
  }

}

writeCards(["Lisa", "Kaitlin", "Jan"], "surprise");

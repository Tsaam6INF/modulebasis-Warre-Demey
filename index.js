const loginExp = require("./admin");
const login = loginExp.loginFunction;
function cb(result) {
  //   if (err) {
  //     console.log("Er is een fout opgetreden:", err);
  //   }
  // Doe iets met het resultaat als er geen fout is
  console.log(result);
}

// Aannemende dat de login-functie een fout en resultaat teruggeeft
login("kleintjes.karel", "test", cb);
// // resultaat: fout bij het aanmelden

login("kleintjes.karel", "karel", cb);
// // resultaat: kleintjes.karel: lezen - schrijvn;

login("dotjes.els", "els", cb);
// // resultaat: dotjes.els: lezen;

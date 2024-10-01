const loginExp = require("./admin");
const login = loginExp.loginFunction;
login("kleintjes.karel", "test", () => {});
// login("kleintjes.karel", "test", cb);
// // resultaat: fout bij het aanmelden

// login("kleintjes.karel", "karel", cb);
// // resultaat: kleintjes.karel: lezen - schrijvn;

// login("dotjes.els", "els", cb);
// // resultaat: dotjes.els: lezen;

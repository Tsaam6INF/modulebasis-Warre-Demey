const Users = require("./data");

const loginFunction = (username, pass, cb) => {
  // i wordt gebruikt om een foreach te doen die elke user zal overloppen
  let i = 0;
  Users.users.forEach((gebruiker) => {
    if (username == Users.users[i].username) {
      const userId = gebruiker.id;
      // als er een match is zoekt hij het id
      if (pass == gebruiker.wachtwoord) {
        // als wachtwoord correct is dan zal hij de rechten zoeken en geven aan de hand van het id
        const userRight = Users.userRights.find(
          (UserR) => UserR.userid == userId
        );
        const recht = Users.rights.find((j) => j.id == userRight.rightid);
        cb(`${username} recht: ${recht.omschrijving}`);
      } else {
        cb(`${username} wacthwoord onjuist`);
      }
    }
    i++;
  });
};

module.exports = {
  loginFunction,
};

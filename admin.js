const Users = require("./data");

const loginFunction = (username, pass, callback) => {
  console.log(`gebruikersnaam = > ${username}`);
  let i = 0;
  Users.users.forEach((gebruiker) => {
    if (username == Users.users[i].username) {
      const userId = gebruiker.id;
      console.log(`id      =>     ${userId}`);
      if (pass == gebruiker.wachtwoord) {
        console.log("suc6vol ingelogd");
      } else {
        console.log("wacthwoord incorrect");
      }
    }
    i++;
  });
  callback();
};

module.exports = {
  loginFunction,
};

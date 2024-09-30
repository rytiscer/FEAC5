const bcrypt = require("bcryptjs");

const password = "password123"; // Slaptažodis, kurį norite patikrinti
const hashedPassword =
  "$2a$10$P01nGgqlVvaFi4sAuEry2OrNXqEX8/q1n33zqRF1gSyg5w07sIkRe"; // Hash iš MongoDB

bcrypt
  .compare(password, hashedPassword)
  .then((isMatch) => {
    console.log("Password match:", isMatch);
  })
  .catch((err) => {
    console.error("Error comparing passwords:", err);
  });

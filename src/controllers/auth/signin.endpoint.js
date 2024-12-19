import { readUser } from "../../database/user.table.js";

export const signinEndpoint = (req, res) => {
  const { userName, password } = req.body;

  const user = readUser(userName);

  if (user === undefined) {
    res.status(401).json({ error: "UserName or Password is incorrect" });
    return;
  }

  if (password !== user.password) {
    res.status(401).json({ error: "UserName or Password is incorrect" });
    return;
  }

  return res.json({
    userName,
  });
};

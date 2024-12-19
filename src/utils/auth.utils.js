import jwt from "jsonwebtoken";

const key = process.env.SECRET;

export const generateToken = (res, user) => {
  const payload = {
    user,
  };

  const token = jwt.sign(payload, key, { expiresIn: "3d" });

  res.cookie("token", token, {
    secure: true,
    httpOnly: true,
    maxAge: 3 * 24 * 3600 * 1000,
  });
};

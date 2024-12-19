const users = [
  {
    userName: "nazanin",
    password: "1234",
  },
];

export const createUser = (user) => {
  users.push(user);
};

export const readUser = (userName) => {
  return users.find((user) => user.userName === userName);
};

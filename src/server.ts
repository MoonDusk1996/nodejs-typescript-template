interface iUser {
  name: string;
  age: number;
}

function getUser(user: iUser) {
  console.log(user);
}

getUser({ name: "Dusk", age: 25 });

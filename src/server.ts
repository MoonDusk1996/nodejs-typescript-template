interface iUser {
  name: string;
  age: number;
}

function getUser(user: iUser) {
  console.log(user);
}

getUser({ name: "Pedro", age: 25 });

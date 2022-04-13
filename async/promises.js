const hello = (name) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Hi " + name);
      resolve(name);
    }, 2000);
  });
};

const bye = (name) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Bye ", name);
      resolve();
    }, 1000);
  });
};

const talk = (name) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("bla bla bla bla");

      reject("There is an error");
    }, 1000);
  });
};

//--------------

hello("carlos")
  .then(talk)
  .then(bye)
  .then(() => {
    console.log("terminando el proceso");
  })
  .catch((error) => {
    console.error(error);
  });

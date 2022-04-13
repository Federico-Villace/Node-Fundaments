const hello = (name, callback) => {
  setTimeout(() => {
    console.log("Hi " + name);
    callback(name);
  }, 2000);
};

const bye = (name, callback) => {
  setTimeout(() => {
    console.log("Bye ", name);
    callback();
  }, 1000);
};

const talk = (callback) => {
  setTimeout(() => {
    console.log("bla bla bla bla");
    callback();
  }, 1000);
};

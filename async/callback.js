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

console.log("Initiating process.");
hello("carlos", (name) => {
  bye(name, () => {
    return console.log("ending process");
  });
});

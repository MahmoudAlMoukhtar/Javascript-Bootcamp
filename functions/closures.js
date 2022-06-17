const createCounter = () => {
  let count = 0;

  return {
    increment() {
      count++;
    },

    decrement() {
      count--;
    },

    getCount() {
      return count;
    },
  };
};

const counter = createCounter();

counter.increment();
counter.decrement();
counter.decrement();
console.log(counter.getCount());
//Add
const createAdder = (a) => {
  return (b) => {
    return a + b;
  };
};

const Add10 = createAdder(10);
console.log(Add10(10));
const Add100 = createAdder(100);
console.log(Add100(-1));

/* Tipper */

const Tipper = (Tip) => {
  return (amount) => {
    return amount * Tip;
  };
};

const Tip10 = Tipper(0.2);
console.log(Tip10(100));
/* const myFunction = () => {
  const message = "test test";
  const printMessage = () => {
    console.log(message);
  };
  return printMessage;
};
const myPrintMessage = myFunction();
myPrintMessage();
 */

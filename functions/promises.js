const getDataCallBack = (num, callBack) => {
  setTimeout(() => {
    if (typeof num === "number") {
      callBack(undefined, num * 2);
    } else {
      callBack("test callBack error data", undefined);
    }
  }, 2000);
};

getDataCallBack(2, (error, data) => {
  if (error) {
    console.log(error);
  } else {
    // console.log(data);
    getDataCallBack(data, (error, data) => {
      if (error) {
        console.log(error);
      } else {
        console.log(data);
      }
    });
  }
});

const getPromisesData = (num) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      typeof num === "number"
        ? resolve(num * 2)
        : reject("error number must be provided");
      /* reject("test promises error data"); */
    }, 2100);
  });

getPromisesData(4)
  .then((data) => {
    return getPromisesData(data);
  })
  .then((data) => {
    console.log(data);
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

/* getPromisesData(2).then(
  (data) => {
    getPromisesData(data).then(
      (data) => {
        console.log(`tgi is data promises ${data}`);
      },
      (error) => {
        console.log(error);
      }
    );
  },
  (err) => {
    console.log(err);
  }
); */

/* const myPromises = getPromisesData("test");

myPromises.then(
  (data) => {
    console.log(data);
  },
  (err) => {
    console.log(err);
  }
);
 */

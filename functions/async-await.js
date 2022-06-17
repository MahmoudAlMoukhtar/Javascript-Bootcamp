const getPromisesData = (num) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      typeof num === "number"
        ? resolve(num * 2)
        : reject("error number must be provided");
    }, 2100);
  });

const processData = async () => {
  let data = await getPromisesData(2);
  data = await getPromisesData(data);
  data = await getPromisesData(data);
  return data;
};

processData()
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

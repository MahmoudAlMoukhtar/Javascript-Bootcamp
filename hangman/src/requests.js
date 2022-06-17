const getPuzzle = async (wordCount) => {
  const response = await fetch(
    `https://puzzle.mead.io/puzzle?wordCount=${wordCount}`
  );
  if (response.status === 200) {
    const data = await response.json();
    return data.puzzle;
  } else {
    throw new Error("tesr error await");
  }
};

const getCurruntCountry = async () => {
  const location = await getLocation();
  const country = await getCountryDetails(location.country);
  return country;
};

const getCountryDetails = async (countryCode) => {
  const response = await fetch("https://restcountries.com/v2/all");
  if (response.status === 200) {
    const data = await response.json();
    return data.find((country) => {
      return countryCode === country.alpha2Code;
    });
  } else {
    throw new Error("this is error in response");
  }
};

const getLocation = async () => {
  const response = await fetch("http://ipinfo.io/json?token=e46e137cc2a4fe");
  if (response.status === 200) {
    return response.json();
  } else {
    throw new Error(" error in response");
  }
};
export default getPuzzle;

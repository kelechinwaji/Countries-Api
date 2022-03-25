import axios from "axios";

async function getAllCountries() {
  try {
    const response = await axios.get("https://restcountries.com/v2/all");
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
async function getCountriesByRegion() {
  try {
    const response = await axios.get("https://restcountries.com/v3.1/region/africa");
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
async function getCountriesByName() {
  try {
    const response = await axios.get("https://restcountries.com/v3.1/name/nigeria");
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export default { getCountriesByName, getAllCountries, getCountriesByRegion };

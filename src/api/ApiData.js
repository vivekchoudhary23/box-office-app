const BASE_URL = 'https://api.tvmaze.com';
const apiGet = async querystring => {
  const response = await fetch(`${BASE_URL}${querystring}`);
  const body = await response.json();
  return body;
};
export const searchForShow = query => apiGet(`/search/shows?q=${query}`);

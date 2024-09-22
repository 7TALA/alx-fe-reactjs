import axios from "axios";

async function fetchUserData(username, location, minRepos) {
  let query = "";

  if (username) {
    query += `user:${username}`;
  }
  if (location) {
    query += `location:${location}`;
  }
  if (minRepos) {
    query += `repos:>${minRepos}`;
  }

  try {
    const response = await axios.get(
      `https://api.github.com/search/users?q=${query}`
    );
    return response.data.items;
  } catch (error) {
    throw error;
  }
  //     axios
  //       // .get(`https://api.github.com/users/${username}`)
  //       .get(`https://api.github.com/search/users?q=${query}`)
  //       .then((response) => {
  //
  //         return response.data.items;
  //       })
  //       .catch((error) => {
  //
  //         throw error;
  //       })
  //   );
}

export default fetchUserData;
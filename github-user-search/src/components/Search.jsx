import { useState } from "react";
import fetchUserData from "../services/githubService";

function Search() {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     setLoading(true);
  //     setError(null);
  //     setData(null);

  //     fetchUserData(username, location, repos)
  //       .then((response) => {
  //         setData(response);
  //       })
  //       .catch(() => setError("Looks like we cant find the user."))
  //       .finally(() => setLoading(false));

  //     setUsername("");
  //     setLocation("");
  //     setRepos("");
  //   };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setData(null);

    try {
      const response = await fetchUserData(username, location, minRepos);
      setData(response);
    } catch (error) {
      setError("Looks like we can't find the user.");
    } finally {
      setLoading(false);
    }

    setUsername("");
    setLocation("");
    setMinRepos("");
  };

  return (
    <div className="bg-dustGray h-screen font-mono overflow-auto">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col mx-auto sm:max-w-md min-[350px]:max-w-xs bg-lightestGreen p-8 gap-2 rounded-md shadow-md mt-10"
      >
        <h1 className="font-extrabold text-darkestGreen text-center text-3xl mb-5">
          GitHub Username Search Engine
        </h1>
        <label htmlFor="username" className="ml-5 text-darkGreen">
          GitHub Username:
        </label>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Enter username..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="bg-dustGray text-darkestGreen rounded-md w-4/5 mx-auto p-2"
        />
        <label htmlFor="location" className="ml-5 text-darkGreen">
          Preferred Location:
        </label>
        <input
          type="text"
          name="location"
          id="location"
          placeholder="Enter location..."
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="bg-dustGray text-darkestGreen rounded-md w-4/5 mx-auto p-2"
        />
        <label htmlFor="repos" className="ml-5 text-darkGreen">
          # of Repositories:
        </label>
        <input
          type="number"
          name="repos"
          id="repos"
          placeholder="Enter a number..."
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="bg-dustGray text-darkestGreen rounded-md w-4/5 mx-auto p-2"
        />
        <button
          type="submit"
          className="text-dustGray bg-darkestGreen hover:bg-darkGreen transition duration-200 ease-in-out rounded-lg w-1/3 mx-auto h-10 font-semibold mt-5"
        >
          Search
        </button>
      </form>
      <div className="flex flex-col mx-auto max-w-md p-5 gap-5 rounded-md mt-10">
        {error && (
          <p className="text-red-800 font-bold text-xl text-center">{error}</p>
        )}
        {loading && (
          <p className="text-darkestGreen font-bold text-xl text-center">
            Loading...
          </p>
        )}
        {data && (
          <div>
            {data.map((user) => (
              <div key={user.id}>
                <div className="bg-darkestGreen w-28 h-28 mx-auto rounded-md flex flex-col justify-center items-center mb-4">
                  <img src={user.avatar_url} className="h-24 w-24" />
                </div>
                <h2 className="text-darkestGreen font-bold text-xl text-center mb-4">
                  {user.login}
                </h2>
                <h3 className="text-center text-darkestGreen font-bold text-lg">
                  Location:{" "}
                  <span className="text-midGreen font-normal">
                    {user.location ? user.location : "No relevant data"}
                  </span>
                </h3>
                <h3 className="text-center text-darkestGreen font-bold text-lg">
                  # of Public Repos:{" "}
                  <span className="text-midGreen font-normal">
                    {user.public_repos ? user.public_repos : "Not available"}
                  </span>
                </h3>
                <a href={user.html_url} target="_blank">
                  <button
                    className="text-darkestGreen border-darkestGreen border-2 border-dashed hover:text-dustGray hover:bg-darkestGreen 
              transition duration-150 ease-in-out
              rounded-lg w-1/3 min-[350px]:text-sm h-10 font-semibold translate-x-full my-5"
                  >
                    Visit Profile
                  </button>
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Search;
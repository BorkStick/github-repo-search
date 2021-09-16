import React from "react";
import axios from "axios";
import { GitHubRepository, GitHubSearchResultType } from "./Types/GitHub";
import SearchForm from "./Components/SearchForm";
import ListRepositories from "./Components/ListRepositories";

import "./App.css";

function App() {
  

  const [repositories, setRepositories] =
    React.useState<Array<GitHubRepository>>();

  async function search(query: string) {
    const result = await axios.get<GitHubSearchResultType>(
      `https://api.github.com/search/repositories?q=${query}`
    );
    setRepositories(result.data.items);
  }

  return (
    <div className="App">
      <SearchForm search={search} />
      <hr />
      <ListRepositories repositories={repositories} />
    </div>
  );
}

export default App;

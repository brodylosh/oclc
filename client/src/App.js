import { useState } from 'react';
import './App.css';

function App() {
  const [search, setSearch] = useState('');

  const [perPage, setPerPage] = useState(10);

  const [sort, setSort] = useState('asc');

  const [users, setUsers] = useState([]);

  const [errors, setErrors] = useState({});

  // const [currentPage, setCurrentPage] = useState(1);

  function getUsers(e) {
    e.preventDefault();
    // URL Params
    fetch(`/users?page=0&size=${perPage}`)
      .then((resp) => resp.json())
      .then((data) => {
        setUsers(data.content);
      })
      .catch((errors) => setErrors(errors));
    setSearch('');
    setPerPage(10);
    setSort('asc');
  }

  // const indexOfLastUser = currentPage * perPage;
  // const indexOfFirstUser = indexOfLastUser - perPage;
  // const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  let renderUsers = users.map((user) => {
    return (
      <div key={user.id} className="card-container">
        <p>{user.name}</p>
        <p>{user.phone}</p>
      </div>
    );
  });

  return (
    <div className="App">
      <header className="App-header">
        <h1>OCLC Assignment</h1>
        <form id="search" onSubmit={getUsers}>
          <div className="search">
            <label>Search: </label>
            <input
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            ></input>
          </div>
          <div className="results-per-page">
            <label>Results per page: </label>
            <input
              placeholder="1-50"
              value={perPage}
              onChange={(e) => setPerPage(e.target.value)}
              required
            ></input>
          </div>
          <label>Order by: </label>
          <select value={sort} onChange={(e) => setSort(e.target.value)}>
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
          <div className="search-button">
            <button type="submit">Search</button>
          </div>
        </form>
        <div className="content-container">{renderUsers}</div>
      </header>
    </div>
  );
}

export default App;

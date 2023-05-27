import React, { useState, useEffect, Fragment } from "react";

const Busqueda = () => {
  
  //cofigurar hooks, seteo useState
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  const url = "https://spapi.dev/api/characters";
  const showData = async () => {
      const respuesta = await fetch(url);
      const data = await respuesta.json();
      console.log("🚀 ~ file: miApi.jsx:13 ~ showData ~ data:", data)
      setUsers(data.data);
  };

  //Busqueda
  const searcher = (e) => {
    setSearch(e.target.value);
  };
  //filtrado
  const resultado = !search
    ? users
    : users.filter((dato) =>
        dato.name.toLowerCase().includes(search.toLocaleLowerCase())
      );
  useEffect(() => {
    showData();
  }, []);

  //rederizado de la vista
  return (
    <Fragment>
      <div>
        <input
          value={search}
          onChange={searcher}
          type="text"
          placeholder="Search"
          className="form-control"
        />
         <div className="table-responsive-sm">
          <table className="table table-warning table-striped table-hover table-bordered mt-3">
            <thead>
              <tr>
                <th>Id</th>
                <th>Nombre</th>
              </tr>
            </thead>
            <tbody>
              {resultado.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Fragment>
  );
};

export default Busqueda;
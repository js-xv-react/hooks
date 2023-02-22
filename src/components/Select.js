import React, { useState, useEffect } from "react";

const Select = () => {
  const [state, setState] = useState("posts");
  const [items, setItems] = useState([]);

  const handleChange = (event) => {
    setState(event.target.value);
  };

  //   useEffect kao drugi parametar koristi da razume kada treba da se okine
  // ako prosledimo prazan niz, on se okida iskljucivo kada se komponenta
  // PRVI put renderuje

  //   useEffect(() => {
  //     console.log("komponenta se renderovala");
  //     fetch(`https://jsonplaceholder.typicode.com/${state}`)
  //       .then((response) => response.json())
  //       .then((json) => setItems(json))
  //       .catch((err) => console.log(err));
  //   }, []);

  useEffect(() => {
    console.log(
      "select value se update-ovao  --- doslo je do update-ovanja komponente"
    );
    fetch(`https://jsonplaceholder.typicode.com/${state}`)
      .then((response) => response.json())
      .then((json) => setItems(json))
      .catch((err) => console.log(err));
  }, [state]);

  return (
    <div>
      <form>
        <select value={state} onChange={handleChange}>
          <option value="posts">Posts</option>
          <option value="comments">Comments</option>
          <option value="albums">Albums</option>
        </select>
      </form>
      <ul>
        {items.map((item, index) => {
          return <li key={index}>{JSON.stringify(item)}</li>;
        })}
      </ul>
    </div>
  );
};

export default Select;

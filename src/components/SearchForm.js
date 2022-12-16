// import { useState } from "react";

export default function SearchForm({onSubmit}) {
  // const [searchTerm, setSearchTerm] = useState("")

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target)
    const data = Object.fromEntries(formData)

    onSubmit(data)
    // onSubmit({searchTerm})
  }

  // ternary operator = <bedingung> ? <if true wert> : <else wert>
  // optional chaining = <potentiell null oder undefined object>?.<property key>
  // nullish coalescence = <null oder undefined wert> ?? <stattdessen dieser default wert>
  // short circuit OR = <wert ist falsy> || <stattdessen dieser default wert>
  // short circuit AND = <wert ist truthy> && <nur dann wird der wert hier angeschaut>
  //                     <wert ist truthy> ? <nur dann wird der wert hier angeschaut> : undefined
  
  return (
    <>
      {/* form.addEventListener("submit", handleSubmit) */}
      <form onSubmit={handleSubmit}>
        <label htmlFor="searchTerm">Search term:</label>
        <input
          // onChange={(event) => setSearchTerm(event.target.value)}
          // value={searchTerm}
          name="searchTerm"
          id="searchTerm"
        />
        <button>
          <span role="img" aria-label="search icon">
            🔍
          </span>{" "}
          Search
        </button>
      </form>
      {/* <h2>
        {searchTerm
          ? `You searched for "${searchTerm}"`
          : "Please enter a search term"}
      </h2> */}
    </>
  );
}

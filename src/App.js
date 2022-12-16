import { useState } from "react";
import SearchForm from "./components/SearchForm";
import SearchResults from "./components/SearchResults";
import "./styles.css";

export default function App() {
  const [formData, setFormData] = useState()

  console.log(formData)

  return (
    <main>
      <h1>Search</h1>
      <SearchForm onSubmit={setFormData} />
      <SearchResults searchTerm={formData?.searchTerm} />
    </main>
  );
}

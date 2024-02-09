import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";
import SearchImages from "./api";
import { useState } from 'react';

function App() {
    const [images, setImages] = useState([]);
  const handleSubmit = async (term) => {
    const result = await SearchImages(term);
    setImages(result);
  };

  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
      <ImageList images={images}/>
    </>
  );
}

export default App;

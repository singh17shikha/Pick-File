import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import PickFile from './PickFile';

function App() {
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef();

  useEffect(() => {
    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = () => {
        const image = reader.result;
        document.getElementById('image-preview').setAttribute('src', image);
      };
      reader.readAsDataURL(selectedFile);
    }
  }, [selectedFile]);

  const handleFileInputChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="App">
      <h1>Image Preview</h1>
      <div className="image-container">
        <img id="image-preview" src={selectedFile ? '' : 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.bing.com%2Fnew&psig=AOvVaw3B8aBs3T6KkiICAmQ0lb5G&ust=1683039008259000&source=images&cd=vfe&ved=0CA4QjRxqFwoTCMCm7oWv1P4CFQAAAAAdAAAAABAD'} alt="Preview" />
      </div>
      <button onClick={handleButtonClick}>Change Image</button>
      <PickFile ref={fileInputRef} onChange={handleFileInputChange} />
    </div>
  );
}

export default App;

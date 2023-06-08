import React, { useState } from "react";
import FilerobotImageEditor, {
  TABS,
  TOOLS
} from "react-filerobot-image-editor";
import Editor from "./Editor";

function App() {
  const [isImgEditorShown, setIsImgEditorShown] = useState(false);
  const [imgSrcToEdit, setImgSrcToEdit] = useState(
    "https://scaleflex.airstore.io/demo/stephen-walker-unsplash.jpg"
  );
  const [imgSrc, setImgSrc] = useState(
    "https://scaleflex.airstore.io/demo/stephen-walker-unsplash.jpg"
  );

  const openImgEditor = () => {
    setIsImgEditorShown(true);
  };

  const closeImgEditor = () => {
    setIsImgEditorShown(false);
  };

  const handleChange = (event) => {
    const url = URL.createObjectURL(event.target.files[0]);
    setImgSrc(url);
    setImgSrcToEdit(url);
  };

  return (
    <div style={{ display: "flex" }}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <input type="file" onChange={handleChange} />
        <div style={{ display: "flex", width: "320px" }}>
          <img
            style={{ flex: "auto", width: "100%" }}
            src={imgSrc}
            alt="esto es una visualizacion previa"
          />
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <button onClick={openImgEditor}>Open Filerobot image editor</button>
        {isImgEditorShown && (
          <Editor
            imgSrc={imgSrcToEdit}
            onSave={(data) => {
              setImgSrc(data.imageBase64);
            }}
          />
        )}
      </div>
    </div>
  );
}
export default App;

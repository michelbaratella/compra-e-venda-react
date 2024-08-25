import { useEffect, useState } from "react";
import "./CampoDeImagem.css";

const CampoDeImagem = () => {
  const [selectedFiles, setSelectedFiles] = useState();
  const [preview, setPreview] = useState([]);

  // create a preview as a side effect, whenever selected file is changed
  useEffect(() => {
    if (!selectedFiles) {
      setPreview([]);
      return;
    }

    const updatedPreview = [];
    for (let i = 0; i < selectedFiles.length; i++) {
      const file = selectedFiles[i];
      if (file instanceof File) {
        updatedPreview.push(URL.createObjectURL(file));
      }
    }
    setPreview(updatedPreview);
    // free memory when ever this component is unmounted
    return () => preview.map((objectUrl) => URL.revokeObjectURL(objectUrl));
  }, [selectedFiles]);

  const onSelectFiles = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFiles(undefined);
      return;
    }
    setSelectedFiles(e.target.files);
  };

  const handleRemove = (removedBlob) => {
    const updatedPreview = preview.filter((blob) => blob !== removedBlob);
    setPreview(updatedPreview);
    if (preview.length === 0) setSelectedFiles(null);
  };

  return (
    <div className="container">
      <label className="container__label">
      Escolher imagens...<br></br><span className="container__label--max">(máx 6)</span>
        <input
          name="input-img"
          type="file"
          className="container__input"
          onChange={onSelectFiles}
          multiple
        />
      </label>

      <span className="container__preview">
        {selectedFiles && preview.length > 0
          ? preview.map((blob) => (
              <span className="container__preview__icon" key={blob}>
                <img src={blob} className="container__preview__img" />
                <i
                  className="fa-solid fa-circle-xmark"
                  onClick={() => handleRemove(blob)}
                ></i>
              </span>
            ))
          : null}
      </span>
    </div>
  );
};

export default CampoDeImagem;

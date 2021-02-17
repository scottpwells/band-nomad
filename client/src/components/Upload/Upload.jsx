import React, { useState } from "react";

const Upload = () => {
    const [fileInputState, setFileInputState] = useState('');
    const [previewSource, setPreviewSource] = useState('');
    const [selectedFile, setSelectedFile] = useState();
    const [successMsg, setSuccessMsg] = useState('');
    const [errMsg, setErrMsg] = useState('');

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    previewFile(file);
    setSelectedFile(file);
    setFileInputState(e.target.value);
  };

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    };
  };

  const handleSubmitFile = (e) => {
    e.preventDefault();
    if (!selectedFile) return;
    const reader = new FileReader();
    reader.readAsDataURL(selectedFile);
    reader.onloadend = () => {
        uploadImage(reader.result);
    };
    reader.onerror = () => {
        console.error('AHHHHHHHH!!');
        setErrMsg('something went wrong!');
    };
};
const uploadImage = async (base64EncodedImage) => {
    try {
        await fetch('/api/upload', {
            method: 'POST',
            body: JSON.stringify({ data: base64EncodedImage }),
            headers: { 'Content-Type': 'application/json' },
        });
        setFileInputState('');
        setPreviewSource('');
        setSuccessMsg('Image uploaded successfully');
    } catch (err) {
        console.error(err);
        setErrMsg('Something went wrong!');
    }
};

  return (
    <div className="container">
      <div className="row">
        <div className="input-field col s12">
        {/* <label htmlFor="Image URL">Image URL</label> */}
        <h6>Upload an Image</h6>
            <form onSubmit={handleSubmitFile}>
            <input
            id="imageURL"
            type="file"
            name="imageURL"
            value={fileInputState}
            onChange={handleFileInputChange}
          />
          <button className="btn" type="submit">
                    upload
                </button>
                {previewSource && (
            <img src={previewSource} alt="chosen" style={{ height: "100px" }} />
          )}
        
            </form>
         
        </div>
      </div>
    </div>
  );
};

export default Upload;

import React, { useState } from "react";

const ProfilePictureUploader = () => {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      {image ? (
        <img
          src={image}
          alt="Profile"
          style={{
            width: "100px",
            height: "100px",
            borderRadius: "50%",
          }}
        />
      ) : (
        <label htmlFor="upload-button" style={{ cursor: "pointer" }}>
          <div
            style={{
              width: "100px",
              height: "100px",
              borderRadius: "50%",
              backgroundColor: "#ccc",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            📷
          </div>
        </label>
      )}
      <input
        id="upload-button"
        type="file"
        onChange={handleImageChange}
        style={{ display: "none" }}
      />
    </div>
  );
};

export default ProfilePictureUploader;

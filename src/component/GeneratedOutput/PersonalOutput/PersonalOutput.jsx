import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import "../../../style/GeneratedOutput/Component style/personal-output.css"
const Profile = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };

  const handleImageClick = () => {
    // Trigger the hidden file input when the image is clicked
    document.getElementById('profile-picture-input').click();
  };

  return (
    <div className="profile-picture-container image" onClick={handleImageClick}>
      {selectedImage ? (
        <img src={selectedImage} alt="Profile" id="picture" className="profile-picture" />
      ) : (
        <div className="placeholder">
          <FontAwesomeIcon icon={faPlus} size="xl" />
        </div>
      )}

      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        style={{ display: 'none' }}
        id="profile-picture-input"
      />
    </div>
  );
};







export default function PersonalOutput({ name, mail, phone, address }) {
  const [selectedImage, setSelectedImage] = useState(null);

  // Handle image change, similar to the previous code
  const handleImageChange = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  return (
    <div className="personal-info-container">
      <div className="personal-info-cv" >
        <h1>{name}</h1>
        <div className="contact-info-container-cv">
          <span className="contact-cv">{mail}</span>
          <span className="contact-cv grid-right">{phone}</span>
          <span className="contact-cv address">{address}</span>
        </div>
      </div>     
      {/* Render the Profile component here */}
      <Profile
        selectedImage={selectedImage}
        onImageChange={handleImageChange}
      />

      
    </div>
  );
}

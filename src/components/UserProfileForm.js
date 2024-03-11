import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Css/UserProfileForm.css";

const UserProfileForm = () => {
  const [Interest, setInterest] = useState("");
  const [Favourite, setFavourite] = useState("");
  const [Bio, setBio] = useState("");
  const [Language, setLanguage] = useState("");
  const [Living, setLiving] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  const Navigate = useNavigate();
  const handleSave = () => {
    Navigate("/");
  };

  return (
    <form className="form-control" onSubmit={handleFormSubmit}>
      <input
        type="Interest"
        name="Interest"
        id="Interest"
        placeholder="Interest"
        value={Interest}
        onChange={(e) => setInterest(e.target.value)}
      />
      <input
        type="Favourite Travel Destination"
        name="Favourite Travel Destination"
        id="Favourite Travel Destination"
        placeholder="Favourite Travel Destination"
        value={Favourite}
        onChange={(e) => setFavourite(e.target.value)}
        required
      />
      <input
        type="Bio"
        name="Bio"
        id="Bio"
        placeholder="Bio"
        value={Bio}
        onChange={(e) => setBio(e.target.value)}
      />
      <input
        type="Language"
        name="Language"
        id="Language"
        placeholder="Language"
        value={Language}
        onChange={(e) => setLanguage(e.target.value)}
        required
      />
      <input
        type="Living In"
        name="Living In"
        id="Living In"
        placeholder="Living In"
        value={Living}
        onChange={(e) => setLiving(e.target.value)}
      />

      <button type="submit">Create Your Account</button>
    </form>
  );
};

export default UserProfileForm;

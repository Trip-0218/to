import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./Header";
import Sidebar from "./SideBar";
import "../Css/Profile.css";
import { getToken } from "../authUtils";
import { Link } from "react-router-dom";
import Goa from "../assests/Goa.jpg";
import Profile from "../assests/Prifile.webp";
import BackgroundImage from "../assests/default.png";

const UserProfileDisplay = () => {
  const [profile, setProfile] = useState({});
  const [trips, setTrips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [authToken, setAuthToken] = useState("");
  // const [backgroundImage, setBackgroundImage] = useState("YOUR_BACKGROUND_IMAGE_URL");

  useEffect(() => {
    const fetchProfile = async () => {
      const token = getToken();

      try {
        const response = await axios.get("http://localhost:8080/api/auth/getuser", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const userData = response.data;
        const { _id, name, email, date } = userData;

        setProfile({ _id, name, email, date });
        setLoading(false);
      } catch (error) {
        console.error("Error fetching profile:", error);
        setError("Error fetching profile");
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);


  const handleBackgroundImageUpload = async (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append("backgroundImage", file);

    try {
      const response = await axios.post("http://localhost:8080/api/auth/updatebackground", formData, {
        headers: {
          Authorization: `Bearer ${authToken}`,
          "Content-Type": "multipart/form-data",
        },
      });

      const user = response.data;
      // setBackgroundImage(user.backgroundUrl);
    } catch (error) {
      console.error("Error uploading background image:", error);
    }
  };

  return (
    <>
      <div>
        <Header setAuthToken={setAuthToken} />
        <Sidebar />
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          <div className="content-profile-page">
            <div className="profile-user-page card">
              <div className="img-user-profile">
                <img className="profile-bgHome" src={BackgroundImage} alt="" />
                <input type="file" onChange={handleBackgroundImageUpload} />
                <img className="avatar" src={Profile} alt="jofpin" />
              </div>
              <button>Follow</button>
              <div className="user-profile-data">
                <h1>{profile.name}</h1>
                <p>{profile.email}</p>
              </div>
              <div className="description-profile">
                Registered on {new Date(profile.date).toLocaleDateString()}
              </div>
              <ul className="data-user">
                <li>
                <span>User ID : </span><strong>{profile._id}</strong>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default UserProfileDisplay;
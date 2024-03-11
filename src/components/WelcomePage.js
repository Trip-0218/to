// WelcomePage.js
import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../Css/WelcomePage.css";
import axios from "axios";
import { getToken } from "../authUtils";

const WelcomePage = () => {
  //   const history = useHistory();
  const navigate = useNavigate();
  // const location = useLocation();
  const [profile, setProfile] = useState({});
  const [selectedFile, setSelectedFile] = useState(null);
  const [authToken, setAuthToken] = useState("");


  // const name = new URLSearchParams(location.search).get("name");
  // console.log("Name:", name);

  const [countdown, setCountdown] = useState(3);

  // Redirect to home page after 3 seconds
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
        } catch (error) {
          console.error("Error fetching profile:", error);
        }
    }


    const timer = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    const redirectTimer = setTimeout(() => {
      navigate("/Showcase");
    }, 3000);

    return () => {
      clearInterval(timer);
      clearTimeout(redirectTimer);
    }; // Cleanup to avoid memory leaks
  }, [navigate]);

  return (
    <section id="welcome-section">
      <div>
        <h1>Welcome {profile.name}</h1>
        <p>...have a look around</p>
      </div>
    </section>
  );
};

export default WelcomePage;

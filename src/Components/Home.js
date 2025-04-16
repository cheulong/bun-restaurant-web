import React, { useEffect, useState } from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import Bun from "../Assets/bun.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  const [title, setTitle] = useState("");
  const [subtitle, setSubTitle] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/title")
      .then((response) => response.json())
      .then((data) => setTitle(data.msg));
    fetch("http://localhost:3001/subtitle")
      .then((response) => response.json())
      .then((data) => setSubTitle(data.msg));
  }, []);

  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">{title || "Title"}</h1>
          <p className="primary-text">{subtitle || "Subtitle"}</p>
          <button className="secondary-button">
            Order Now <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img src={Bun} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;

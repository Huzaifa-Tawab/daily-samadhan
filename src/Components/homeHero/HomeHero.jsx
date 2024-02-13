import request from "graphql-request";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import heroImg from "../../assets/PhoneMockUp.png";
import "./homehero.css";
function HomeHero() {
  const [Portals, setPortals] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetchPortals();
  }, []);

  const fetchPortals = async () => {
    const { portals } = await request(
      "https://ap-south-1.cdn.hygraph.com/content/clsiwd9vt329x01up6tkl7xj0/master",
      `
    {
      portals {
          slug
          title
        }
    }
  `
    );

    console.log(portals);
    let tempPortal = [];
    portals.forEach((portal) => {
      tempPortal.push({ label: portal.title, value: portal.slug });
    });
    setPortals(tempPortal);
  };
  return (
    <div className="Home-hero">
      <div className="hero-search">
        .herohead-conten
        <Select
          options={Portals}
          onChange={(opt) => {
            navigate(`/portal/${opt.value}`);
          }}
        />
      </div>

      <img className="hero-img" src={heroImg} alt="" />
    </div>
  );
}

export default HomeHero;

import React from "react";
import "./CardIntro.css";
import munnabhai from "../Assets/munnabhai.jpg";
import kaleen from "../Assets/kaleen.jpg";
import mourya from "../Assets/mourya.jpg";

const cardinfo = [
  {
    actorimg: kaleen,
    desc: "The iron-fisted Akhandanand Tripathi is a millionaire carpet exporter and the mafia don of Mirzapur",
    glasspic: "https://pngimg.com/uploads/sunglasses/sunglasses_PNG95.png",

    glassinfo: "Golden Green Full Rim",
  },
  {
    actorimg: munnabhai,
    desc: "Akhandanand's son,Munna Tripathi is power hungrey and will not stop at anything to inherit his father's legacy",
    glasspic: "https://pngimg.com/uploads/sunglasses/sunglasses_PNG95.png",

    glassinfo: "Black Grey Full Rim",
  },
  {
    actorimg: mourya,
    desc: "An honest cop,Maurya Saab who goes an extra mile to eliminate the bad and the over-powering crime in the city",
    glasspic: "https://pngimg.com/uploads/sunglasses/sunglasses_PNG95.png",

    glassinfo: "Gloden Brown Full Rim",
  },
];

function CardIntro() {
  return (
    <div className="cardIntro">
      <div className="cardIntro_header">
        <p>
          <h2 style={{ color: "#FF3500", textAlign: "center" }}>
            BOLD , DARING & STURDY
          </h2>{" "}
        </p>
        <p>
          <h3>These Pilots are Perfect for Grunge Look</h3>
        </p>
      </div>
      <div className="Cards__section">
        <div className="card__container">
          <div className="img__wrapper">
            <img src={cardinfo[0].actorimg} alt="actor" />
          </div>
          <p>
            The iron-fisted{" "}
            <span className="actor_name">Akhandanand Tripathi</span>
          </p>
          <p>is a millionaire carpet exporter and the</p>
          <p>mafia don of Mirzapur</p>
          <img
            src={cardinfo[0].glasspic}
            alt="glasspic"
            className="glaseepic"
          />
          <p>Vincent Chase</p>
          <p>{cardinfo[0].glassinfo}</p>
          <button> BUY NOW</button>
        </div>
        <div className="card__container">
          <div className="img__wrapper">
            <img src={cardinfo[1].actorimg} alt="actor" />
          </div>
          <p>
            Akhandanand's son,
            <span className="actor_name">Munna Tripathi </span>
          </p>
          <p>is power hungrey and will not stop at</p>
          <p>anything to inherit his father's legacy</p>
          <img
            src={cardinfo[0].glasspic}
            alt="glasspic"
            className="glaseepic"
          />
          <p>Vincent Chase</p>
          <p>{cardinfo[1].glassinfo}</p>
          <button> BUY NOW</button>
        </div>
        <div className="card__container">
          <div className="img__wrapper">
            <img src={cardinfo[2].actorimg} alt="actor" />
          </div>
          <p>
            An honest cop,
            <span className="actor_name">Maurya Saab </span>
            who goes
          </p>
          <p>an extra mile to eliminate the bad and</p>
          <p>the over-powering crime in the city</p>
          <img
            src={cardinfo[0].glasspic}
            alt="glasspic"
            className="glaseepic"
          />
          <p>Vincent Chase</p>
          <p>{cardinfo[2].glassinfo}</p>
          <button> BUY NOW</button>
        </div>
      </div>
    </div>
  );
}

export default CardIntro;

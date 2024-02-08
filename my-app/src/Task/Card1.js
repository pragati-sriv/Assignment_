import React from "react";
import Card2 from "./Card2";
import './Card1.css'

function Card1() {
  return (
    <div className="Container">
    <div className="content-wrapper">
           <img src="https://www.boomlive.in/h-upload/2023/09/05/1600x960_1014361-gautam-gambhir-01.jpg" alt="Featured" className="Card-image" />
    <div className="cards-container">

      <div className="cards-row">
        <Card2
          title="Decode"
          heading="Cloned FingerPrints Scam : The  
     Story of Adhaar Enabled Payment System"
          body="The AePS was launched in 2014 by the indian government to empower..."
          footer="-By Umesh Kumar Ray | 2 Days ago"
        />

        <Card2
          title="Sports"
          heading="Asia Cup 2023:Fake Anti-BCCI Quotes Faslely Atrributed To Sunil..."
          body="BOOM found the quote is fake and small Govaskar Has made no such..."
          footer="-By Anmol Alphonose | 2 Dyas Ago"
        />
      </div>

      <div className="cards-row">
        <Card2
          title="Fast Check"
          heading="AI-Generted Image Of Amir Khan Viral As Lala Amarnath Biopic Look"
          body="Boom found the image has been generted using Artifical"
          footer="By Swasti Chatterjee| 8 Days Ago"
        />
        <Card2
          title="Fast Check"
          heading="Image Of Train Decorted With Flowers For Onam is Fake"
          body="Boom found the image has been made using generative-AI and is not"
          footer="=By Hazel Gandhi |8 days Ago"
        />
      </div>
    </div>
    </div>
    </div>
  );
}

export default Card1;

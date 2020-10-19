import React, { useState, useEffect } from "react";

const Card = (props) => {
  return (
    <>

      <div className="mx-auto">
        <div className="card">
          <img src={`${process.env.PUBLIC_URL}/assets/player-images/${props.id}.jpg`}
            alt={props.id} className=" card-img-top" />
          <div className="card-body">
            <h3>{props.PFName}</h3>
            <p className="highlight">{props.SkillDesc}</p>
            <p>${props.Value}</p>
            <p>Upcoming matches:</p>
            <p className="highlight">{props.MDate}</p>
            {props.MDate !== '' && <p className="highlight">{props.CCode} vs {props.VsCCode}</p>}
            {props.CCode === '' && <p className="highlight">No upcoming match <br/><p className="hightlight">-</p> </p>}

          </div>
        </div>
      </div>

    </>
  );
};


export default Card;
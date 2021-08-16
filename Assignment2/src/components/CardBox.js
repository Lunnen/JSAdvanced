import React, { useState, useEffect } from "react";

const CardBox = (CardBox) => {

  const [modal, setModal] = useState(false);

  const [currentActors, setCurrentActors] = useState([]);

  const modalOnOff = () => setModal(!modal);

  if(modal ? document.body.classList.add('active-modal') : document.body.classList.remove('active-modal') );

  useEffect(() => {
   
    async function fetchDataThis(specificUrl) {
      let res = await fetch(`${specificUrl}`);
      let data = await res.json();

      if (data) {
        currentActors.push(data);
        currentActors.sort((a, b) => a.name.localeCompare(b.name));
      }
    }
    {CardBox.characters.map( (item) => fetchDataThis(item) )};

  }, []); // Loading the page, get info once

  return(
    <div>
    {!modal && (
    <div className="thumb-container" onClick={modalOnOff}>
 
        <h3>{CardBox.title}</h3>

        <h4>{CardBox.release_date}</h4>

    </div>
  )}
  {modal && (
    <div className="thumb-container overlay" onClick={modalOnOff}>

        <h1>{CardBox.title}</h1>
        <h3>{CardBox.release_date}</h3>

        <ol className="actorBox">
          
          {currentActors.map((item, index) =>
          <li key={index}>{item.name}</li>
          )}

        </ol>

    </div>
  )}

  </div>
  );
}

export default CardBox;

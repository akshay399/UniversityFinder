import React, { useState, useMemo } from "react";
// import TinderCard from '../react-tinder-card/index'
import TinderCard from "react-tinder-card";

const db = [
  {
    name: "Harvard ,US",
    url: "./img/harvard.jpg",
  },
  {
    name: "SBIST, TamilNadu",
    url: "./img/sat.png",
  },
  {
    name: "IIT, Madras",
    url: "./img/IITMAD.jpeg",
  },
  {
    name: "DY.Patel,Maharastra",
    url: "./img/dypatel.jpg",
  },
  {
    name: "DMCE, Maharastra",
    url: "./img/dmcecollege.jpg",
  },
  {
    name: "IIM, Ahmedabad",
    url: "./img/iim.jpg",
  },
  {
    name: "JIPMER, Puducherry",
    url: "./img/JIPMER.jpg",
  },
];

const alreadyRemoved = [];
let charactersState = db; // This fixes issues with updating characters state forcing it to use the current state and not the state that was active when the card was created.

function Advanced() {
  const [characters, setCharacters] = useState(db);
  const [lastDirection, setLastDirection] = useState();

  const childRefs = useMemo(
    () =>
      Array(db.length)
        .fill(0)
        .map((i) => React.createRef()),
    []
  );

  const swiped = (direction, nameToDelete) => {
    console.log("removing: " + nameToDelete);
    setLastDirection(direction);
    alreadyRemoved.push(nameToDelete);
  };

  const outOfFrame = (name) => {
    console.log(name + " left the screen!");
    charactersState = charactersState.filter(
      (character) => character.name !== name
    );
    setCharacters(charactersState);
  };

  const swipe = (dir) => {
    const cardsLeft = characters.filter(
      (person) => !alreadyRemoved.includes(person.name)
    );
    if (cardsLeft.length) {
      const toBeRemoved = cardsLeft[cardsLeft.length - 1].name; // Find the card object to be removed
      const index = db.map((person) => person.name).indexOf(toBeRemoved); // Find the index of which to make the reference to
      alreadyRemoved.push(toBeRemoved); // Make sure the next card gets removed next time if this card do not have time to exit the screen
      childRefs[index].current.swipe(dir); // Swipe the card!
    }
  };

  return (
    <div>
      <div className="swipePage">
        <div style={{ paddingRight: '900px', paddingTop: '20px' }}>
          <button className="buttonwala" style={{ float: 'left' }} className="heroButton">Go Back</button>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              {lastDirection ? (
                <h2 key={lastDirection} className="infoText">
                  You swiped {lastDirection}
                </h2>
              ) : (
                <h2 className="infoText">
                  Swipe a card or press a button to get started!
                </h2>
              )}
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="cardContainer">
                {characters.map((character, index) => (
                  <TinderCard
                    ref={childRefs[index]}
                    className="swipe"
                    key={character.name}
                    onSwipe={(dir) => swiped(dir, character.name)}
                    onCardLeftScreen={() => outOfFrame(character.name)}
                  >
                    <div
                      style={{ backgroundImage: "url(" + character.url + ")" }}
                      className="cardBeingSwiped"
                    >
                      <h4>{character.name}</h4>
                    </div>
                  </TinderCard>
                ))}
              </div>

              <div className="buttonForSwiping">
                <div className="btn-group">
                  <div className="buttonFor1">
                    <button onClick={() => swipe("left")}>SWIPE LEFT!</button>
                  </div>
                  <button onClick={() => swipe("right")}>SWIPE RIGHT!</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Advanced;

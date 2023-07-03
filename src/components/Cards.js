import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

const Cards = (props) => {
  return (
    <div className="cards">
      <h1>Great Deals</h1>
      <br /><hr /> <br />
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={require('../assets/thumbnails/bioshockinfinite.jpg')}
              title="Bioshock Infinite"
              original="$29.99"
              sale="$19.99"
              discount="-33%"
              path="/store/bioshock-infinite"
            />
            <CardItem
              src={require('../assets/thumbnails/sgwc2.jpg')}
              title="Sniper Ghost Warrior Contracts 2"
              original="$19.99"
              sale="$9.99"
              discount="-50%"
              path="/store/sgwc2"
            />
            <CardItem
              src={require('../assets/thumbnails/scrapmechanic.jpg')}
              title="Scrap Mechanic"
              original="$39.99"
              sale="$24.99"
              discount="-38%"
              path="/store/scrap-mechanic"
            />
            <CardItem
              src={require('../assets/thumbnails/aragami.jpg')}
              title="Aragami"
              original="$14.99"
              sale="$5.99"
              discount="-33%"
              path="/store/aragami"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={require('../assets/thumbnails/acblackflag2.jpg')}
              title="Assassin's Creed IV: Black Flag"
              original="$16.99"
              sale="$6.79"
              discount="-60%"
              path="/store/ac4"
            />
            <CardItem
              src={require('../assets/thumbnails/arkhamcity.jpg')}
              title="Batman: Arkham City"
              original="$39.99"
              sale="$19.99"
              discount="-50%"
              path="/store/batman-arkham-city"
            />
            <CardItem
              src={require('../assets/thumbnails/saboteur.jpg')}
              title="The Saboteur"
              original="$19.99"
              sale="$11.59"
              discount="-42%"
              path="/store/saboteur"
            />
            <CardItem
              src={require('../assets/thumbnails/journeyttsp.jpg')}
              title="Journey To The Savage Planet"
              original="$29.99"
              sale="$14.99"
              discount="-50%"
              path="/store/savage-planet"
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Cards;

import React, { Component } from 'react';
import './CharacterDetails.css';

class CharacterDetails extends Component {

  render() {
    const {
      character
    } = this.props;
    
    return(
      <div>
        <div className="CharacterDetails">
          <div className="CharacterDetails__image">
            <img
              alt="character"
              src={character.imageUrl}
              width={170}
              height={250}
            />
          </div>
          <div className="CharacterDetails__info">
            <div><b>Birth Year:</b> {character.birthYear}</div>
            <div><b>Height:</b> {character.height}</div>
            <div><b>Skin Color:</b> {character.skinColor}</div>
            <div><b>Hair Color:</b> {character.hairColor}</div>
            <div><b>Eye Color:</b> {character.eyeColor}</div>
            <div><b>Gender:</b> {character.gender}</div>
          </div>
        </div>
      </div>
    );
  }
};

export default CharacterDetails;

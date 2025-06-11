import stark from '../../resources/img/houses/stark.png';
import lannister from '../../resources/img/houses/lannister.png';
import baratheon from '../../resources/img/houses/baratheon.png';
import targaryen from '../../resources/img/houses/targaryen.png';
import tyrell from '../../resources/img/houses/tyrell.png';
import greyjoy from '../../resources/img/houses/greyjoy.png';
import martell from '../../resources/img/houses/martell.png';
import arryn from '../../resources/img/houses/arryn.png';
import tully from '../../resources/img/houses/tully.png';
import bolton from '../../resources/img/houses/bolton.png';
import frey from '../../resources/img/houses/frey.png';
import mormont from '../../resources/img/houses/mormont.png';
import royce from '../../resources/img/houses/royce.png';


const defaultImage = require('../../resources/img/characters/default.png');
const housesImagesByName = {
    'House Stark of Winterfell': stark,
    'House Lannister of Casterly Rock': lannister,
    'House Baratheon of Storm\'s End': baratheon,
    'House Targaryen of King\'s Landing': targaryen,
    'House Tyrell of Highgarden': tyrell,
    'House Greyjoy of Pyke': greyjoy,
    'House Nymeros Martell of Sunspear': martell,
    'House Arryn of the Eyrie': arryn,
    'House Tully of Riverrun': tully,
    'House Bolton of the Dreadfort': bolton,
    'House Frey of the Twins': frey,
    'House Mormont of Bear Island': mormont,
    'House Royce of Runestone': royce
}

export const getHouseImage = (house) => {
  if (!house) return defaultImage;


  return housesImagesByName[house.name] || defaultImage;
};
var IEstimateStrategy = require( "../Strategy/IEstimateStrategy");
function TypeAggregate(type){
  if(type==="Apartment"){
    basePrice=280;
  }else{
    basePrice=350;
  }
  return basePrice;
}

function RoomAggregate(rooms){
  basePrice=rooms*6;
  return basePrice;
}

function BathroomAggregate(bathrooms){
  basePrice=bathrooms*3;
  return basePrice;
}

function GarageAggregate(garageSpace){
  basePrice=garageSpace*3;
  return basePrice;
}

function GardenAggregate(gardenArea){
  basePrice=gardenArea*3;
  return basePrice;
}


class QueruQueruEstimate extends IEstimateStrategy {
  estimate(prop) {
    let basePrice=650;
    basePrice=basePrice+TypeAggregate(prop.type);
    basePrice=basePrice+RoomAggregate(prop.rooms);
    basePrice=basePrice+BathroomAggregate(prop.bathrooms);
    basePrice=basePrice+GarageAggregate(prop.garageSpace);
    basePrice=basePrice+GardenAggregate(prop.gardenArea);
    return basePrice;
  }
}
module.exports = QueruQueruEstimate

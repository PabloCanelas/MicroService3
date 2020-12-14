var IEstimateStrategy = require( "../Strategy/IEstimateStrategy");
function TypeAggregate(type){
  if(type==="Apartment"){
    basePrice=250;
  }else{
    basePrice=300;
  }
  return basePrice;
}

function RoomAggregate(rooms){
  basePrice=rooms*5;
  return basePrice;
}

function BathroomAggregate(bathrooms){
  basePrice=bathrooms*2;
  return basePrice;
}

function GarageAggregate(garageSpace){
  basePrice=garageSpace*2;
  return basePrice;
}

function GardenAggregate(gardenArea){
  basePrice=gardenArea*2;
  return basePrice;
}

class LaChimbaEstimate extends IEstimateStrategy {
  estimate(prop) {
    let basePrice=350;
    basePrice=basePrice+TypeAggregate(prop.type);
    basePrice=basePrice+RoomAggregate(prop.rooms);
    basePrice=basePrice+BathroomAggregate(prop.bathrooms);
    basePrice=basePrice+GarageAggregate(prop.garageSpace);
    basePrice=basePrice+GardenAggregate(prop.gardenArea);
    return basePrice;
  }
}
module.exports = LaChimbaEstimate

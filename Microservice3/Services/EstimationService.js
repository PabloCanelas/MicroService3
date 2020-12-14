var Property = require( "../Models/Property");
var QueruQueruEstimate = require("../Strategy/QueruQueruEstimate")
var LaChimbaEstimate = require("../Strategy/LaChimbaEstimate")
var AngosturaEstimate = require("../Strategy/AngosturaEstimate")

function ZoneAgregate(prop){
  if(prop.zone==="La Chimba"){
    let newEstimate = new LaChimbaEstimate();
    return newEstimate.estimate(prop);
  }
  if(prop.zone==="Queru Queru"){
    let newEstimate = new QueruQueruEstimate();
    return newEstimate.estimate(prop);
  }
  if(prop.zone==="Angostura"){
    let newEstimate = new AngosturaEstimate();
    return newEstimate.estimate(prop);
  }
}

// function TypeAggregate(type){
//   if(type==="Apartment"){
//     basePrice=250;
//   }else{
//     basePrice=300;
//   }
//   return basePrice;
// }

// function RoomAggregate(rooms){
//   basePrice=rooms*5;
//   return basePrice;
// }

// function BathroomAggregate(bathrooms){
//   basePrice=bathrooms*2;
//   return basePrice;
// }

// function GarageAggregate(garageSpace){
//   basePrice=garageSpace*2;
//   return basePrice;
// }

// function GardenAggregate(gardenArea){
//   basePrice=gardenArea*2;
//   return basePrice;
// }

function Estimation(basePrice, Area){
  return basePrice*Area;
}

const EstimationService={
  EstimateHousePrice:(req) => {
    let newProperty = new Property(req.area, req.zone, req.type, req.rooms, req.bathrooms, req.garageSpace, req.gardenArea);
    basePrice=ZoneAgregate(newProperty);
    return Estimation(basePrice, req.area);
  } 
}

module.exports = EstimationService;
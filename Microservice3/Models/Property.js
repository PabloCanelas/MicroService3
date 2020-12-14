class Property {
  constructor(area, zone, type, rooms, bathrooms, garageSpace, gardenArea) {
    this.area = area;
    this.zone = zone;
    this.type = type;
    this.bathrooms = bathrooms;
    this.garageSpace = garageSpace;
    this.gardenArea = gardenArea;
    this.rooms = rooms;
  }
}

module.exports = Property
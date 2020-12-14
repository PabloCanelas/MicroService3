class IEstimateStrategy {
  constructor() {
    if (this.estimate === undefined) {
      throw new TypeError("Must override method");
    }
  }
}
module.exports = IEstimateStrategy

class IEstimateStrategy {
  constructor() {
    if (this.estimate === undefined) {
      // or maybe test typeof this.method === "function"
      throw new TypeError("Must override method");
    }
  }
}
module.exports = IEstimateStrategy
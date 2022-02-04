function Flights() {
  function calculateNumberOfFlights(passengers, capacity) {
    let flights;

    if (passengers < 0 || !Number.isInteger(Number(passengers))) {
      throw new Error(
        "The number of passengers must be a positive integer value"
      );
    }

    if (capacity < 0 || !Number.isInteger(Number(capacity))) {
      throw new Error(
        "The capacity of the flight must be a positive integer value"
      );
    }

    if (passengerNo % flightCapacity == 0) {
      flights = passengerNo / flightCapacity;
    } else {
      flights = Math.floor(passengerNo / flightCapacity) + 1;
    }
    return flights;
  }

  function checkAircraftRevision(distanceLimit, distancesArray) {
    let totalDistance = 0;
    let distance;

    for (distance of distancesArray) {
      totalDistance += distance;
    }

    if (totalDistance > distanceLimit) {
      throw new Error(
        "Flight maximum allowed distance (" +
          distanceLimit +
          ") exceeded. No flight is allowed any longer, you need to make the revision immediately."
      );
    }

    if (totalDistance <= distanceLimit / 2) {
      return "The revision needs to be done within the next 3 months";
    } else if (totalDistance <= (3 * distanceLimit) / 4) {
      return "The revision needs to be done within the next 2 months";
    } else {
      return "The revision needs to be done within the next month";
    }
  }

  return { calculateNumberOfFlights };
}

module.exports = Flights();

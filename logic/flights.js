function Flights() {
    function calculateNumberOfFlights(passengerNo, flightCapacity) {
        return passengerNo / flightCapacity + 1;
    }
    return {calculateNumberOfFlights};
    
}

module.exports = Flights();


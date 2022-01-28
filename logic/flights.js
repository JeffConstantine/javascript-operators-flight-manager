function Flights() {
    function calculateNumberOfFlights(passengerNo, flightCapacity) {
        let flights;

        if (passengerNo % flightCapacity == 0) {
            flights = passengerNo/flightCapacity;
        } else {
            flights = Math.floor(passengers/capacity) + 1;
        }
        return {calculateNumberOfFlights}; 
    }          
    
}







module.exports = Flights();


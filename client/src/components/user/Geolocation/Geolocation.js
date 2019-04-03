// Here are the coords for the Moneypenny and Code Nation offices.
const moneypennyCoords = {
    latitude: 53.047,
    longitude: -3.019
}

const codenationCoords = {
    latitude: 53.192,
    longitude: -2.880
}

//This tests whether geolocation services are valid and returns an error if not.
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, function showError(error) {
        switch(error.code) {
          case error.PERMISSION_DENIED:
            console.log("User denied the request for geolocation.")
            break;
          case error.POSITION_UNAVAILABLE:
            console.log("Location information is unavailable.")
            break;
          case error.TIMEOUT:
            console.log("The request to get user location timed out.")
            break;
          case error.UNKNOWN_ERROR:
            console.log("An unknown error occurred.")
            break;
        }
      });
  } else {
    console.log("Geolocation is not supported by this browser.");
  }
}

//If geolocation works, this function runs:
const showPosition = (position) => {
  date = new Date();
  console.log(date)
  console.log("Latitude: " + position.coords.latitude + 
  " Longitude: " + position.coords.longitude); 

// Calculate the difference between user's location and Code Nation's.

  cnDiffLat = position.coords.latitude - codenationCoords.latitude;
  cnDiffLong =  position.coords.longitude - codenationCoords.longitude;

  // Logs to console if user is near enough to Code Nation.

  if (Math.abs(cnDiffLat) < 0.002 && Math.abs(cnDiffLong) < 0.002) {
      console.log(`You're at Code Nation!`)
  }

  // Calculate the difference between user's location and Moneypenny's.

  mpDiffLat = position.coords.latitude - moneypennyCoords.latitude;
  mpDiffLong =  position.coords.longitude - moneypennyCoords.longitude;

  // Logs to console if user is near enough to Moneypenny.

  if (Math.abs(mpDiffLat) < 0.002 && Math.abs(mpDiffLong) < 0.002) {
      console.log(`You're at Moneypenny!`)
  }
}

// The geolocation functions run every second.
setInterval(getLocation,1000)
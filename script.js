let notRunningCount1 = 0; // Initialize count for fetchAndUpdateData()
let notRunningCount2 = 0; 
let RunningCount1 = 0; // Initialize count for fetchAndUpdateData()
let RunningCount2 = 0; 
    function fetchAndUpdateData() {
         fetch('http://104.237.9.130/bus_data/?device_id=867440066085796')
            .then(response => response.json())
            .then(data => {
                console.log('Fetched data:', data); // Log fetched data for debugging
                if (data && data.length > 0) {
                    const busData = data[0]; // Assuming the latest data is at index 0

                    // Check ignition status and update display
                    const ignition = parseInt(busData.ignition);
                    const ignitionStatus = document.getElementById('stoppedButton1');
                    console.log('Ignition status:', ignition); // Log ignition status for debugging
                    if (ignition === 0) {
                        // Update display to indicate not running
                        ignitionStatus.innerText = 'Not Running';
                        notRunningCount1++;
                    } else {
                        // Update display to indicate running
                        ignitionStatus.innerText = 'Running';
                        RunningCount1++;
                    }
                } else {
                    console.error('No data received or empty array.'); // Log error if no data or empty array received
                }
            })
            .catch(error => {
                console.error('Error fetching data:', error); // Log any errors that occur during fetching
            });
    }

    // Call fetchAndUpdateData() function when the page loads
  //  fetchAndUpdateData();


    function fetchAndUpdateData1() {
      fetch('http://104.237.9.130/bus_data/?device_id=867440066279894')
            .then(response => response.json())
            .then(data => {
                console.log('Fetched data:', data); // Log fetched data for debugging
                if (data && data.length > 0) {
                    const busData = data[0]; // Assuming the latest data is at index 0

                    // Check ignition status and update display
                    const ignition = parseInt(busData.ignition);
                    const ignitionStatus = document.getElementById('stoppedButton2');
                    console.log('Ignition status:', ignition); // Log ignition status for debugging
                    if (ignition === 0) {
                        // Update display to indicate not running
                        ignitionStatus.innerText = 'Not Running';
                        notRunningCount2++;
                    } else {
                        // Update display to indicate running
                        ignitionStatus.innerText = 'Running';
                        RunningCount2++;
                    }
                } else {
                    console.error('No data received or empty array.'); // Log error if no data or empty array received
                }
            })
            .catch(error => {
                console.error('Error fetching data:', error); // Log any errors that occur during fetching
            });
    }

    // Call fetchAndUpdateData() function when the page loads
   // fetchAndUpdateData1();
   fetchAndUpdateData();
    fetchAndUpdateData1();
// Call the fetching functions repeatedly at an interval of 5 seconds
setInterval(() => {
  displayNotRunningCount();
  displayRunningCount();
}, 1000); // 5000 milliseconds = 


    function displayNotRunningCount() {
    const notRunningCountElement = document.getElementById('notRunningCount');
    notRunningCountElement.innerText = `Total not running buses: ${notRunningCount1 + notRunningCount2}`;
}

// Call the displayNotRunningCount() function when needed
displayNotRunningCount();


function displayRunningCount() {
    const notRunningCountElement = document.getElementById('RunningCount');
    notRunningCountElement.innerText = `Total running buses: ${RunningCount1 + RunningCount2}`;
}

// Call the displayNotRunningCount() function when needed
displayRunningCount();




    //fetch('http://104.237.9.130/bus_data/?device_id=867440066279894 ')

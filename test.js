const axios = require('axios');

// Define the API URL
const apiUrl = 'https://pokeapi.co/api/v2/pokemon/ditto ';

// Function to perform the test
async function runTest() {
  try {
    // Make a GET request to the API
    const response = await axios.get(apiUrl);

    // Check if the status code is 200 (OK)
    if (response.status === 200) {
      console.log('Test Passed: Status code is 200');
    } else {
      console.error('Test Failed: Unexpected status code:', response.status);
    }
  } catch (error) {
    console.error('Test Failed: Error occurred while making the request:', error.message);
  }
}

// Run the test
runTest();

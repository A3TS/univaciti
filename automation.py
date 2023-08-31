import requests

# Define the API URL
api_url = "https://pokeapi.co/api/v2/pokemon/ditto"

# Send a GET request to the API
response = requests.get(api_url)

# Check if the request was successful (HTTP status code 200)
if response.status_code == 200:
    # Extract and print the JSON response data
    data = response.json()
    print("Pokemon Name:", data["name"])
    print("Abilities:", [ability["ability"]["name"] for ability in data["abilities"]])
else:
    print("Failed to retrieve data from the API. Status Code:", response.status_code)

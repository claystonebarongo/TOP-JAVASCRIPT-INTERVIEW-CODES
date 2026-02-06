async function displayDogBreeds() {
    const URL = 'https://dog.ceo/api/breeds/list/all';

    try {
        console.log("Fetching breeds... Please wait.");
        const response = await fetch(URL);

        if (!response.ok) throw new Error('Network response was not ok');

        const data = await response.json();

        // Extract the breed names from the object keys
        const breeds = Object.keys(data.message);

        console.log(`--- Found ${breeds.length} Dog Breeds ---`);

        // Print the first 20 breeds so your terminal isn't flooded
        breeds.slice(0, 20).forEach((breed, index) => {
            const formattedName = breed.charAt(0).toUpperCase() + breed.slice(1);
            console.log(`${index + 1}. ${formattedName}`);
        });

    } catch (error) {
        console.error("Error loading breeds:", error.message);
    }
}

displayDogBreeds();
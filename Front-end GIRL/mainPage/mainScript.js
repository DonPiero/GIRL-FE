document.addEventListener("DOMContentLoaded", function() {
    // Load parameters from JSON file
    fetch('../assets/Data/inputSample.json')
        .then(response => response.json())
        .then(data => {
            // Use parameters to create visualization
            createVisualization(data);
        })
        .catch(error => {
            console.error('Error loading parameters:', error);
        });

    function createVisualization(parameters) {
        // Add your visualization logic here
        console.log('Parameters:', parameters);
        // For example, you can use parameters to draw charts, graphs, etc.
    }
});
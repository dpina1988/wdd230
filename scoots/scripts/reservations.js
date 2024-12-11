document.addEventListener('DOMContentLoaded', function() {
    const rentalSelect = document.getElementById('rental');

    fetch('data/rentals.json')
        .then(response => response.json())
        .then(data => {
            // Clear any existing options (except the placeholder)
            rentalSelect.innerHTML = '<option value="">Select a Rental</option>';

            data.forEach(rental => {
                const option = document.createElement('option');
                option.value = rental.name;
                option.textContent = `${rental.name} (${rental.type})`;
                rentalSelect.appendChild(option);
            });
        })
        .catch(error => console.error('Error fetching rentals data:', error));
});


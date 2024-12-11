document.addEventListener('DOMContentLoaded', function() {
    fetch('data/rentals.json')
        .then(response => response.json())
        .then(data => {
            // Create a dictionary to map types to their respective containers
            const containers = {
                'Scooter': document.getElementById('scooters'),
                'ATV': document.getElementById('atvs'),
                'Jeep': document.getElementById('jeeps')
            };

            // Initialize containers for each type
            Object.keys(containers).forEach(type => {
                const container = document.createElement('div');
                container.className = 'rentals-container-subpage';
                containers[type].appendChild(container);

                // Filter and create rental cards for each type
                data.filter(rental => rental.type === type).forEach(rental => {
                    const rentalCard = document.createElement('div');
                    rentalCard.className = 'rental-card-subpage';

                    rentalCard.innerHTML = `
                        <picture>
                            <source srcset="images/${rental.image.replace('-small.webp', '.webp')}" media="(max-width: 1700px)" type="image/webp">
                            <source srcset="images/${rental.image}" media="(min-width: 1700px)" type="image/webp">
                            <img src="images/${rental.image}" alt="${rental.alt}" loading="lazy">
                        </picture>
                        <div class="rental-content">
                            <h3>${rental.name}</h3>
                            <p>Capacity: ${rental.capacity} person(s)</p>
                            <table>
                                <tr>
                                    <th>Reservation</th>
                                    <th>Walk-In</th>
                                </tr>
                                <tr>
                                    <td>Half Day: $${rental.halfDay}</td>
                                    <td>Half Day: $${rental.walkInHalfDay}</td>
                                </tr>
                                <tr>
                                    <td>Full Day: $${rental.fullDay}</td>
                                    <td>Full Day: $${rental.walkInFullDay}</td>
                                </tr>
                            </table>
                            <a href="reservations.html" class="learn-more">Rent Now</a>
                        </div>
                    `;

                    container.appendChild(rentalCard);
                });
            });
        })
        .catch(error => console.error('Error fetching rental data:', error));
});

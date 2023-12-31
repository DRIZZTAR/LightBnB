SELECT city, count(reservations.id) as total_reservations
FROM properties
JOIN reservations ON properties.id = property_id
GROUP BY city
ORDER BY count(reservations.id) DESC;
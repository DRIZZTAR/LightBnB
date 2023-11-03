INSERT INTO users (name, email, password) VALUES
('Batman', 'batcave@gmail.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.'),
('Green Lantern', 'blanternlight@gmail.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.'),
('Superman', 'metropolis@gmail.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.');


INSERT INTO properties (owner_id, title, description, thumbnail_photo_url, cover_photo_url, cost_per_night, parking_spaces, number_of_bathrooms, number_of_bedrooms, country, street, city, province, post_code, active) VALUES
(1, 'Wayne Manor', 'A stately manor with plenty of secret passages.', 'thumbnail_url_1', 'cover_url_1', 1000, 3, 7, 11, 'USA', '1007 Mountain Drive', 'Gotham', 'New Jersey', '07021', TRUE),
(2, 'Green Lantern’s Light', 'Bright and colorful space with an intergalactic theme.', 'thumbnail_url_2', 'cover_url_2', 800, 2, 2, 3, 'USA', '2814 Oa Way', 'Coast City', 'California', '90401', TRUE),
(3, 'Fortress of Solitude', 'Private ice palace with crystal decor.', 'thumbnail_url_3', 'cover_url_3', 1200, 0, 1, 1, 'USA', 'Arctic Circle', 'North Pole', 'Alaska', '99705', TRUE);

INSERT INTO reservations (start_date, end_date, property_id, guest_id) VALUES
('2023-07-01', '2023-07-03', 4, 2),
('2023-08-15', '2023-08-20', 5, 3),
('2023-09-05', '2023-09-10', 6, 1);

INSERT INTO property_reviews (guest_id, property_id, reservation_id, rating, message) VALUES
(2, 4, 13, 5, 'Staying at the Wayne Manor was an unforgettable experience. The Batcave tour was fantastic!'),
(3, 5, 14, 4, 'The intergalactic theme was out of this world! Missed having a fortress of solitude.'),
(1, 6, 15, 5, 'A peaceful and cold retreat, perfect for planning out Gotham''s safety.');

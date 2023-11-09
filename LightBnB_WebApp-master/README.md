# LightBnB 🌟

Welcome to LightBnB, where sleek front-end design meets robust back-end engineering. This single-page application is not just a testament to modern web technologies but also an ode to the sophisticated orchestration of database interactions and server-side logic.

## Behind the Scenes 🛠️

At the heart of LightBnB's seamless user experience is a meticulously crafted back-end, powered by Node.js and Express. Here's a peek into the core features:

- **SQL Mastery**: Complex SQL queries are the keystones of our data retrieval strategy, enabling the sophisticated search and filtering functionalities that drive the LightBnB experience.
- **Connection Pooling**: Utilizing `pg.Pool` from the node-postgres library, we've implemented efficient database connection management to ensure scalable, high-performance interactions with our PostgreSQL server.
- **Promise-Driven Asynchrony**: Our back-end logic is built upon JavaScript promises, facilitating non-blocking database operations and a smooth, responsive interface.
- **Data Access Abstraction**: With `database.js`, we encapsulate the raw SQL queries, providing a clean, promise-based interface for data operations, further abstracting the complexities of direct database manipulation.

## Project Structure 📂


```
.
├── db
│   ├── json
│   └── database.js
├── public
│   ├── javascript
│   │   ├── components 
│   │   │   ├── header.js
│   │   │   ├── login_form.js
│   │   │   ├── new_property_form.js
│   │   │   ├── property_listing.js
│   │   │   ├── property_listings.js
│   │   │   ├── search_form.js
│   │   │   └── signup_form.js
│   │   ├── libraries
│   │   ├── index.js
│   │   ├── network.js
│   │   └── views_manager.js
│   ├── styles
│   │   ├── main.css
│   │   └── main.css.map
│   └── index.html
├── routes
│   ├── apiRoutes.js
│   └── userRoutes.js
├── styles  
│   ├── _forms.scss
│   ├── _header.scss
│   ├── _property-listings.scss
│   └── main.scss
├── .gitignore
├── package-lock.json
├── package.json
├── README.md
└── server.js
```


Key components of the LightBnB codebase:

- `db`: Our database layer where all interactions with the persistent store are managed.
  - `json`: Contains seed data in `.json` format for initial development and testing.
  - `database.js`: Handles all database queries, abstracting the data access layer.
- `public`: The front-facing segment of our application, holding all client-side assets.
  - `index.html`: The entry point of our application, orchestrating the user experience.
  - `javascript`: Contains logic for initializing the application, managing network requests, and manipulating views.
    - `components`: Modular and reusable HTML components built with jQuery for dynamic content rendering.
- `routes`: Defines express routes that handle HTTP requests for user and API endpoints.
- `styles`: SASS files for a structured and maintainable styling approach.
- `server.js`: The main server file that binds everything together and launches our application.

## Getting Started 🚀

To run LightBnB on your local machine, follow these steps:

1. Clone the repository to your preferred directory.
2. Install the required node modules with `npm install`.
3. Start the server using `npm run local`.
4. Navigate to `http://localhost:3000` in your web browser to view the application.

## Contributions and Feedback 📬

I am continually refining my craft and welcome constructive feedback and contributions to the project. Please feel free to submit issues and pull requests or contact me directly for any substantial enhancements.

---

Proudly developed by Tyson Skakun, an emerging full-stack developer.

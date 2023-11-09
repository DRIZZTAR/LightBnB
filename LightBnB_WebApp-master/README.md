# LightBnB 🌐

Welcome to LightBnB—a showcase of professional full-stack development practices. This single-page application epitomizes the harmonious integration of contemporary web technologies, presenting an intuitive front-end coupled with a high-performance back-end.

## Engineering Excellence

At the core of LightBnB lies a robust server-side architecture, designed for efficiency, scalability, and maintainability:

- **Advanced SQL Queries**: The application leverages sophisticated SQL queries for data retrieval, underpinning the platform's powerful search and filter capabilities.
- **Optimized Connection Pooling**: By implementing `pg.Pool` from the node-postgres library, LightBnB ensures optimal database connection management, resulting in reliable and scalable server responses.
- **Asynchronous Flow Control**: Embracing JavaScript's asynchronous nature, the back-end operations are structured around promises, yielding a non-blocking and streamlined data flow.
- **Data Layer Abstraction**: The `database.js` module encapsulates SQL query logic, offering a modular and promise-based data access layer that abstracts away the intricacies of direct database interaction.

## Project Overview 📂


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

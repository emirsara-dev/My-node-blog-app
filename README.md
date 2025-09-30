# My Node Blog App

A simple blog application built with Node.js, Express, and EJS. This app allows users to create, read, update, and delete blog posts in a clean, organized structure.

## Features

- CRUD operations for blog posts
- MVC folder structure
- EJS templating for server-side rendering
- Static assets served from `public/`

## Tech Stack

| Component | Technology |
|---|---|
| Backend | Node.js, Express |
| Views | EJS |
| Routing | Express Router |
| Database | MongoDB |
| Models | Defined in `models/` folder |

## Project Structure

controllers/ – business logic and request handlers
models/ – data models / schema definitions
routes/ – route definitions
views/ – EJS templates
public/ – static files (CSS, JS, images)
app.js – main application file (server setup)
package.json – dependencies, scripts, project metadata




## Installation

```bash
git clone https://github.com/emirsara-dev/My-node-blog-app.git
cd My-node-blog-app
npm install
```
Set up environment variables in .env:

```bash

PORT=3000
DB_URI=your_database_connection_string
```
Start the server:

```bash
npm start
# or for development with nodemon
npm run dev
```

Open your browser at http://localhost:3000 to view the app.


Usage:

Navigate to the home page to see all posts.

Create a new post using the "New Post" page.

Edit or delete posts using the respective buttons.



Contributing

1. Fork the repository

2. Create a feature branch (git checkout -b feature-name)

3. Commit your changes (git commit -m 'Add some feature')

4. Push to the branch (git push origin feature-name)

5. Open a Pull Request



License

MIT License



Contact

Amirhossein Sarabadani — amirhosseinsarabadani@gmail.com
Project Link: https://github.com/emirsara-dev/My-node-blog-app
# Toy Tales

A toy shop app built with React. It connects to a JSON Server backend, so toys are loaded from, and saved to, an API. This project practises full CRUD with `fetch`, `useState`, and `useEffect`.

## Screenshot

![Toy Tales screenshot](./screenshot.png)

## Features

- See all toys when the app loads (GET)
- Add a new toy through a form, starting with 0 likes (POST)
- Like a toy to increase its likes (PATCH)
- Donate a toy to remove it (DELETE)

## Tech Stack

- React (Vite)
- JSON Server
- Vitest and React Testing Library

## Getting Started

1. Clone the repository:
   ```
   git clone https://github.com/petermboya/react-hooks-toy-tales-vite.git
   cd react-hooks-toy-tales-vite
   ```
2. Install dependencies:
   ```
   npm install
   ```
3. Start the backend:
   ```
   npm run server
   ```
4. In a second terminal, start the app:
   ```
   npm run dev
   ```
5. Open the link shown in the terminal.

## Usage

- Click **Add a Toy**, fill in the name and image URL, then click **Create New Toy**.
- Click **Like** on a toy to add a like.
- Click **Donate to GoodWill** to remove a toy.

## Running Tests

```
npm run test
```

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/toys` | Get all toys |
| POST | `/toys` | Add a new toy |
| PATCH | `/toys/:id` | Update a toy's likes |
| DELETE | `/toys/:id` | Delete a toy |

## Author

Peter Mboya
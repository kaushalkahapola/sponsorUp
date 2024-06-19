1. **Clone the repository:**


2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Create a `.env` file in the server directory and add your environment variables:**

## Running the Application

### To Run Both Server and Frontend:

1. In the project root directory, run:
    ```bash
    npm run dev
    ```

### To Run Only the Server:

1. Navigate to the server directory:
    ```bash
    cd server
    ```

2. Start the server with nodemon:
    ```bash
    npx nodemon index.js
    ```
    If you have `nodemon` installed globally, you can simply run:
    ```bash
    nodemon index.js
    ```

---

**Note for Team Members:** This setup is for development purposes only. Do not commit your `.env` file to the repository. Add it to your `.gitignore` file:
```gitignore
.env

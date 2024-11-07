## Autonomys Network Space Race Plot-O-Meter

Welcome to the Autonomys Network Space Race Plot-O-Meter project! This application displays real-time blockchain data in a visually engaging thermometer, ranging from 0 PiB to 20 PiB, using Auto SDK, JavaScript and pure CSS.

### Prerequisites
- Node.js: Version 14 or higher is recommended.
- npm: Node Package Manager, comes with Node.js.

### Features

- **Real-Time Data**: Fetches and displays the latest `spacePledged` data from the Autonomys blockchain every second.
- **Dynamic Visualization**: A thermometer that visually represents the data, with animations and effects.
- **Cosmic Theme**: A space-inspired design using pure CSS, including a moving starfield and nebula effect.
- **Pure CSS Design**: No images required; all visuals are created using CSS.

---

## Getting Started

### Forking the Repository

1. **Fork the Repository on GitHub**:

   - Navigate to the original repository on GitHub.
   - Click on the **Fork** button at the top-right corner of the page.
   - This will create a copy of the repository under your GitHub account.

### Cloning the Repository

2. **Clone Your Forked Repository**:

   Open your terminal or command prompt and run the following command, replacing `<your-username>` with your GitHub username:

   ```bash
   git clone https://github.com/<your-username>/autonomys-space-race-plotometer.git
   ```

3. **Navigate to the Project Directory**:

   ```bash
   cd autonomys-space-race-plotometer
   ```

### Installing Dependencies

4. **Initialize npm**:

   If a `package.json` file isn't already present, initialize npm:

   ```bash
   npm init -y
   ```

5. **Install Required Packages**:

   ```bash
   npm install express @autonomys/auto-consensus@latest @autonomys/auto-utils@latest
   ```

6. **Update `package.json`**:

   Ensure your `package.json` includes the following:

   ```json
   {
   "type": "module",
   "dependencies": {
      "@autonomys/auto-consensus": "^0.7.1",
      "@autonomys/auto-utils": "^0.7.1",
      "express": "^4.21.1"
   },
   "scripts": {
      "start": "node server.js"
   },
   "name": "space-race-plot-o-meter",
   "version": "1.0.0",
   "description": "Welcome to the Autonomys Network Space Race Plot-O-Meter project! This application displays real-time blockchain data in a visually engaging thermometer, ranging from 0 PiB to 20 PiB, using Auto SDK, JavaScript and pure CSS.",
   "main": "server.js",
   "keywords": [],
   "author": "",
   "license": "ISC"
   }
   ```

   Adjust versions as necessary.

### Starting the Server

7. **Run the Express Server**:

   ```bash
   npm start
   ```

   You should see:

   ```
   Server running at http://localhost:3000
   ```

---

## Usage

8. **Access the Application**:

   Open your web browser and navigate to:

   ```
   http://localhost:3000/
   ```

   You should see the **Autonomys Network Space Race Plot-O-Meter** displaying real-time data with dynamic visuals.

---

## Project Structure

Your project directory should look like this:

```
autonomys-space-race-plotometer/
├── server.js
├── package.json
└── public/
    └── index.html
```

- **`server.js`**: The Express server file.
- **`package.json`**: Contains project metadata and dependencies.
- **`public/index.html`**: The main HTML file for the front-end.

--
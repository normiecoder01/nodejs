# Agentic AI Walkthrough - Todo Application Fixes

This document details the code updates applied to this repository using Agentic AI to resolve startup and connection crashes.

## How Agentic AI Helped
1. **Error Detection**: Diagnosed syntax, import, and configuration errors that caused immediate runtime failures.
2. **Step-by-Step Fixes**: Applied clean modifications to resolve CommonJS constraints, package API instantiation rules, and missing controller exports/imports.
3. **Execution Verification**: Started the local server, caught a secondary `MongoClient` constructor bug, and verified the server was fully listening on port `3000`.

---

## Technical Changes Made

### 1. CommonJS Top-Level Await Fix (`bin/www`)
*   **Problem**: In CommonJS modules, Node.js throws a `SyntaxError` when using `await` at the top level of a file.
*   **Fix**: Wrapped the connection and server listening process in a Promise chain:
    ```javascript
    connectDb().then(() => {
      server.listen(port);
      server.on('error', onError);
      server.on('listening', onListening);
    }).catch(err => {
      console.error("Database connection failed:", err);
      process.exit(1);
    });
    ```

### 2. MongoClient Constructor Fix (`utils/db.util.js`)
*   **Problem**: The official MongoDB driver requires `MongoClient` to be instantiated with the `new` operator. Without it, the application threw a `TypeError`.
*   **Fix**: Changed the instantiator to `new MongoClient(...)`.

### 3. Route & Controller Imports (`routes/tasks.js` and `controllers/task.controller.js`)
*   **Problem**:
    *   Imports for CRUD handlers in `routes/tasks.js` were commented out.
    *   The `GET /tasks` endpoint was trying to import `getAllTasks` from a non-existent `services/database.service.js`.
    *   `controllers/task.controller.js` was importing `fetchAllTasks` from the wrong path and using destructuring incorrectly.
*   **Fix**:
    *   Uncommented and aligned the controller imports in `routes/tasks.js`.
    *   Corrected the `fetchAllTasks` service import inside `controllers/task.controller.js`.
    *   Uncommented and implemented `getAllTasks` in the controller to fetch records from MongoDB and send the response back.

### 4. Typo correction (`services/db.service.js`)
*   **Problem**: Used `module.export` (singular) instead of `module.exports` (plural), resulting in `undefined` when required.
*   **Fix**: Corrected to `module.exports = fetchAllTasks`.

const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
    "sk_test_51JVXxrGe0AzbiYYXxdd8W7sKxWLYQ4kJvN7CkXT1K3znLbwEhaZNoSGO3EMbGmnF59k898U4t1vO3hL7Yw8nIi4P00BKlBAhK8"
  );

  // API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("hello world"))
  

const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.status(200).send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>CloudScale Final Project</title>
    </head>
    <body>
      <h1>CloudScale Final DevOps Project</h1>
      <p>The application was successfully deployed by:</p>
      <ul>
        <li>Diefallah Ateeyah — 4808</li>
        <li>Ahmed Ben Ali — 4772</li>
        <li>Ahmed Smew — 4743</li>
      </ul>
      <p>Docker, Azure Container Registry, Terraform, AKS, Kubernetes, and GitHub Actions.</p>
    </body>
    </html>
  `);
});

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "healthy"
  });
});

module.exports = app;
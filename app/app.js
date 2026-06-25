const express = require("express");

const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.status(200).send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#071a35" />
      <title>CloudScale Final Project</title>
      <link rel="stylesheet" href="/style.css" />
    </head>

    <body>
      <main class="page-wrapper">
        <section class="hero-card">
          <div class="top-row">
            <div class="logo">
              <span class="logo-mark">&lt;/&gt;</span>
              <span>CloudScale</span>
            </div>

            <div class="status-badge">
              <span class="status-dot"></span>
              System Healthy
            </div>
          </div>

          <div class="hero-content">
            <p class="eyebrow">AZURE • DOCKER • KUBERNETES • CI/CD</p>

            <h1>
              CloudScale Final
              <span>DevOps Project</span>
            </h1>

            <p class="description">
              A containerized web application deployed using Azure Container Registry,
              Terraform, Azure Kubernetes Service, Kubernetes, and GitHub Actions.
            </p>
          </div>

          <section class="team-section">
            <div class="section-heading">
              <h2>Project Team</h2>
              <p>Libyan International University</p>
            </div>

            <div class="team-grid">
              <article class="member-card">
                <div class="avatar">DA</div>
                <div>
                  <h3>Diefallah Ateeyah</h3>
                  <p>Student ID: 4808</p>
                </div>
              </article>

              <article class="member-card">
                <div class="avatar">AB</div>
                <div>
                  <h3>Ahmed Ben Ali</h3>
                  <p>Student ID: 4772</p>
                </div>
              </article>

              <article class="member-card">
                <div class="avatar">AS</div>
                <div>
                  <h3>Ahmed Smew</h3>
                  <p>Student ID: 4743</p>
                </div>
              </article>
            </div>
          </section>

          <section class="technology-section">
            <p class="section-label">Deployment Stack</p>

            <div class="technology-list">
              <span>Docker</span>
              <span>Azure ACR</span>
              <span>Terraform</span>
              <span>AKS</span>
              <span>Kubernetes</span>
              <span>GitHub Actions</span>
            </div>
          </section>

          <footer>
            <span>Cloud Computing & DevOps Engineering</span>
            <span class="health-text">/health endpoint available</span>
          </footer>
        </section>
      </main>
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
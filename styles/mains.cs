/* ===== Colors ===== */
:root {
    --primary: #2e7d32; /* Green */
    --secondary: #1b5e20; /* Dark Green */
    --light: #f8f9fa;
    --dark: #212529;
}

/* ===== Basic Styling ===== */
body {
    font-family: 'Arial', sans-serif;
}

.hero {
    background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('../images/hero-bg.jpg');
    background-size: cover;
    height: 60vh;
    display: flex;
    align-items: center;
}

.btn-primary {
    background: var(--primary);
    border: none;
}

.btn-primary:hover {
    background: var(--secondary);
}

/* ===== Product Cards ===== */
.card {
    transition: transform 0.3s;
    border: none;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}

.card:hover {
    transform: translateY(-5px);
}

.card-img-top {
    height: 200px;
    object-fit: cover;
}

/* ===== Responsive Adjustments ===== */
@media (max-width: 768px) {
    .hero {
        height: 40vh;
    }
}

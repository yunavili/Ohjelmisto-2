document.addEventListener("DOMContentLoaded", function () {
    const placeholder = document.getElementById('nav-placeholder');
    if (placeholder) {
        placeholder.innerHTML = `
            <div class="nav-logo">
                <a href="#">Logo</a>
            </div>
            <div class="nav-links">
                <a href="home.html">Home</a>
                <a href="products.html">Products</a>
                <a href="contact.html">Contact</a>
            </div>
        `;
    }
});


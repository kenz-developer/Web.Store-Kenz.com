const products = document.querySelectorAll('.product-card');
const resultsContainer = document.getElementById('results-container');

// Fungsi untuk mencari produk berdasarkan nama
function searchProducts() {
    const searchQuery = document.getElementById('search-input').value.toLowerCase();
    let matchedProducts = [];

    products.forEach(product => {
        const productName = product.getAttribute('data-name').toLowerCase();

        // Jika nama produk cocok dengan query pencarian
        if (productName.includes(searchQuery)) {
            matchedProducts.push(product);
        }
    });

    displayResults(matchedProducts);
}

// Menampilkan hasil pencarian
function displayResults(matchedProducts) {
    resultsContainer.innerHTML = ''; // Kosongkan hasil sebelumnya

    if (matchedProducts.length > 0) {
        matchedProducts.forEach(product => {
            const productClone = product.cloneNode(true); // Salin elemen produk
            resultsContainer.appendChild(productClone); // Tampilkan produk yang cocok
        });
    } else {
        resultsContainer.innerHTML = '<p>Produk tidak ditemukan</p>';
    }
}
// Smooth scroll ke section
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

// Contoh fungsi buka detail produk (bisa diganti modal)
function openProduct(id) {
    alert(`Detail Produk ${id}: Ini demo, di web asli bisa buka modal atau halaman baru!`);
}

// Handle form submit (demo)
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Pesan terkirim! Terima kasih.');
});

// Navbar mobile toggle (sederhana)
document.querySelector('.logo').addEventListener('click', function() {
    const menu = document.querySelector('.nav-menu');
    menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
});

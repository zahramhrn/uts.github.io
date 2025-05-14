document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault(); // mencegah submit default
      
      const nama = form.querySelector("input[type='text']").value.trim();
      const email = form.querySelector("input[type='email']").value.trim();
      const pesan = form.querySelector("textarea").value.trim();

      if (nama === "" || email === "" || pesan === "") {
        alert("Semua field harus diisi!");
      } else if (!validateEmail(email)) {
        alert("Format email tidak valid!");
      } else {
        alert("Pesan berhasil dikirim. Terima kasih!");
        form.reset();
      }
    });
  }
});

function validateEmail(email) {
  // Validasi email sederhana
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}
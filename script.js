
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault(); 
      alert("Thank you for volunteering! We will contact you soon.");
      form.reset();
    });
  }
});

const form = document.querySelector("#bookingForm");
const message = document.querySelector("#message");

form.addEventListener("submit", function(event) {
  event.preventDefault();
  message.textContent = "Заявка отправлена! Мы свяжемся с вами.";
  form.reset();
});

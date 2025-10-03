document.getElementById("bookingForm").addEventListener("submit", function(e) {
  e.preventDefault();
  
  // Get form values
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const date = document.getElementById("date").value;
  const fromTime = document.getElementById("fromTime").value;
  const toTime = document.getElementById("toTime").value;
  const payment = document.getElementById("payment").value;

  // For now, just show an alert
  alert(`Booking Submitted!\nName: ${name}\nPhone: ${phone}\nDate: ${date}\nFrom: ${fromTime}\nTo: ${toTime}\nPayment: ${payment}\n\nFirebase logic will be added later.`);
  
  // You can reset the form if you want
  document.getElementById("bookingForm").reset();
});

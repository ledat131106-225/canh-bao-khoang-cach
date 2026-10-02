const form = document.getElementById("orderForm");
const message = document.getElementById("formMessage");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const data = new FormData(form);
  const name = String(data.get("name") || "").trim();
  const phone = String(data.get("phone") || "").trim();
  const address = String(data.get("address") || "").trim();
  const qty = Number(data.get("qty"));

  if (!name || !phone || !address || !Number.isInteger(qty) || qty < 1 || qty > 20) {
    message.textContent = "Vui lòng kiểm tra lại thông tin đặt hàng.";
    message.style.color = "#b42318";
    return;
  }

  const total = (qty * 1490000).toLocaleString("vi-VN");
  message.style.color = "#547000";
  message.textContent = `Đã ghi nhận yêu cầu cho ${name}: ${qty} thiết bị – tổng dự kiến ${total}đ. Đây là form demo, chưa gửi đơn đến hệ thống thật.`;
  form.reset();
  form.querySelector('[name="qty"]').value = 1;
});

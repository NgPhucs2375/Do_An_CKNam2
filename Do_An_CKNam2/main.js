// JS của Nút Lưu / Tiếp của trang Tạo sự kiện

document.addEventListener('DOMContentLoaded', function () {
  const nameInput = document.getElementById('eventName');
  const charCount = document.getElementById('charCount');

  if (nameInput && charCount) {
    nameInput.addEventListener('input', () => {
      charCount.textContent = nameInput.value.length;
    });
  }

  const btnSave = document.getElementById('btnSave');
  const btnNext = document.getElementById('btnNext');

  if (btnSave) {
    btnSave.addEventListener('click', () => {
      alert('Thông tin đã được lưu tạm thời!');
      // Thêm xử lý lưu nếu cần
    });
  }

  if (btnNext) {
    btnNext.addEventListener('click', () => {
      const desc = document.getElementById('event-description')?.value.trim();
      const type = document.getElementById('event-type')?.value;

      if (!nameInput.value.trim() || !desc || !type) {
        alert('Vui lòng điền đầy đủ Tên sự kiện, Mô tả và Loại sự kiện.');
        return;
      }

      alert('Chuyển sang bước tiếp theo...');
      // Thêm logic điều hướng nếu cần
    });
  }
});


// Xem trước ảnh logo
const logoInput = document.getElementById('logoInput');
const logoPreview = document.getElementById('logoPreview');

if (logoInput && logoPreview) {
  logoInput.addEventListener('change', function () {
    const file = this.files[0];
    if (file) {
      logoPreview.src = URL.createObjectURL(file);
    }
  });
}

// JS của Upload file
// Xem trước ảnh nền
const bgInput = document.getElementById('bgInput');
const bgPreview = document.getElementById('bgPreview');

if (bgInput && bgPreview) {
  bgInput.addEventListener('change', function () {
    const file = this.files[0];
    if (file) {
      bgPreview.src = URL.createObjectURL(file);
    }
  });
}

// JS đồng hồ đếm ngược của trang Sự kiện khác
function startFlashSaleCountdown(durationInMinutes) {
  let timeLeft = durationInMinutes * 60;
  const timerDisplay = document.getElementById("flashTimer");

  const updateTimer = () => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timerDisplay.textContent =
      `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

    if (timeLeft <= 0) {
      clearInterval(countdownInterval);
      timerDisplay.textContent = "00:00";
      const flashBar = document.getElementById("flashSaleBar");
      if (flashBar) flashBar.textContent = "⚠️ Flash Sale đã kết thúc!";
    }

    timeLeft--;
  };

  updateTimer();
  const countdownInterval = setInterval(updateTimer, 1000);
}

window.addEventListener("DOMContentLoaded", () => {
  startFlashSaleCountdown(10); // đếm ngược 10 phút
});

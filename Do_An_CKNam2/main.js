// JS của trang Tạo sự kiện + Flash Sale + Buy Modal
document.addEventListener('DOMContentLoaded', function () {
  // ====== Phần 1: Đếm ký tự Tên sự kiện ======
  const nameInput = document.getElementById('eventName');
  const charCount = document.getElementById('charCount');
  if (nameInput && charCount) {
    nameInput.addEventListener('input', () => {
      charCount.textContent = nameInput.value.length;
    });
  }

  // ====== Phần 2: Nút Lưu / Tiếp ======
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

  // ====== Phần 3: Xem trước ảnh logo ======
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

  // ====== Phần 4: Xem trước ảnh nền ======
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

  // ====== Phần 5: Đếm ngược Flash Sale ======
  function startFlashSaleCountdown(durationInMinutes) {
    let timeLeft = durationInMinutes * 60;
    const timerDisplay = document.getElementById("flashTimer");
    const flashBar = document.getElementById("flashSaleBar");

    const updateTimer = () => {
      const minutes = Math.floor(timeLeft / 60);
      const seconds = timeLeft % 60;
      timerDisplay.textContent =
        `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

      if (timeLeft <= 0) {
        clearInterval(countdownInterval);
        timerDisplay.textContent = "00:00";
        if (flashBar) flashBar.textContent = "⚠️ Flash Sale đã kết thúc!";
      }
      timeLeft--;
    };

    updateTimer();
    const countdownInterval = setInterval(updateTimer, 1000);
  }

  // Bắt đầu đếm ngược 10 phút
  startFlashSaleCountdown(10);

  // ====== Phần 6: Xử lý khi bấm “Buy it” để đổ dữ liệu vào Modal ======
  const buyButtons = document.querySelectorAll('.buy-button');
  buyButtons.forEach(button => {
    button.addEventListener('click', function() {
      // Lấy data-* từ nút vừa click
      const imageUrl    = this.getAttribute('data-image') || '';
      const titleText   = this.getAttribute('data-title') || '';
      const descText    = this.getAttribute('data-description') || '';
      const priceText   = this.getAttribute('data-price') || '';
      const skuText     = this.getAttribute('data-sku') || '';

      // Các thẻ trong Modal (phải tồn tại trong HTML)
      const modalImage      = document.getElementById('modalProductImage');
      const modalTitle      = document.getElementById('modalProductTitle');
      const modalDesc       = document.getElementById('modalProductDescription');
      const modalPrice      = document.getElementById('modalProductPrice');
      const modalSKU        = document.getElementById('modalProductSKU');

      // Gán dữ liệu vào Modal
      if (modalImage) {
        if (imageUrl) {
          modalImage.src = imageUrl;
          modalImage.style.display = 'block';
        } else {
          modalImage.style.display = 'none';
        }
      }
      if (modalTitle) modalTitle.textContent = titleText;
      if (modalDesc)  modalDesc.textContent  = descText;
      if (modalPrice) modalPrice.textContent = priceText;
      if (modalSKU)   modalSKU.textContent   = skuText;
    });
  });
});

document.getElementById("nutTimKiem").addEventListener("click", function () {
    const input = document.getElementById("timkiem").value.trim();

    if (!input) {
        alert("Nội dung tìm kiếm không có!");
    } else {
        // Nếu có nhập thì xử lý tiếp
        localStorage.setItem("searchKeyword", input);
        window.location.href = "TC_NhacSong.html";
    }
});

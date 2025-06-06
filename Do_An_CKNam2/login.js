// lấy các phần tử của modal login trong trang chủ
const loginModal = document.getElementById("loginModal");
const emailElement = document.getElementById("email");
const passwordElement = document.getElementById("password");
const alertError = document.getElementById("alertError");
//
loginModal.addEventListener("submit",function(e){
    // ngăn chặn sự kiện tải lại trang
    e.preventDefault();

    // kiểm tra dữ liệu đầu vào

    // lấy dữ liệu từ local về
    const userLocal = JSON.parse(localStorage.getItem("users") || '[]');

    // tìm kiếm email và mật khẩu trùng trên local
    const findUser = userLocal.find(
        (user) => 
            user.email === emailElement.value &&
            user.password === passwordElement.value
    );
    console.log(findUser);
    // đăng nhập thành công chuyển về trang chủ
    if(!findUser){
        alertError.style.display = "block";
    }else{
        window.location.href = "TrangChu.html";
    }
    // đăng nhập không thành công

    // lưu thông tin đăng nhập lên local
    localStorage.setItem("userLogin",JSON.stringify(findUser));

});
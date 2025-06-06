// lấy ra element của trang
const yournameElemnt = document.getElementById("yourname");
const formRegister = document.getElementById("formregister");
const emailElement = document.getElementById("email");
const sdtElement = document.getElementById("sdt");
const passwordElement = document.getElementById("password");
const repasswordElement = document.getElementById("repassword");



// lấy lỗi
const yournameError = document.getElementById("yournameError");
const emailError = document.getElementById("emailError");
const sdtError = document.getElementById("sdtError");
const passwordError = document.getElementById("passwordError");
const repasswordError = document.getElementById("repasswordError");

// lấy dữ liệu từ localStorage
const userLocal = JSON.parse(localStorage.getItem("users") || '[]');


/**
 * 
 * @param {*} email 
 * @returns 
 */
function validateEmail (email) {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

// lắng nghe sự kiện
formRegister.addEventListener("submit",function (e){

    e.preventDefault();

    // kiểm tra dữ liệu vào
    if(!yournameElemnt.value){
        yournameError.style.display = "block";
    }else{
        yournameError.style.display = "none";
    }

    if(!emailElement.value){
        emailError.style.display = "block";
    }else{
        emailError.style.display = "none";
        if(!validateEmail(emailElement.value)){
            emailError.style.display = "block";
            emailError.innerText ="Email không đúng dịnh dạng";
        }
    }

    if(!sdtElement.value){
        sdtError.style.display = "block";
    }else{
        sdtError.style.display = "none";
        
    }

    if(!passwordElement.value){
        passwordError.style.display = "block";
    }else{
        passwordError.style.display = "none";
    }

    if(!repasswordElement.value){
        repasswordError.style.display = "block";
    }else{
        repasswordError.style.display = "none";
    }

    // kiểm tra mật khẩu 
    if(repasswordElement.value !== passwordElement.value){
        repasswordError.style.display = "block";
        repasswordError.innerText = "Mật khẩu không trùng khớp";
    } 

    
    
 
    // gửi date từ form lên localStorage
    if (
        yournameElemnt.value &&
        emailElement.value &&
        sdtElement.value &&
        passwordElement.value &&
        repasswordElement.value &&
        (passwordElement.value === repasswordElement.value) &&
        validateEmail(emailElement.value)
    ) {
        const user = {
            userId: Math.ceil(Math.random() * 100000000),
            username:yournameElemnt.value,
            email: emailElement.value,
            sdt: sdtElement.value,
            password: passwordElement.value,
        };

        userLocal.push(user); // ✅ thêm user mới vào mảng

        localStorage.setItem("users", JSON.stringify(userLocal));

       

        // ✅ Sửa chính tả đường dẫn
        setTimeout(function () {
            window.location.href = "TrangChu.html";
        }, 1000);
    }

});
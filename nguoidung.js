// lấy dữ liệu từ local
const userLogin = JSON.parse(localStorage.getItem("userLogin"));
const userAvatar = document.getElementById("userAvatar");

const userLGElement = document.getElementById("userLG");

if(userLogin){

    // hiển thị tên người dùng ở thanh header
    userLGElement.innerText = userLogin.username;

    userAvatar.style.src = "hinhanhnhom/H/hinhanhdn.jpg";
    userAvatar.style.display = "block";

}else{
    userLGElement.innerText = "";
    userLGElement.style.display = "none";
    userAvatar.style.display = "none";
}

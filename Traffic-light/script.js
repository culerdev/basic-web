
function batDen(mau) {
    // Lấy tất cả các bóng đèn
    const den = document.querySelectorAll(".light");

    // Tắt tất cả các đèn trước
    den.forEach(function (item) {
        item.classList.remove("on");
    });

    // Bật đèn được chọn
    document.getElementById(mau).classList.add("on");
}
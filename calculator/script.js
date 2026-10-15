
// Lấy giá trị số A
function getValueA() {
    return Number(document.getElementById("numbera").value);
}

// Lấy giá trị số B
function getValueB() {
    return Number(document.getElementById("numberb").value);
}

// Phép cộng
function cong(a, b) {
    document.getElementById("result").value = a + b;
}

// Phép trừ
function tru(a, b) {
    document.getElementById("result").value = a - b;
}

// Phép nhân
function nhan(a, b) {
    document.getElementById("result").value = a * b;
}

// Phép chia
function chia(a, b) {
    if (b === 0) {
        document.getElementById("result").value =
            "Khong the chia cho 0";
        return;
    }

    document.getElementById("result").value = a / b;
}

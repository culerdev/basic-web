// 1. Lấy thông tin người dùng đã đăng nhập
const currentUser = JSON.parse(
    localStorage.getItem("englishHubCurrentUser") || "null"
);

// 2. Tìm khu vực tài khoản trên thanh điều hướng
const accountLinks = document.getElementById("account-links");

// 3. Kiểm tra trạng thái đăng nhập
if (currentUser && accountLinks) {

    // Đã đăng nhập: hiển thị tên và nút đăng xuất
    accountLinks.innerHTML = `
        <span class="user-name">
            Xin chào, ${currentUser.fullname}
        </span>

        <button type="button" class="btn-logout" id="logout-btn">
            Đăng xuất
        </button>
    `;

    // 4. Xử lý khi nhấn nút đăng xuất
    document.getElementById("logout-btn").addEventListener("click", function () {

        // Xóa trạng thái đăng nhập hiện tại
        localStorage.removeItem("englishHubCurrentUser");

        // Quay về trang chủ
        window.location.href = "index.html";
    });
}
// ========================================
// 1. LẤY CÁC PHẦN TỬ TRÊN TRANG ĐĂNG KÝ
// ========================================

const registerForm = document.getElementById("register-form");

const fullnameInput = document.getElementById("fullname");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirm-password");

const registerMessage = document.getElementById("register-message");


// ========================================
// 2. MÃ HÓA MẬT KHẨU CHO BẢN THỬ NGHIỆM
// ========================================

async function hashPassword(password) {
    const encoder = new TextEncoder();

    const passwordData = encoder.encode(password);

    const hashBuffer = await crypto.subtle.digest(
        "SHA-256",
        passwordData
    );

    const hashArray = Array.from(new Uint8Array(hashBuffer));

    const passwordHash = hashArray
        .map(byte => byte.toString(16).padStart(2, "0"))
        .join("");

    return passwordHash;
}


// ========================================
// 3. XỬ LÝ KHI NGƯỜI DÙNG NHẤN ĐĂNG KÝ
// ========================================

if (registerForm) {

    registerForm.addEventListener("submit", async function (event) {

        // Không tải lại trang khi gửi biểu mẫu
        event.preventDefault();

        // Xóa thông báo của lần thao tác trước
        registerMessage.textContent = "";

        // Lấy dữ liệu người dùng nhập
        const fullname = fullnameInput.value.trim();
        const email = emailInput.value.trim().toLowerCase();
        const password = passwordInput.value;
        const confirmPassword = confirmPasswordInput.value;


        // ========================================
        // 4. KIỂM TRA DỮ LIỆU
        // ========================================

        if (fullname === "") {
            registerMessage.textContent = "Vui lòng nhập họ và tên.";
            return;
        }

        if (email === "") {
            registerMessage.textContent = "Vui lòng nhập email.";
            return;
        }

        if (password.length < 6) {
            registerMessage.textContent =
                "Mật khẩu phải có ít nhất 6 ký tự.";
            return;
        }

        if (password !== confirmPassword) {
            registerMessage.textContent =
                "Mật khẩu xác nhận không khớp.";
            return;
        }


        // ========================================
        // 5. LẤY DANH SÁCH TÀI KHOẢN ĐÃ LƯU
        // ========================================

        let users = [];

        try {
            users = JSON.parse(
                localStorage.getItem("englishHubUsers") || "[]"
            );

            // Đảm bảo dữ liệu đọc được là một danh sách
            if (!Array.isArray(users)) {
                registerMessage.textContent =
                    "Dữ liệu tài khoản không hợp lệ.";
                return;
            }

        } catch (error) {
            registerMessage.textContent =
                "Không thể đọc dữ liệu tài khoản.";
            return;
        }


        // ========================================
        // 6. KIỂM TRA EMAIL ĐÃ TỒN TẠI CHƯA
        // ========================================

        const existingUser = users.find(function (user) {
            return user.email === email;
        });

        if (existingUser) {
            registerMessage.textContent =
                "Email này đã được đăng ký.";

            return;
        }


        // ========================================
        // 7. TẠO TÀI KHOẢN MỚI
        // ========================================

        try {

            // Chỉ lưu giá trị băm, không lưu mật khẩu gốc
            const passwordHash = await hashPassword(password);

            const newUser = {
                id: Date.now(),
                fullname: fullname,
                email: email,
                passwordHash: passwordHash,
                createdAt: new Date().toISOString()
            };

            // Thêm tài khoản mới vào danh sách
            users.push(newUser);

            // Lưu danh sách vào localStorage
            localStorage.setItem(
                "englishHubUsers",
                JSON.stringify(users)
            );

            // Thông báo thành công
            registerMessage.textContent =
                "Đăng ký thành công! Bạn có thể đăng nhập.";

            registerMessage.style.color = "green";

            // Xóa dữ liệu trên biểu mẫu
            registerForm.reset();

        } catch (error) {

            registerMessage.textContent =
                "Không thể tạo tài khoản. Hãy thử lại.";

            registerMessage.style.color = "red";

            console.error("Lỗi đăng ký:", error);
        }

    });

}
// ========================================
// 8. XỬ LÝ ĐĂNG NHẬP
// ========================================

const loginForm = document.getElementById("login-form");

const loginEmailInput = document.getElementById("login-email");
const loginPasswordInput = document.getElementById("login-password");

const loginMessage = document.getElementById("login-message");


if (loginForm) {

    loginForm.addEventListener("submit", async function (event) {

        // Ngăn trình duyệt tải lại trang
        event.preventDefault();

        loginMessage.textContent = "";
        loginMessage.style.color = "red";

        // Lấy dữ liệu người dùng nhập
        const email = loginEmailInput.value.trim().toLowerCase();
        const password = loginPasswordInput.value;

        try {

            // Đọc danh sách tài khoản
            const users = JSON.parse(
                localStorage.getItem("englishHubUsers") || "[]"
            );

            if (!Array.isArray(users)) {
                loginMessage.textContent =
                    "Dữ liệu tài khoản không hợp lệ.";
                return;
            }

            // Tìm tài khoản bằng email
            const user = users.find(function (item) {
                return item.email === email;
            });

            if (!user) {
                loginMessage.textContent =
                    "Email chưa được đăng ký.";
                return;
            }

            // Mã hóa mật khẩu nhập vào theo cách đăng ký
            const passwordHash = await hashPassword(password);

            // So sánh với mật khẩu đã lưu
            if (passwordHash !== user.passwordHash) {
                loginMessage.textContent =
                    "Mật khẩu không chính xác.";
                return;
            }

            // Chỉ lưu thông tin cần thiết cho phiên đăng nhập
            const currentUser = {
                id: user.id,
                fullname: user.fullname,
                email: user.email
            };

            localStorage.setItem(
                "englishHubCurrentUser",
                JSON.stringify(currentUser)
            );

            // Đăng nhập thành công
            window.location.href = "progress.html";

        } catch (error) {

            loginMessage.textContent =
                "Đã xảy ra lỗi khi đăng nhập.";

            console.error("Lỗi đăng nhập:", error);
        }

    });

}
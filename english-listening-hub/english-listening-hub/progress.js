
// ========================================
// 1. KIỂM TRA ĐĂNG NHẬP
// ========================================

const currentUser = JSON.parse(
    localStorage.getItem("englishHubCurrentUser") || "null"
);

if (!currentUser) {
    // Lưu trang cần quay lại sau khi đăng nhập.
    sessionStorage.setItem("englishHubReturnUrl", "progress.html");

    window.location.href = "login.html";
}


// ========================================
// 2. HIỂN THỊ TÊN NGƯỜI DÙNG
// ========================================

if (currentUser) {
    document.getElementById("user-name").textContent =
        currentUser.fullname;
}


// ========================================
// 3. LẤY TRÌNH ĐỘ ĐÃ LƯU
// ========================================

const levelButtons = document.querySelectorAll(".level-button");
const selectedLevelText = document.getElementById("selected-level");

let currentLevel = "A1";

if (currentUser) {
    currentLevel = localStorage.getItem(
        "englishHubLevel_" + currentUser.id
    ) || "A1";
}


// ========================================
// 4. HIỂN THỊ TRÌNH ĐỘ
// ========================================

function displayLevel() {
    selectedLevelText.textContent =
        "Trình độ bạn đã chọn: " + currentLevel;

    levelButtons.forEach(function (button) {
        if (button.dataset.level === currentLevel) {
            button.classList.add("active");
        } else {
            button.classList.remove("active");
        }
    });
}

displayLevel();


// ========================================
// 5. CHỌN VÀ LƯU TRÌNH ĐỘ
// ========================================

levelButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        currentLevel = button.dataset.level;

        localStorage.setItem(
            "englishHubLevel_" + currentUser.id,
            currentLevel
        );

        displayLevel();
    });
});


// ========================================
// 6. ĐỌC TIẾN ĐỘ HỌC TẬP
// ========================================

// Chỉ đếm được tổng số bài khi dữ liệu topics đã được nạp.
let totalLessons = 0;

if (typeof topics !== "undefined") {
    topics.forEach(function (topic) {
        topic.sections.forEach(function (section) {
            totalLessons += section.lessons.length;
        });
    });
}

// Đọc danh sách bài đã hoàn thành của tài khoản.
const progressKey = "englishHubProgress_" + currentUser.id;

const savedProgress = JSON.parse(
    localStorage.getItem(progressKey) || "[]"
);

// Chỉ đếm những mã bài học hợp lệ.
let completedLessons = 0;

if (typeof topics !== "undefined") {
    const validLessonIds = [];

    topics.forEach(function (topic) {
        topic.sections.forEach(function (section, sectionIndex) {
            section.lessons.forEach(function (lesson, lessonIndex) {
                validLessonIds.push(
                    `${topic.id}-${sectionIndex}-${lessonIndex}`
                );
            });
        });
    });

    completedLessons = new Set(
        savedProgress.filter(function (lessonId) {
            return validLessonIds.includes(lessonId);
        })
    ).size;
}

let completionPercent = 0;

if (totalLessons > 0) {
    completionPercent = Math.round(
        completedLessons / totalLessons * 100
    );
}


// ========================================
// 7. CẬP NHẬT THỐNG KÊ
// ========================================

document.getElementById("total-lessons").textContent =
    totalLessons;

document.getElementById("completed-lessons").textContent =
    completedLessons;

document.getElementById("completion-percent").textContent =
    completionPercent + "%";

document.getElementById("progress-fill").style.width =
    completionPercent + "%";

document.getElementById("progress-track").setAttribute(
    "aria-valuenow",
    completionPercent
);

document.getElementById("progress-note").textContent =
    `Bạn đã hoàn thành ${completionPercent}% chương trình học.`;

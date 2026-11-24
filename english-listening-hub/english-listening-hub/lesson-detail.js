// Lấy chủ đề người dùng đã chọn từ đường dẫn.
const params = new URLSearchParams(window.location.search);
const topicId = params.get("topic");
const topic = topics.find(item => item.id === topicId);

const topicHeader = document.getElementById("topic-header");
const sectionList = document.getElementById("section-list");

if (!topic) {
    topicHeader.innerHTML = `
        <a class="back-link" href="index.html#lessons">← Quay lại danh sách</a>
        <h1>Không tìm thấy chủ đề</h1>
        <p>Vui lòng quay lại trang chủ và chọn một chủ đề.</p>
    `;
} else {
    document.title = topic.title + " | EnglishHub";
    topicHeader.innerHTML = `
        <a class="back-link" href="index.html#lessons">← Quay lại các chủ đề</a>
        <h1>${topic.icon} ${topic.title}</h1>
        <p>${topic.description} · Trình độ ${topic.level}</p>
    `;

    topic.sections.forEach((section, sectionIndex) => {
        const sectionBox = document.createElement("div");
        sectionBox.className = "course-section";

        const lessonCards = section.lessons.map((lesson, lessonIndex) => `
            <div class="section-lesson">
                <a class="lesson-title-link"
                   href="practice.html?topic=${topic.id}&section=${sectionIndex}&lesson=${lessonIndex}">
                    <strong>${lessonIndex + 1}. ${lesson.title}</strong>
                    <small>${lesson.parts} parts · Vocab level: ${lesson.level}</small>
                </a>
                <div class="inline-audio">
                    <button class="inline-play"
                        type="button"
                        data-text="${lesson.text.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;")}"
                        aria-label="Nghe ${lesson.title}">▶ Nghe audio</button>
                    <a class="open-lesson"
                       href="practice.html?topic=${topic.id}&section=${sectionIndex}&lesson=${lessonIndex}">Vào bài học →</a>
                </div>
            </div>
        `).join("");

        sectionBox.innerHTML = `
            <button class="section-toggle ${sectionIndex === 0 ? "open" : ""}" type="button">
                <strong>${section.title}</strong>
                <span>(${section.lessons.length} lessons)</span>
                <span class="section-arrow">${sectionIndex === 0 ? "⌃" : "⌄"}</span>
            </button>
            <div class="section-content ${sectionIndex === 0 ? "show" : ""}">
                <div class="section-lesson-grid">${lessonCards}</div>
            </div>
        `;

        const toggle = sectionBox.querySelector(".section-toggle");
        const content = sectionBox.querySelector(".section-content");
        const arrow = sectionBox.querySelector(".section-arrow");

        toggle.addEventListener("click", () => {
            const isOpen = content.classList.toggle("show");
            toggle.classList.toggle("open", isOpen);
            arrow.textContent = isOpen ? "⌃" : "⌄";
        });

        sectionList.appendChild(sectionBox);
    });
}


/* Phát audio mẫu ngay trên thẻ bài học trong Section */
document.addEventListener("click", function (event) {
    const button = event.target.closest(".inline-play");
    if (!button) return;

    if (!("speechSynthesis" in window)) {
        alert("Trình duyệt này chưa hỗ trợ phát giọng đọc. Hãy thử Chrome hoặc Edge.");
        return;
    }

    const text = button.dataset.text;
    if (window.speechSynthesis.speaking) {
        window.speechSynthesis.cancel();
    }

    document.querySelectorAll(".inline-play").forEach(btn => {
        btn.textContent = "▶ Nghe audio";
        btn.classList.remove("playing");
    });

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";
    utterance.rate = 0.9;
    button.textContent = "⏸ Đang phát...";
    button.classList.add("playing");
    utterance.onend = function () {
        button.textContent = "▶ Nghe lại";
        button.classList.remove("playing");
    };
    utterance.onerror = function () {
        button.textContent = "▶ Nghe audio";
        button.classList.remove("playing");
    };
    window.speechSynthesis.speak(utterance);
});


// ========================================
// 1. LẤY DỮ LIỆU BÀI HỌC
// ========================================

const params = new URLSearchParams(window.location.search);

const topic = topics.find(
    item => item.id === params.get("topic")
);

const sectionIndex = Number(params.get("section") || 0);
const lessonIndex = Number(params.get("lesson") || 0);

const heading = document.getElementById("practice-heading");
const answerBox = document.getElementById("answer");
const feedback = document.getElementById("feedback");
const transcriptPanel = document.getElementById("transcript-panel");
const dictationPanel = document.getElementById("dictation-panel");

const playButton = document.getElementById("play-audio");
const checkButton = document.getElementById("check-answer");
const skipButton = document.getElementById("skip-answer");
const partNumber = document.getElementById("part-number");
const speedSelect = document.getElementById("speed");

let currentLesson = null;
let dialogueLines = [];
let currentPart = 0;
let isPlaying = false;
let hasChecked = false;


// ========================================
// 2. CHUẨN BỊ DỮ LIỆU TỪNG PART
// ========================================

if (
    topic &&
    topic.sections[sectionIndex] &&
    topic.sections[sectionIndex].lessons[lessonIndex]
) {
    currentLesson =
        topic.sections[sectionIndex].lessons[lessonIndex];

    // Chuyển ký tự \n thành xuống dòng thật,
    // sau đó tách mỗi dòng thành một part.
    dialogueLines = currentLesson.text
        .replace(/\\n/g, "\n")
        .split(/\r?\n/)
        .map(line => line.trim())
        .filter(line => line.length > 0);

    heading.innerHTML = `
        <h1>${currentLesson.title}</h1>
        <p>
            ${topic.title}
            · ${topic.sections[sectionIndex].title}
            · ${currentLesson.level}
        </p>
    `;

    document.title = currentLesson.title + " | EnglishHub";

    document.getElementById("back-link").href =
        `lesson-detail.html?topic=${topic.id}`;

    renderFullTranscript();
    showCurrentPart();

} else {
    heading.innerHTML = `
        <h1>Không tìm thấy bài học</h1>
        <p>Vui lòng quay lại và chọn bài học khác.</p>
    `;

    playButton.disabled = true;
    checkButton.disabled = true;
    skipButton.disabled = true;
}


// ========================================
// 3. LẤY NỘI DUNG CÂU THOẠI
// ========================================

function getCurrentSentence() {
    if (!dialogueLines[currentPart]) {
        return "";
    }

    const line = dialogueLines[currentPart];

    // Ví dụ:
    // Anna: Hello! It's nice to meet you.
    //
    // Chỉ lấy:
    // Hello! It's nice to meet you.

    const separator = line.indexOf(":");

    if (separator !== -1) {
        return line.slice(separator + 1).trim();
    }

    return line;
}


// ========================================
// 4. HIỂN THỊ PART HIỆN TẠI
// ========================================

function showCurrentPart() {
    if (!currentLesson || currentPart >= dialogueLines.length) {
        showLessonComplete();
        return;
    }

    // Dừng câu cũ trước khi chuyển part.
    window.speechSynthesis.cancel();

    isPlaying = false;
    hasChecked = false;

    answerBox.value = "";
    feedback.textContent = "";

    playButton.textContent = "▶ Nghe Part này";
    checkButton.disabled = false;
    skipButton.disabled = false;

    partNumber.textContent =
        `Part ${currentPart + 1} / ${dialogueLines.length}`;

    // Cập nhật tên part trên tiêu đề.
    const oldPartTitle = document.getElementById("current-part-title");

    if (oldPartTitle) {
        oldPartTitle.remove();
    }

    const partTitle = document.createElement("p");
    partTitle.id = "current-part-title";
    partTitle.textContent = `Bạn đang luyện nghe Part ${currentPart + 1}`;

    partNumber.insertAdjacentElement("afterend", partTitle);
}


// ========================================
// 5. PHÁT RIÊNG PART HIỆN TẠI
// ========================================

function playCurrentPart() {
    if (!currentLesson || currentPart >= dialogueLines.length) {
        return;
    }

    if (!("speechSynthesis" in window)) {
        feedback.textContent =
            "Trình duyệt không hỗ trợ chức năng nghe.";
        return;
    }

    // Đang phát thì tạm dừng.
    if (window.speechSynthesis.speaking && isPlaying) {
        window.speechSynthesis.pause();
        isPlaying = false;
        playButton.textContent = "▶ Tiếp tục nghe";
        return;
    }

    // Đang tạm dừng thì tiếp tục.
    if (window.speechSynthesis.paused) {
        window.speechSynthesis.resume();
        isPlaying = true;
        playButton.textContent = "⏸ Đang phát";
        return;
    }

    // Chỉ phát câu của part hiện tại.
    window.speechSynthesis.cancel();

    const sentence = getCurrentSentence();
    const speech = new SpeechSynthesisUtterance(sentence);

    speech.lang = "en-US";
    speech.rate = Number(speedSelect.value);

    speech.onstart = function () {
        isPlaying = true;
        playButton.textContent = "⏸ Tạm dừng";
    };

    speech.onend = function () {
        isPlaying = false;
        playButton.textContent = "🔁 Nghe lại Part này";
    };

    speech.onerror = function () {
        isPlaying = false;
        playButton.textContent = "▶ Nghe Part này";
    };

    window.speechSynthesis.speak(speech);
}

playButton.addEventListener("click", playCurrentPart);


// ========================================
// 6. KIỂM TRA CÂU TRẢ LỜI
// ========================================

function normalizeText(text) {
    return text
        .toLowerCase()
        .replace(/[.,!?'"“”]/g, "")
        .replace(/\s+/g, " ")
        .trim();
}

checkButton.addEventListener("click", function () {
    if (!currentLesson || hasChecked) {
        return;
    }

    const answer = normalizeText(answerBox.value);
    const correctAnswer = normalizeText(getCurrentSentence());

    if (answer === correctAnswer) {
        hasChecked = true;

        feedback.style.color = "green";
        feedback.textContent = "Correct! Bạn đã nghe chính xác.";

        checkButton.disabled = true;

        if (currentPart < dialogueLines.length - 1) {
            feedback.textContent += " Đang chuyển sang part tiếp theo...";

            // Trả lời đúng thì tự động chuyển part.
            setTimeout(function () {
                currentPart++;
                showCurrentPart();

                // Phát câu mới sau khi chuyển part.
                playCurrentPart();
            }, 1000);

        } else {
            setTimeout(showLessonComplete, 1000);
        }

    } else {
        feedback.style.color = "#b45309";
        feedback.textContent =
            "Chưa chính xác. Hãy kiểm tra lại chính tả và nghe lại part này.";
    }
});


// ========================================
// 7. BỎ QUA PART HIỆN TẠI
// ========================================

skipButton.addEventListener("click", function () {
    if (!currentLesson) {
        return;
    }

    if (currentPart < dialogueLines.length - 1) {
        currentPart++;
        showCurrentPart();
        playCurrentPart();
    } else {
        showLessonComplete();
    }
});


// ========================================
// 8. HIỂN THỊ TOÀN BỘ TRANSCRIPT
// ========================================

function renderFullTranscript() {
    transcriptPanel.innerHTML = "";

    dialogueLines.forEach(function (line, index) {
        const row = document.createElement("div");
        row.className = "transcript-line";

        const text = document.createElement("p");
        text.textContent = `Part ${index + 1}: ${line}`;

        row.appendChild(text);
        transcriptPanel.appendChild(row);
    });
}

function toggleTranscript() {
    const isShowing = transcriptPanel.classList.toggle("show");

    dictationPanel.style.display = isShowing ? "none" : "block";

    document.getElementById("dictation-tab")
        .classList.toggle("active", !isShowing);

    document.getElementById("transcript-tab")
        .classList.toggle("active", isShowing);
}

document.getElementById("show-transcript")
    .addEventListener("click", toggleTranscript);

document.getElementById("transcript-tab")
    .addEventListener("click", toggleTranscript);

document.getElementById("dictation-tab")
    .addEventListener("click", function () {
        transcriptPanel.classList.remove("show");
        dictationPanel.style.display = "block";

        this.classList.add("active");

        document.getElementById("transcript-tab")
            .classList.remove("active");
    });


// ========================================
// 9. HOÀN THÀNH BÀI HỌC
// ========================================

function showLessonComplete() {
    window.speechSynthesis.cancel();

    isPlaying = false;

    partNumber.textContent = "Hoàn thành bài học!";

    const oldPartTitle = document.getElementById("current-part-title");

    if (oldPartTitle) {
        oldPartTitle.remove();
    }

    feedback.style.color = "green";
    feedback.textContent =
        "Chúc mừng! Bạn đã hoàn thành tất cả các part của bài học.";

    playButton.disabled = true;
    checkButton.disabled = true;
    skipButton.disabled = true;
}

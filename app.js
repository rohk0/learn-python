// ============================================================
// LearnPython — Main Application Logic
// ============================================================

// ----- State -----
const STORAGE_KEY = "learnpython_progress";

let state = loadState();

function defaultState() {
    return {
        xp: 0,
        completedLessons: [],
        completedChallenges: [],
        streakDays: 0,
        lastVisit: null
    };
}

function loadState() {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
            return { ...defaultState(), ...JSON.parse(saved) };
        }
    } catch (e) { /* ignore */ }
    return defaultState();
}

function saveState() {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) { /* ignore */ }
    updateXPBadge();
}

// ----- Streak Tracking -----
function updateStreak() {
    const today = new Date().toDateString();
    if (state.lastVisit !== today) {
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        if (state.lastVisit === yesterday.toDateString()) {
            state.streakDays++;
        } else if (state.lastVisit !== today) {
            state.streakDays = 1;
        }
        state.lastVisit = today;
        saveState();
    }
}

// ----- Navigation -----
let currentSection = "hero";

function showSection(section) {
    // Hide all
    document.getElementById("heroSection").classList.add("d-none");
    document.getElementById("lessonsSection").classList.add("d-none");
    document.getElementById("playgroundSection").classList.add("d-none");
    document.getElementById("progressSection").classList.add("d-none");

    // Update nav links
    document.querySelectorAll(".navbar-nav .nav-link").forEach(el => el.classList.remove("active"));

    switch (section) {
        case "lessons":
            document.getElementById("lessonsSection").classList.remove("d-none");
            document.querySelectorAll(".navbar-nav .nav-link")[0].classList.add("active");
            renderLessonList();
            break;
        case "playground":
            document.getElementById("playgroundSection").classList.remove("d-none");
            document.querySelectorAll(".navbar-nav .nav-link")[1].classList.add("active");
            updateLineNumbers();
            break;
        case "progress":
            document.getElementById("progressSection").classList.remove("d-none");
            document.querySelectorAll(".navbar-nav .nav-link")[2].classList.add("active");
            renderProgress();
            break;
        default:
            document.getElementById("heroSection").classList.remove("d-none");
    }
    currentSection = section;
    window.scrollTo({ top: 0, behavior: "smooth" });
}

// ----- Lesson List -----
function renderLessonList() {
    const list = document.getElementById("lessonList");
    list.innerHTML = "";

    LESSONS.forEach((lesson, idx) => {
        const completed = state.completedLessons.includes(lesson.id);
        const challengeDone = state.completedChallenges.includes(lesson.id);

        const item = document.createElement("a");
        item.href = "#";
        item.className = "list-group-item list-group-item-action d-flex align-items-center";
        item.onclick = (e) => { e.preventDefault(); openLesson(lesson.id); };

        item.innerHTML = `
            <span class="lesson-number ${completed ? 'completed' : ''}">${completed ? '<i class="bi bi-check"></i>' : idx + 1}</span>
            <div class="flex-grow-1">
                <div>${lesson.title}</div>
                <small class="text-muted">${lesson.description}</small>
            </div>
            <div class="d-flex flex-column align-items-end gap-1">
                <span class="badge bg-primary">${lesson.xp} XP</span>
                ${challengeDone ? '<span class="badge bg-success"><i class="bi bi-trophy-fill"></i></span>' : ''}
            </div>
        `;
        list.appendChild(item);
    });
}

// ----- Lesson Content -----
let currentLessonId = null;

function openLesson(id) {
    currentLessonId = id;
    const lesson = LESSONS.find(l => l.id === id);
    if (!lesson) return;

    // Highlight active in sidebar
    document.querySelectorAll("#lessonList .list-group-item").forEach((el, idx) => {
        el.classList.toggle("active-lesson", LESSONS[idx].id === id);
    });

    const container = document.getElementById("lessonContent");
    const completed = state.completedLessons.includes(id);
    const challengeDone = state.completedChallenges.includes(id);
    const prevLesson = LESSONS.find(l => l.id === id - 1);
    const nextLesson = LESSONS.find(l => l.id === id + 1);

    container.innerHTML = `
        <div class="card-body">
            <div class="d-flex justify-content-between align-items-start mb-3">
                <div>
                    <span class="badge bg-secondary mb-2">Lesson ${id} of ${LESSONS.length}</span>
                    <h2 class="lesson-title">${lesson.title}</h2>
                </div>
                ${completed ? '<span class="badge bg-success fs-6"><i class="bi bi-check-circle me-1"></i>Completed</span>' : ''}
            </div>

            <div class="lesson-section">
                ${lesson.content}
            </div>

            <!-- Challenge Button -->
            <div class="mt-4 p-3 bg-light rounded">
                <div class="d-flex justify-content-between align-items-center">
                    <div>
                        <h5 class="mb-1"><i class="bi bi-puzzle me-2"></i>Coding Challenge</h5>
                        <small class="text-muted">${lesson.challenge.description}</small>
                    </div>
                    <button class="btn ${challengeDone ? 'btn-success' : 'btn-primary'}" onclick="openChallenge(${id})">
                        ${challengeDone ? '<i class="bi bi-check-circle me-1"></i>Solved' : '<i class="bi bi-play-fill me-1"></i>Attempt'}
                    </button>
                </div>
            </div>

            <!-- Mark Complete / Nav -->
            <div class="lesson-nav-btns">
                <div>
                    ${prevLesson ? `<button class="btn btn-outline-secondary" onclick="openLesson(${id - 1})"><i class="bi bi-arrow-left me-1"></i>Previous</button>` : ''}
                </div>
                <div class="d-flex gap-2">
                    ${!completed ? `<button class="btn btn-success" onclick="markLessonComplete(${id})"><i class="bi bi-check-lg me-1"></i>Mark Complete</button>` : ''}
                    ${nextLesson ? `<button class="btn btn-primary" onclick="openLesson(${id + 1})">Next<i class="bi bi-arrow-right ms-1"></i></button>` : ''}
                </div>
            </div>
        </div>
    `;
}

function markLessonComplete(id) {
    if (!state.completedLessons.includes(id)) {
        const lesson = LESSONS.find(l => l.id === id);
        state.completedLessons.push(id);
        state.xp += lesson.xp;
        saveState();
        showToast("Lesson Complete!", `+${lesson.xp} XP earned!`);
        renderLessonList();
        openLesson(id);
    }
}

// ----- Challenges -----
let currentChallengeId = null;

function openChallenge(id) {
    currentChallengeId = id;
    const lesson = LESSONS.find(l => l.id === id);
    if (!lesson) return;

    document.getElementById("challengeDescription").textContent = lesson.challenge.description;
    document.getElementById("challengeEditor").value = lesson.challenge.starterCode;
    document.getElementById("challengeFeedback").classList.add("d-none");

    const modal = new bootstrap.Modal(document.getElementById("challengeModal"));
    modal.show();
}

function submitChallenge() {
    const id = currentChallengeId;
    const lesson = LESSONS.find(l => l.id === id);
    if (!lesson) return;

    const code = document.getElementById("challengeEditor").value;
    const feedback = document.getElementById("challengeFeedback");

    // Run the code with Skulpt and capture output
    let output = "";
    function outf(text) { output += text; }
    function builtinRead(x) {
        if (Sk.builtinFiles === undefined || Sk.builtinFiles["files"][x] === undefined) {
            throw "File not found: '" + x + "'";
        }
        return Sk.builtinFiles["files"][x];
    }

    Sk.configure({ output: outf, read: builtinRead });
    Sk.misceval.asyncToPromise(function () {
        return Sk.importMainWithBody("<stdin>", false, code, true);
    }).then(() => {
        if (lesson.challenge.validate(output)) {
            feedback.className = "mt-3 alert alert-success";
            feedback.innerHTML = '<i class="bi bi-check-circle-fill me-2"></i>Correct! Great job!';

            if (!state.completedChallenges.includes(id)) {
                state.completedChallenges.push(id);
                state.xp += 10; // bonus XP for challenge
                saveState();
                showToast("Challenge Solved!", "+10 bonus XP!");
            }

            // Also mark lesson complete if not already
            if (!state.completedLessons.includes(id)) {
                markLessonComplete(id);
            }
        } else {
            feedback.className = "mt-3 alert alert-warning";
            feedback.innerHTML = `<i class="bi bi-exclamation-triangle me-2"></i>Not quite. Your output was: <code>${escapeHtml(output.trim() || "(empty)")}</code>. Try again!`;
        }
        feedback.classList.remove("d-none");
    }).catch((err) => {
        feedback.className = "mt-3 alert alert-danger";
        feedback.innerHTML = `<i class="bi bi-x-circle me-2"></i>Error: <code>${escapeHtml(err.toString())}</code>`;
        feedback.classList.remove("d-none");
    });
}

// ----- Playground: Code Editor -----
const editor = document.getElementById("codeEditor");

if (editor) {
    editor.addEventListener("input", updateLineNumbers);
    editor.addEventListener("scroll", syncScroll);
    editor.addEventListener("keydown", handleTab);
}

function updateLineNumbers() {
    const lines = editor.value.split("\n").length;
    const nums = [];
    for (let i = 1; i <= lines; i++) nums.push(i);
    document.getElementById("lineNumbers").textContent = nums.join("\n");
}

function syncScroll() {
    document.getElementById("lineNumbers").scrollTop = editor.scrollTop;
}

function handleTab(e) {
    if (e.key === "Tab") {
        e.preventDefault();
        const start = editor.selectionStart;
        const end = editor.selectionEnd;
        editor.value = editor.value.substring(0, start) + "    " + editor.value.substring(end);
        editor.selectionStart = editor.selectionEnd = start + 4;
        updateLineNumbers();
    }
}

function clearEditor() {
    editor.value = "";
    updateLineNumbers();
}

function clearOutput() {
    document.getElementById("outputArea").textContent = 'Click "Run" to see the output...';
    document.getElementById("outputArea").classList.remove("output-error");
}

// ----- Playground: Run Code (Skulpt) -----
function runCode() {
    const code = editor.value;
    const outputEl = document.getElementById("outputArea");
    outputEl.textContent = "";
    outputEl.classList.remove("output-error");

    if (!code.trim()) {
        outputEl.textContent = "No code to run.";
        return;
    }

    let output = "";
    function outf(text) {
        output += text;
    }

    function builtinRead(x) {
        if (Sk.builtinFiles === undefined || Sk.builtinFiles["files"][x] === undefined) {
            throw "File not found: '" + x + "'";
        }
        return Sk.builtinFiles["files"][x];
    }

    Sk.configure({
        output: outf,
        read: builtinRead,
        __future__: Sk.python3
    });

    Sk.misceval.asyncToPromise(function () {
        return Sk.importMainWithBody("<stdin>", false, code, true);
    }).then(() => {
        outputEl.textContent = output || "(No output)";
    }).catch((err) => {
        outputEl.textContent = err.toString();
        outputEl.classList.add("output-error");
    });
}

// ----- Playground: Snippets -----
function loadSnippet(name) {
    if (SNIPPETS[name]) {
        editor.value = SNIPPETS[name];
        updateLineNumbers();
    }
}

// ----- Try in Playground (from Lessons) -----
function tryInPlayground(code) {
    editor.value = code.replace(/\\n/g, "\n").replace(/\\'/g, "'");
    updateLineNumbers();
    showSection("playground");
}

// ----- Progress -----
function renderProgress() {
    const completedCount = state.completedLessons.length;
    const totalLessons = LESSONS.length;
    const percent = Math.round((completedCount / totalLessons) * 100);

    document.getElementById("totalXP").textContent = state.xp;
    document.getElementById("lessonsCompleted").textContent = completedCount;
    document.getElementById("challengesSolved").textContent = state.completedChallenges.length;
    document.getElementById("streakDays").textContent = state.streakDays;
    document.getElementById("overallPercent").textContent = percent + "%";
    document.getElementById("overallBar").style.width = percent + "%";

    // Per-lesson progress
    const listEl = document.getElementById("lessonProgressList");
    listEl.innerHTML = "";

    LESSONS.forEach(lesson => {
        const lessonDone = state.completedLessons.includes(lesson.id);
        const challengeDone = state.completedChallenges.includes(lesson.id);
        let progressPercent = 0;
        if (lessonDone) progressPercent += 50;
        if (challengeDone) progressPercent += 50;

        const row = document.createElement("div");
        row.className = "lesson-progress-row";
        row.innerHTML = `
            <span class="lesson-progress-name">${lesson.id}. ${lesson.title}</span>
            <div class="progress">
                <div class="progress-bar ${progressPercent === 100 ? 'bg-success' : 'bg-primary'}"
                     style="width: ${progressPercent}%"></div>
            </div>
            <span class="lesson-progress-status">
                ${progressPercent === 100 ? '<span class="text-success"><i class="bi bi-check-circle-fill"></i> Done</span>' :
                  progressPercent > 0 ? '<span class="text-primary">In Progress</span>' :
                  '<span class="text-muted">Not Started</span>'}
            </span>
        `;
        listEl.appendChild(row);
    });
}

function resetProgress() {
    if (confirm("Are you sure you want to reset all progress? This cannot be undone.")) {
        state = defaultState();
        saveState();
        renderProgress();
        showToast("Progress Reset", "All progress has been cleared.");
    }
}

// ----- XP Badge -----
function updateXPBadge() {
    document.getElementById("xpBadge").textContent = state.xp + " XP";
}

// ----- Toast Notifications -----
function showToast(title, body) {
    document.getElementById("toastTitle").textContent = title;
    document.getElementById("toastBody").textContent = body;
    const toast = new bootstrap.Toast(document.getElementById("notifToast"));
    toast.show();
}

// ----- Utility -----
function escapeHtml(str) {
    const div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
}

function copyCode(btn) {
    const block = btn.parentElement;
    const code = block.textContent.replace("Copy", "").trim();
    navigator.clipboard.writeText(code).then(() => {
        btn.textContent = "Copied!";
        setTimeout(() => { btn.textContent = "Copy"; }, 1500);
    });
}

// ----- Init -----
updateStreak();
updateXPBadge();
updateLineNumbers();

// app.jsx
import { useState, useEffect, useCallback, useRef } from "react";

// icons.jsx
import { jsx, jsxs } from "react/jsx-runtime";
function Icon({ size = 20, color = "currentColor", children, ...rest }) {
  return /* @__PURE__ */ jsx(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: color,
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...rest,
      children
    }
  );
}
var ChevronRight = (p) => /* @__PURE__ */ jsx(Icon, { ...p, children: /* @__PURE__ */ jsx("polyline", { points: "9 6 15 12 9 18" }) });
var ArrowLeft = (p) => /* @__PURE__ */ jsxs(Icon, { ...p, children: [
  /* @__PURE__ */ jsx("line", { x1: "19", y1: "12", x2: "5", y2: "12" }),
  /* @__PURE__ */ jsx("polyline", { points: "12 19 5 12 12 5" })
] });
var Shield = (p) => /* @__PURE__ */ jsx(Icon, { ...p, children: /* @__PURE__ */ jsx("path", { d: "M12 2 L20 6 L20 12 C20 17 16 21 12 22 C8 21 4 17 4 12 L4 6 Z" }) });
var GraduationCap = (p) => /* @__PURE__ */ jsxs(Icon, { ...p, children: [
  /* @__PURE__ */ jsx("path", { d: "M2 8 L12 3 L22 8 L12 13 Z" }),
  /* @__PURE__ */ jsx("path", { d: "M6 10 V16 C6 16 9 18 12 18 C15 18 18 16 18 16 V10" })
] });
var Plus = (p) => /* @__PURE__ */ jsxs(Icon, { ...p, children: [
  /* @__PURE__ */ jsx("line", { x1: "12", y1: "5", x2: "12", y2: "19" }),
  /* @__PURE__ */ jsx("line", { x1: "5", y1: "12", x2: "19", y2: "12" })
] });
var Trash2 = (p) => /* @__PURE__ */ jsxs(Icon, { ...p, children: [
  /* @__PURE__ */ jsx("polyline", { points: "3 6 5 6 21 6" }),
  /* @__PURE__ */ jsx("path", { d: "M8 6 V4 a2 2 0 0 1 2-2 h4 a2 2 0 0 1 2 2 V6 M19 6 l-1 14 a2 2 0 0 1-2 2 H8 a2 2 0 0 1-2-2 L5 6" })
] });
var Check = (p) => /* @__PURE__ */ jsx(Icon, { ...p, children: /* @__PURE__ */ jsx("polyline", { points: "20 6 9 17 4 12" }) });
var X = (p) => /* @__PURE__ */ jsxs(Icon, { ...p, children: [
  /* @__PURE__ */ jsx("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
  /* @__PURE__ */ jsx("line", { x1: "6", y1: "6", x2: "18", y2: "18" })
] });
var Award = (p) => /* @__PURE__ */ jsxs(Icon, { ...p, children: [
  /* @__PURE__ */ jsx("circle", { cx: "12", cy: "8", r: "6" }),
  /* @__PURE__ */ jsx("path", { d: "M8.5 13.5 L7 22 L12 19 L17 22 L15.5 13.5" })
] });
var ClipboardList = (p) => /* @__PURE__ */ jsxs(Icon, { ...p, children: [
  /* @__PURE__ */ jsx("rect", { x: "6", y: "3", width: "12", height: "18", rx: "2" }),
  /* @__PURE__ */ jsx("rect", { x: "9", y: "1", width: "6", height: "3", rx: "1" }),
  /* @__PURE__ */ jsx("line", { x1: "9", y1: "9", x2: "15", y2: "9" }),
  /* @__PURE__ */ jsx("line", { x1: "9", y1: "13", x2: "15", y2: "13" }),
  /* @__PURE__ */ jsx("line", { x1: "9", y1: "17", x2: "13", y2: "17" })
] });
var BookOpen = (p) => /* @__PURE__ */ jsxs(Icon, { ...p, children: [
  /* @__PURE__ */ jsx("path", { d: "M2 5 C5 3 9 3 12 5 C15 3 19 3 22 5 V19 C19 17 15 17 12 19 C9 17 5 17 2 19 Z" }),
  /* @__PURE__ */ jsx("line", { x1: "12", y1: "5", x2: "12", y2: "19" })
] });
var Layers = (p) => /* @__PURE__ */ jsxs(Icon, { ...p, children: [
  /* @__PURE__ */ jsx("polygon", { points: "12 2 22 8 12 14 2 8" }),
  /* @__PURE__ */ jsx("polyline", { points: "2 14 12 20 22 14" })
] });
var Stamp = (p) => /* @__PURE__ */ jsxs(Icon, { ...p, children: [
  /* @__PURE__ */ jsx("rect", { x: "6", y: "14", width: "12", height: "6", rx: "1" }),
  /* @__PURE__ */ jsx("path", { d: "M12 14 V8 M8 8 a4 4 0 1 1 8 0" })
] });
var Loader2 = (p) => /* @__PURE__ */ jsx(Icon, { ...p, children: /* @__PURE__ */ jsx("circle", { cx: "12", cy: "12", r: "9", strokeDasharray: "40 20" }) });
var AlertCircle = (p) => /* @__PURE__ */ jsxs(Icon, { ...p, children: [
  /* @__PURE__ */ jsx("circle", { cx: "12", cy: "12", r: "10" }),
  /* @__PURE__ */ jsx("line", { x1: "12", y1: "7.5", x2: "12", y2: "13" }),
  /* @__PURE__ */ jsx("line", { x1: "12", y1: "16.5", x2: "12", y2: "16.6" })
] });
var History = (p) => /* @__PURE__ */ jsxs(Icon, { ...p, children: [
  /* @__PURE__ */ jsx("circle", { cx: "12", cy: "13", r: "8" }),
  /* @__PURE__ */ jsx("polyline", { points: "12 9 12 13 15 15" }),
  /* @__PURE__ */ jsx("polyline", { points: "3 4 3 9 8 9" })
] });
var Search = (p) => /* @__PURE__ */ jsxs(Icon, { ...p, children: [
  /* @__PURE__ */ jsx("circle", { cx: "11", cy: "11", r: "7" }),
  /* @__PURE__ */ jsx("line", { x1: "21", y1: "21", x2: "16.65", y2: "16.65" })
] });
var Bug = (p) => /* @__PURE__ */ jsxs(Icon, { ...p, children: [
  /* @__PURE__ */ jsx("rect", { x: "8", y: "6", width: "8", height: "12", rx: "4" }),
  /* @__PURE__ */ jsx("line", { x1: "12", y1: "2", x2: "12", y2: "6" }),
  /* @__PURE__ */ jsx("line", { x1: "4", y1: "10", x2: "8", y2: "10" }),
  /* @__PURE__ */ jsx("line", { x1: "16", y1: "10", x2: "20", y2: "10" }),
  /* @__PURE__ */ jsx("line", { x1: "4", y1: "16", x2: "8", y2: "16" }),
  /* @__PURE__ */ jsx("line", { x1: "16", y1: "16", x2: "20", y2: "16" })
] });
var Image2 = (p) => /* @__PURE__ */ jsxs(Icon, { ...p, children: [
  /* @__PURE__ */ jsx("rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }),
  /* @__PURE__ */ jsx("circle", { cx: "8.5", cy: "8.5", r: "1.5" }),
  /* @__PURE__ */ jsx("polyline", { points: "21 15 16 10 5 21" })
] });
var Settings = (p) => /* @__PURE__ */ jsxs(Icon, { ...p, children: [
  /* @__PURE__ */ jsx("circle", { cx: "12", cy: "12", r: "3" }),
  /* @__PURE__ */ jsx("circle", { cx: "12", cy: "12", r: "8", strokeDasharray: "2 2.4" })
] });
var Lock = (p) => /* @__PURE__ */ jsxs(Icon, { ...p, children: [
  /* @__PURE__ */ jsx("rect", { x: "5", y: "11", width: "14", height: "10", rx: "2" }),
  /* @__PURE__ */ jsx("path", { d: "M8 11 V7 a4 4 0 0 1 8 0 V11" })
] });
var Pencil = (p) => /* @__PURE__ */ jsxs(Icon, { ...p, children: [
  /* @__PURE__ */ jsx("path", { d: "M12 20 h9" }),
  /* @__PURE__ */ jsx("path", { d: "M16.5 3.5 a2.1 2.1 0 0 1 3 3 L7 19 l-4 1 1-4 Z" })
] });
var Menu = (p) => /* @__PURE__ */ jsxs(Icon, { ...p, children: [
  /* @__PURE__ */ jsx("line", { x1: "4", y1: "7", x2: "20", y2: "7" }),
  /* @__PURE__ */ jsx("line", { x1: "4", y1: "12", x2: "20", y2: "12" }),
  /* @__PURE__ */ jsx("line", { x1: "4", y1: "17", x2: "20", y2: "17" })
] });
var Printer = (p) => /* @__PURE__ */ jsxs(Icon, { ...p, children: [
  /* @__PURE__ */ jsx("polyline", { points: "6 9 6 2 18 2 18 9" }),
  /* @__PURE__ */ jsx("rect", { x: "6", y: "14", width: "12", height: "8" }),
  /* @__PURE__ */ jsx("path", { d: "M6 14 H4 a2 2 0 0 1 -2 -2 V9 a2 2 0 0 1 2 -2 H20 a2 2 0 0 1 2 2 V12 a2 2 0 0 1 -2 2 H18" })
] });
var Timer = (p) => /* @__PURE__ */ jsxs(Icon, { ...p, children: [
  /* @__PURE__ */ jsx("line", { x1: "10", y1: "2", x2: "14", y2: "2" }),
  /* @__PURE__ */ jsx("line", { x1: "12", y1: "4", x2: "12", y2: "7" }),
  /* @__PURE__ */ jsx("circle", { cx: "12", cy: "13", r: "8" })
] });

// app.jsx
import { Fragment, jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
var CLASS_EXAMS = Array.from({ length: 12 }, (_, i) => ({
  id: `class-${i + 1}`,
  label: `Class ${i + 1}`,
  group: "Classes"
}));
var OTHER_EXAMS = [
  { id: "cmkids-lp", label: "CM Kids (LP)", group: "CM Kids" },
  { id: "cmkids-up", label: "CM Kids (UP)", group: "CM Kids" },
  { id: "nmms", label: "NMMS", group: "Scholarship" }
];
var EXAMS = [...CLASS_EXAMS, ...OTHER_EXAMS];
var GROUPS = ["Classes", "CM Kids", "Scholarship"];
var uid = () => Math.random().toString(36).slice(2, 10);
var APP_HINT = "If you're using the Claude mobile app, try opening this in a browser (claude.ai) instead \u2014 saving works more reliably there.";
function readAndCompressImage(file, maxDim = 640, quality = 0.72) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = () => reject(new Error("Couldn't read that file"));
    reader.onload = () => {
      const img = new Image();
      img.onerror = () => reject(new Error("That doesn't look like a valid image"));
      img.onload = () => {
        let { width, height } = img;
        if (width > maxDim || height > maxDim) {
          if (width > height) {
            height = Math.round(height * maxDim / width);
            width = maxDim;
          } else {
            width = Math.round(width * maxDim / height);
            height = maxDim;
          }
        }
        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext("2d");
        ctx.fillStyle = "#FFFFFF";
        ctx.fillRect(0, 0, width, height);
        ctx.drawImage(img, 0, 0, width, height);
        resolve(canvas.toDataURL("image/jpeg", quality));
      };
      img.src = reader.result;
    };
    reader.readAsDataURL(file);
  });
}
var LOGO_SRC = "data:image/png;base64,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";
var wait = (ms) => new Promise((res) => setTimeout(res, ms));
async function sGet(key, fallback) {
  for (let attempt = 0; attempt < 3; attempt++) {
    try {
      const r = await window.storage.get(key, true);
      return r ? JSON.parse(r.value) : fallback;
    } catch {
      if (attempt < 2) await wait(400 * (attempt + 1));
    }
  }
  return fallback;
}
async function sSet(key, value) {
  let lastError = "unknown error";
  for (let attempt = 0; attempt < 3; attempt++) {
    try {
      const result = await window.storage.set(key, JSON.stringify(value), true);
      if (result) return { ok: true };
      lastError = "storage.set returned empty result";
    } catch (err) {
      lastError = err && (err.message || err.toString()) || "unknown error";
    }
    if (attempt < 2) await wait(500 * (attempt + 1));
  }
  return { ok: false, error: lastError };
}
function App() {
  const [mode, setMode] = useState("student");
  const [examId, setExamId] = useState(null);
  const [subjectId, setSubjectId] = useState(null);
  const [chapterId, setChapterId] = useState(null);
  const [variant, setVariant] = useState(null);
  const [screen, setScreen] = useState("home");
  const [studentName, setStudentName] = useState("");
  const [toast, setToast] = useState(null);
  const [adminPin, setAdminPin] = useState(void 0);
  const [adminUnlocked, setAdminUnlocked] = useState(false);
  useEffect(() => {
    (async () => setAdminPin(await sGet("admin-settings:pin", null)))();
  }, []);
  const showToast = (msg, kind = "info") => {
    setToast({ msg, kind });
    setTimeout(() => setToast(null), kind === "error" ? 5500 : 2600);
  };
  const exam = EXAMS.find((e) => e.id === examId) || null;
  const reset = () => {
    setExamId(null);
    setSubjectId(null);
    setChapterId(null);
    setVariant(null);
    setScreen("home");
  };
  const goHistory = () => {
    setExamId(null);
    setSubjectId(null);
    setChapterId(null);
    setVariant(null);
    setScreen("history");
  };
  const goDiag = () => {
    setExamId(null);
    setSubjectId(null);
    setChapterId(null);
    setVariant(null);
    setScreen("diag");
  };
  const goAdminSettings = () => {
    setExamId(null);
    setSubjectId(null);
    setChapterId(null);
    setVariant(null);
    setScreen("admin-settings");
  };
  const requestMode = (m) => {
    if (m === "admin" && adminPin && !adminUnlocked) {
      setExamId(null);
      setSubjectId(null);
      setChapterId(null);
      setVariant(null);
      setScreen("admin-login");
      return;
    }
    setMode(m);
    reset();
  };
  const goSubjects = (id) => {
    setExamId(id);
    setSubjectId(null);
    setChapterId(null);
    setVariant(null);
    setScreen("subjects");
  };
  const goChapters = (subj) => {
    setSubjectId(subj.id);
    setChapterId(null);
    setVariant(null);
    if (subj.hasChapters) setScreen("chapters");
    else {
      setChapterId("none");
      setScreen("variant");
    }
  };
  const goInto = (chapId) => {
    setChapterId(chapId);
    setVariant(null);
    setScreen("variant");
  };
  const goVariant = (v) => {
    setVariant(v);
    setScreen(mode === "admin" ? "manage" : "quiz");
  };
  return /* @__PURE__ */ jsxs2("div", { style: styles.app, children: [
    /* @__PURE__ */ jsx2("style", { children: FONT_IMPORT }),
    /* @__PURE__ */ jsx2(
      TopBar,
      {
        mode,
        setMode: requestMode,
        onHome: reset,
        onHistory: goHistory,
        onDiag: goDiag,
        onSettings: goAdminSettings
      }
    ),
    /* @__PURE__ */ jsx2(Breadcrumb, { exam, subjectId, chapterId, onHome: reset, onExam: () => goSubjects(examId) }),
    /* @__PURE__ */ jsxs2("main", { style: styles.main, children: [
      screen === "home" && /* @__PURE__ */ jsx2(ExamGrid, { onPick: goSubjects }),
      screen === "history" && /* @__PURE__ */ jsx2(HistoryScreen, { initialName: studentName, onBack: reset }),
      screen === "diag" && /* @__PURE__ */ jsx2(DiagScreen, { onBack: reset }),
      screen === "admin-login" && /* @__PURE__ */ jsx2(
        AdminLoginScreen,
        {
          adminPin,
          onBack: () => {
            setMode("student");
            reset();
          },
          onUnlock: () => {
            setAdminUnlocked(true);
            setMode("admin");
            reset();
          },
          showToast
        }
      ),
      screen === "admin-settings" && /* @__PURE__ */ jsx2(
        AdminSettingsScreen,
        {
          adminPin,
          setAdminPin,
          onBack: reset,
          showToast
        }
      ),
      screen === "subjects" && exam && /* @__PURE__ */ jsx2(SubjectScreen, { exam, mode, onBack: reset, onPick: goChapters, showToast }),
      screen === "chapters" && exam && subjectId && /* @__PURE__ */ jsx2(ChapterScreen, { exam, subjectId, mode, onBack: () => setScreen("subjects"), onPick: goInto, showToast }),
      screen === "variant" && exam && subjectId && chapterId && /* @__PURE__ */ jsx2(
        VariantScreen,
        {
          exam,
          subjectId,
          chapterId,
          mode,
          onBack: () => setScreen(EXAMS.find((e) => e.id === examId) && chapterId !== "none" ? "chapters" : "subjects"),
          onPick: goVariant
        }
      ),
      screen === "manage" && exam && subjectId && chapterId && variant && /* @__PURE__ */ jsx2(
        ManageQuestions,
        {
          exam,
          subjectId,
          chapterId,
          variant,
          onBack: () => setScreen("variant"),
          showToast
        }
      ),
      screen === "quiz" && exam && subjectId && chapterId && variant && /* @__PURE__ */ jsx2(
        QuizScreen,
        {
          exam,
          subjectId,
          chapterId,
          variant,
          studentName,
          setStudentName,
          onBack: () => setScreen("variant"),
          showToast
        }
      )
    ] }),
    toast && /* @__PURE__ */ jsx2("div", { style: { ...styles.toast, ...toast.kind === "error" ? styles.toastError : {} }, children: toast.msg })
  ] });
}
function TopBar({ mode, setMode, onHome, onHistory, onDiag, onSettings }) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const close = () => setDrawerOpen(false);
  return /* @__PURE__ */ jsxs2("header", { style: styles.topbar, children: [
    /* @__PURE__ */ jsxs2("div", { style: { display: "flex", alignItems: "center", gap: 10 }, children: [
      /* @__PURE__ */ jsx2("button", { style: styles.historyBtn, onClick: () => setDrawerOpen(true), title: "Menu", children: /* @__PURE__ */ jsx2(Menu, { size: 18 }) }),
      /* @__PURE__ */ jsxs2("div", { style: styles.brand, onClick: onHome, children: [
        /* @__PURE__ */ jsx2("div", { style: styles.brandMark, children: /* @__PURE__ */ jsx2("img", { src: LOGO_SRC, alt: "PracOx", style: styles.brandMarkImg }) }),
        /* @__PURE__ */ jsxs2("div", { children: [
          /* @__PURE__ */ jsx2("div", { style: styles.brandName, children: "PracOx" }),
          /* @__PURE__ */ jsx2("div", { style: styles.brandSub, children: "Practice Through Failure" })
        ] })
      ] })
    ] }),
    drawerOpen && /* @__PURE__ */ jsxs2(Fragment, { children: [
      /* @__PURE__ */ jsx2("div", { style: styles.drawerBackdrop, onClick: close }),
      /* @__PURE__ */ jsxs2("div", { style: styles.drawerPanel, children: [
        /* @__PURE__ */ jsxs2("div", { style: styles.drawerHead, children: [
          /* @__PURE__ */ jsxs2("div", { style: styles.brand, onClick: () => {
            close();
            onHome();
          }, children: [
            /* @__PURE__ */ jsx2("div", { style: styles.brandMark, children: /* @__PURE__ */ jsx2("img", { src: LOGO_SRC, alt: "PracOx", style: styles.brandMarkImg }) }),
            /* @__PURE__ */ jsxs2("div", { children: [
              /* @__PURE__ */ jsx2("div", { style: styles.brandName, children: "PracOx" }),
              /* @__PURE__ */ jsx2("div", { style: styles.brandSub, children: "Practice Through Failure" })
            ] })
          ] }),
          /* @__PURE__ */ jsx2("button", { style: styles.iconGhostBtn, onClick: close, children: /* @__PURE__ */ jsx2(X, { size: 16 }) })
        ] }),
        /* @__PURE__ */ jsxs2("div", { style: styles.drawerSection, children: [
          /* @__PURE__ */ jsx2("div", { style: styles.drawerLabel, children: "Mode" }),
          mode === "student" ? /* @__PURE__ */ jsxs2("button", { style: styles.drawerItem, onClick: () => {
            close();
            setMode("admin");
          }, children: [
            /* @__PURE__ */ jsx2(Shield, { size: 16 }),
            " Switch to Admin mode"
          ] }) : /* @__PURE__ */ jsxs2("button", { style: styles.drawerItem, onClick: () => {
            close();
            setMode("student");
          }, children: [
            /* @__PURE__ */ jsx2(GraduationCap, { size: 16 }),
            " Switch to Student mode"
          ] })
        ] }),
        /* @__PURE__ */ jsxs2("div", { style: styles.drawerSection, children: [
          /* @__PURE__ */ jsx2("div", { style: styles.drawerLabel, children: mode === "admin" ? "Admin" : "Student" }),
          mode === "student" && /* @__PURE__ */ jsxs2("button", { style: styles.drawerItem, onClick: () => {
            close();
            onHistory();
          }, children: [
            /* @__PURE__ */ jsx2(History, { size: 16 }),
            " My score history"
          ] }),
          mode === "admin" && /* @__PURE__ */ jsxs2(Fragment, { children: [
            /* @__PURE__ */ jsxs2("button", { style: styles.drawerItem, onClick: () => {
              close();
              onSettings();
            }, children: [
              /* @__PURE__ */ jsx2(Settings, { size: 16 }),
              " Admin PIN settings"
            ] }),
            /* @__PURE__ */ jsxs2("button", { style: styles.drawerItem, onClick: () => {
              close();
              onDiag();
            }, children: [
              /* @__PURE__ */ jsx2(Bug, { size: 16 }),
              " Test storage connection"
            ] })
          ] })
        ] })
      ] })
    ] })
  ] });
}
function Breadcrumb({ exam, subjectId, chapterId, onHome, onExam }) {
  if (!exam) return null;
  return /* @__PURE__ */ jsxs2("div", { style: styles.crumbRow, children: [
    /* @__PURE__ */ jsx2("span", { style: styles.crumbLink, onClick: onHome, children: "All exams" }),
    /* @__PURE__ */ jsx2(ChevronRight, { size: 13, color: "var(--rule)" }),
    /* @__PURE__ */ jsx2("span", { style: subjectId ? styles.crumbLink : styles.crumbCurrent, onClick: subjectId ? onExam : void 0, children: exam.label }),
    subjectId && /* @__PURE__ */ jsxs2(Fragment, { children: [
      /* @__PURE__ */ jsx2(ChevronRight, { size: 13, color: "var(--rule)" }),
      /* @__PURE__ */ jsx2("span", { style: styles.crumbCurrent, children: subjectId })
    ] })
  ] });
}
function ExamGrid({ onPick }) {
  return /* @__PURE__ */ jsxs2("div", { children: [
    /* @__PURE__ */ jsx2(SectionHeading, { eyebrow: "Step 1", title: "Choose a class or exam" }),
    GROUPS.map((g) => /* @__PURE__ */ jsxs2("div", { style: { marginBottom: 28 }, children: [
      /* @__PURE__ */ jsx2("div", { style: styles.groupLabel, children: g }),
      /* @__PURE__ */ jsx2("div", { style: styles.grid, children: EXAMS.filter((e) => e.group === g).map((e) => /* @__PURE__ */ jsxs2("button", { style: styles.examCard, onClick: () => onPick(e.id), children: [
        /* @__PURE__ */ jsx2("span", { style: styles.examCardCode, children: e.id.toUpperCase().replace("CLASS-", "C") }),
        /* @__PURE__ */ jsx2("span", { style: styles.examCardLabel, children: e.label }),
        /* @__PURE__ */ jsx2(ChevronRight, { size: 16, color: "var(--ink-3)" })
      ] }, e.id)) })
    ] }, g))
  ] });
}
function SubjectScreen({ exam, mode, onBack, onPick, showToast }) {
  const [subjects, setSubjects] = useState(null);
  const [adding, setAdding] = useState(false);
  const [name, setName] = useState("");
  const [hasChapters, setHasChapters] = useState(true);
  const key = `subjects:${exam.id}`;
  const load = useCallback(async () => {
    const list = await sGet(key, []);
    setSubjects(list);
  }, [key]);
  useEffect(() => {
    load();
  }, [load]);
  const addSubject = async () => {
    const trimmed = name.trim();
    if (!trimmed) return;
    if (subjects.some((s) => s.name.toLowerCase() === trimmed.toLowerCase())) {
      showToast("That subject already exists", "error");
      return;
    }
    const prev = subjects;
    const next = [...subjects, { id: uid(), name: trimmed, hasChapters }];
    setSubjects(next);
    const res = await sSet(key, next);
    if (!res.ok) {
      setSubjects(prev);
      showToast(`Save failed: ${res.error}. ${APP_HINT}`, "error");
      return;
    }
    setName("");
    setHasChapters(true);
    setAdding(false);
    showToast("Subject added");
  };
  const removeSubject = async (id) => {
    const prev = subjects;
    const next = subjects.filter((s) => s.id !== id);
    setSubjects(next);
    const res = await sSet(key, next);
    if (!res.ok) {
      setSubjects(prev);
      showToast(`Remove failed: ${res.error}. ${APP_HINT}`, "error");
    }
  };
  if (subjects === null) return /* @__PURE__ */ jsx2(LoadingBlock, {});
  return /* @__PURE__ */ jsxs2("div", { children: [
    /* @__PURE__ */ jsx2(BackRow, { onBack, label: "All exams" }),
    /* @__PURE__ */ jsx2(SectionHeading, { eyebrow: "Step 2", title: `${exam.label} \u2014 choose a subject` }),
    subjects.length === 0 && mode === "student" && /* @__PURE__ */ jsx2(EmptyState, { icon: /* @__PURE__ */ jsx2(BookOpen, { size: 22 }), text: "No subjects have been added for this exam yet." }),
    /* @__PURE__ */ jsx2("div", { style: styles.grid, children: subjects.map((s) => /* @__PURE__ */ jsxs2("div", { style: styles.subjectCard, children: [
      /* @__PURE__ */ jsxs2("button", { style: styles.subjectCardMain, onClick: () => onPick(s), children: [
        /* @__PURE__ */ jsx2("span", { style: styles.subjectCardLabel, children: s.name }),
        /* @__PURE__ */ jsx2("span", { style: styles.subjectCardMeta, children: s.hasChapters ? /* @__PURE__ */ jsxs2(Fragment, { children: [
          /* @__PURE__ */ jsx2(Layers, { size: 12 }),
          " has chapters"
        ] }) : "no chapters" }),
        /* @__PURE__ */ jsx2(ChevronRight, { size: 16, color: "var(--ink-3)" })
      ] }),
      mode === "admin" && /* @__PURE__ */ jsx2("button", { style: styles.iconDangerBtn, onClick: () => removeSubject(s.id), title: "Remove subject", children: /* @__PURE__ */ jsx2(Trash2, { size: 14 }) })
    ] }, s.id)) }),
    mode === "admin" && /* @__PURE__ */ jsx2("div", { style: styles.addPanel, children: !adding ? /* @__PURE__ */ jsxs2("button", { style: styles.addBtn, onClick: () => setAdding(true), children: [
      /* @__PURE__ */ jsx2(Plus, { size: 15 }),
      " Add subject"
    ] }) : /* @__PURE__ */ jsxs2("div", { style: styles.addForm, children: [
      /* @__PURE__ */ jsx2(
        "input",
        {
          autoFocus: true,
          style: styles.input,
          placeholder: "Subject name, e.g. Mathematics",
          value: name,
          onChange: (e) => setName(e.target.value),
          onKeyDown: (e) => e.key === "Enter" && addSubject()
        }
      ),
      /* @__PURE__ */ jsxs2("label", { style: styles.checkboxRow, children: [
        /* @__PURE__ */ jsx2("input", { type: "checkbox", checked: hasChapters, onChange: (e) => setHasChapters(e.target.checked) }),
        "This subject has chapters"
      ] }),
      /* @__PURE__ */ jsxs2("div", { style: styles.formRow, children: [
        /* @__PURE__ */ jsx2("button", { style: styles.primaryBtn, onClick: addSubject, children: "Save" }),
        /* @__PURE__ */ jsx2("button", { style: styles.ghostBtn, onClick: () => {
          setAdding(false);
          setName("");
        }, children: "Cancel" })
      ] })
    ] }) })
  ] });
}
function ChapterScreen({ exam, subjectId, mode, onBack, onPick, showToast }) {
  const [subject, setSubject] = useState(null);
  const [chapters, setChapters] = useState(null);
  const [adding, setAdding] = useState(false);
  const [name, setName] = useState("");
  const subKey = `subjects:${exam.id}`;
  const chapKey = `chapters:${exam.id}:${subjectId}`;
  const load = useCallback(async () => {
    const subs = await sGet(subKey, []);
    setSubject(subs.find((s) => s.id === subjectId) || null);
    const chaps = await sGet(chapKey, []);
    setChapters(chaps);
  }, [subKey, chapKey, subjectId]);
  useEffect(() => {
    load();
  }, [load]);
  const addChapter = async () => {
    const trimmed = name.trim();
    if (!trimmed) return;
    if (chapters.some((c) => c.name.toLowerCase() === trimmed.toLowerCase())) {
      showToast("That chapter already exists", "error");
      return;
    }
    const prev = chapters;
    const next = [...chapters, { id: uid(), name: trimmed }];
    setChapters(next);
    const res = await sSet(chapKey, next);
    if (!res.ok) {
      setChapters(prev);
      showToast(`Save failed: ${res.error}. ${APP_HINT}`, "error");
      return;
    }
    setName("");
    setAdding(false);
    showToast("Chapter added");
  };
  const removeChapter = async (id) => {
    const prev = chapters;
    const next = chapters.filter((c) => c.id !== id);
    setChapters(next);
    const res = await sSet(chapKey, next);
    if (!res.ok) {
      setChapters(prev);
      showToast(`Remove failed: ${res.error}. ${APP_HINT}`, "error");
    }
  };
  if (chapters === null || subject === null) return /* @__PURE__ */ jsx2(LoadingBlock, {});
  return /* @__PURE__ */ jsxs2("div", { children: [
    /* @__PURE__ */ jsx2(BackRow, { onBack, label: "Subjects" }),
    /* @__PURE__ */ jsx2(SectionHeading, { eyebrow: "Step 3", title: `${subject.name} \u2014 choose a chapter` }),
    chapters.length === 0 && mode === "student" && /* @__PURE__ */ jsx2(EmptyState, { icon: /* @__PURE__ */ jsx2(Layers, { size: 22 }), text: "No chapters have been added for this subject yet." }),
    /* @__PURE__ */ jsx2("div", { style: styles.grid, children: chapters.map((c) => /* @__PURE__ */ jsxs2("div", { style: styles.subjectCard, children: [
      /* @__PURE__ */ jsxs2("button", { style: styles.subjectCardMain, onClick: () => onPick(c.id), children: [
        /* @__PURE__ */ jsx2("span", { style: styles.subjectCardLabel, children: c.name }),
        /* @__PURE__ */ jsx2(ChevronRight, { size: 16, color: "var(--ink-3)" })
      ] }),
      mode === "admin" && /* @__PURE__ */ jsx2("button", { style: styles.iconDangerBtn, onClick: () => removeChapter(c.id), title: "Remove chapter", children: /* @__PURE__ */ jsx2(Trash2, { size: 14 }) })
    ] }, c.id)) }),
    mode === "admin" && /* @__PURE__ */ jsx2("div", { style: styles.addPanel, children: !adding ? /* @__PURE__ */ jsxs2("button", { style: styles.addBtn, onClick: () => setAdding(true), children: [
      /* @__PURE__ */ jsx2(Plus, { size: 15 }),
      " Add chapter"
    ] }) : /* @__PURE__ */ jsxs2("div", { style: styles.addForm, children: [
      /* @__PURE__ */ jsx2(
        "input",
        {
          autoFocus: true,
          style: styles.input,
          placeholder: "Chapter name, e.g. Fractions",
          value: name,
          onChange: (e) => setName(e.target.value),
          onKeyDown: (e) => e.key === "Enter" && addChapter()
        }
      ),
      /* @__PURE__ */ jsxs2("div", { style: styles.formRow, children: [
        /* @__PURE__ */ jsx2("button", { style: styles.primaryBtn, onClick: addChapter, children: "Save" }),
        /* @__PURE__ */ jsx2("button", { style: styles.ghostBtn, onClick: () => {
          setAdding(false);
          setName("");
        }, children: "Cancel" })
      ] })
    ] }) })
  ] });
}
var VARIANTS = [
  { id: "off", label: "Non-timed", description: "All questions on one page, answer at your own pace \u2014 no clock." },
  { id: "per", label: "Each question timed", description: "One question per screen, each with its own countdown. Time's up auto-advances to the next one." },
  { id: "total", label: "Question bank on time", description: "One question per screen, sharing a single countdown for the whole set. Time's up auto-submits." }
];
function VariantScreen({ exam, subjectId, chapterId, mode, onBack, onPick }) {
  const [counts, setCounts] = useState(null);
  const load = useCallback(async () => {
    const results = await Promise.all(
      VARIANTS.map((v) => sGet(`questions:${exam.id}:${subjectId}:${chapterId}:${v.id}`, []))
    );
    setCounts(Object.fromEntries(VARIANTS.map((v, i) => [v.id, results[i].length])));
  }, [exam.id, subjectId, chapterId]);
  useEffect(() => {
    load();
  }, [load]);
  if (counts === null) return /* @__PURE__ */ jsx2(LoadingBlock, {});
  return /* @__PURE__ */ jsxs2("div", { children: [
    /* @__PURE__ */ jsx2(BackRow, { onBack, label: "Back" }),
    /* @__PURE__ */ jsx2(
      SectionHeading,
      {
        eyebrow: "Step 4",
        title: "Choose an option",
        sub: mode === "admin" ? "Pick which option to add questions to." : "Pick how you'd like to take this quiz."
      }
    ),
    /* @__PURE__ */ jsx2("div", { style: styles.grid, children: VARIANTS.map((v) => {
      const count = counts[v.id];
      const disabled = mode === "student" && count === 0;
      return /* @__PURE__ */ jsxs2(
        "button",
        {
          style: { ...styles.variantCard, ...disabled ? styles.variantCardDisabled : {} },
          onClick: () => !disabled && onPick(v.id),
          disabled,
          children: [
            /* @__PURE__ */ jsxs2("div", { style: styles.variantCardHead, children: [
              /* @__PURE__ */ jsx2("span", { style: styles.variantCardLabel, children: v.label }),
              /* @__PURE__ */ jsxs2("span", { style: styles.variantCardCount, children: [
                count,
                " question",
                count === 1 ? "" : "s"
              ] })
            ] }),
            /* @__PURE__ */ jsx2("div", { style: styles.variantCardDesc, children: v.description }),
            disabled && /* @__PURE__ */ jsx2("div", { style: styles.variantCardEmpty, children: "No questions yet" })
          ]
        },
        v.id
      );
    }) })
  ] });
}
function AutoTextarea({ style, minRows = 2, value, ...rest }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.height = "auto";
    el.style.height = `${el.scrollHeight}px`;
  }, [value]);
  return /* @__PURE__ */ jsx2(
    "textarea",
    {
      ref,
      rows: minRows,
      value,
      style: { ...style, overflow: "hidden" },
      ...rest
    }
  );
}
function ImageField({ image, onChange, showToast, label, compact }) {
  const [busy, setBusy] = useState(false);
  const inputRef = useRef(null);
  const handleFile = async (e) => {
    const file = e.target.files && e.target.files[0];
    e.target.value = "";
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      showToast("Please choose an image file", "error");
      return;
    }
    setBusy(true);
    try {
      const dataUrl = await readAndCompressImage(file);
      onChange(dataUrl);
    } catch (err) {
      showToast(err.message || `Couldn't read that ${label}`, "error");
    } finally {
      setBusy(false);
    }
  };
  return /* @__PURE__ */ jsxs2("div", { style: compact ? styles.imageFieldCompact : styles.imageField, children: [
    image ? /* @__PURE__ */ jsxs2("div", { style: styles.imagePreviewRow, children: [
      /* @__PURE__ */ jsx2("img", { src: image, alt: label, style: compact ? styles.optThumbLg : styles.qImagePreview }),
      /* @__PURE__ */ jsx2("button", { style: styles.iconDangerBtn, onClick: () => onChange(null), title: `Remove ${label}`, children: /* @__PURE__ */ jsx2(X, { size: 13 }) })
    ] }) : /* @__PURE__ */ jsxs2("button", { style: styles.imageAddBtn, onClick: () => inputRef.current && inputRef.current.click(), disabled: busy, type: "button", children: [
      busy ? /* @__PURE__ */ jsx2(Loader2, { size: 13, style: { animation: "spin 0.8s linear infinite" } }) : /* @__PURE__ */ jsx2(Image2, { size: 13 }),
      busy ? "Adding\u2026" : `Add ${label}`
    ] }),
    /* @__PURE__ */ jsx2("input", { ref: inputRef, type: "file", accept: "image/*", style: { display: "none" }, onChange: handleFile })
  ] });
}
var BLANK_Q = () => ({
  id: uid(),
  text: "",
  image: null,
  options: [
    { text: "", image: null },
    { text: "", image: null },
    { text: "", image: null },
    { text: "", image: null }
  ],
  correct: 0,
  explanation: "",
  timeSeconds: 60
});
function ManageQuestions({ exam, subjectId, chapterId, variant, onBack, showToast }) {
  const [questions, setQuestions] = useState(null);
  const [tab, setTab] = useState("list");
  const [draft, setDraft] = useState(BLANK_Q());
  const [editingId, setEditingId] = useState(null);
  const [bulkText, setBulkText] = useState("");
  const [totalSettings, setTotalSettings] = useState(null);
  const [printOpen, setPrintOpen] = useState(false);
  const key = `questions:${exam.id}:${subjectId}:${chapterId}:${variant}`;
  const settingsKey = `settings:${exam.id}:${subjectId}:${chapterId}:total`;
  const variantMeta = VARIANTS.find((v) => v.id === variant);
  const load = useCallback(async () => {
    setQuestions(await sGet(key, []));
  }, [key]);
  const loadSettings = useCallback(async () => {
    if (variant !== "total") {
      setTotalSettings({});
      return;
    }
    setTotalSettings(await sGet(settingsKey, { totalSeconds: 600 }));
  }, [settingsKey, variant]);
  useEffect(() => {
    load();
    loadSettings();
  }, [load, loadSettings]);
  const saveTotalSettings = async (next) => {
    const prev = totalSettings;
    setTotalSettings(next);
    const res = await sSet(settingsKey, next);
    if (!res.ok) {
      setTotalSettings(prev);
      showToast(`Save failed: ${res.error}. ${APP_HINT}`, "error");
    }
  };
  const startEdit = (q) => {
    setDraft({
      id: q.id,
      text: q.text || "",
      image: q.image || null,
      options: q.options.map((o) => ({ text: o.text || "", image: o.image || null })),
      correct: q.correct,
      explanation: q.explanation || "",
      timeSeconds: q.timeSeconds || 60
    });
    setEditingId(q.id);
    setTab("single");
  };
  const cancelEdit = () => {
    setDraft(BLANK_Q());
    setEditingId(null);
  };
  const saveSingle = async () => {
    const hasQ = draft.text.trim() || draft.image;
    const optsOk = draft.options.every((o) => o.text.trim() || o.image);
    if (!hasQ || !optsOk) {
      showToast("Add question text or an image, and text or an image for every option", "error");
      return;
    }
    const prev = questions;
    const next = editingId ? questions.map((q) => q.id === editingId ? { ...draft, id: editingId } : q) : [...questions, { ...draft, id: uid() }];
    setQuestions(next);
    const res = await sSet(key, next);
    if (!res.ok) {
      setQuestions(prev);
      showToast(`Save failed: ${res.error}. ${APP_HINT}`, "error");
      return;
    }
    setDraft(BLANK_Q());
    const wasEditing = !!editingId;
    setEditingId(null);
    if (wasEditing) {
      setTab("list");
      showToast("Question updated");
    } else {
      showToast("Question added");
    }
  };
  const removeQ = async (id) => {
    const prev = questions;
    const next = questions.filter((q) => q.id !== id);
    setQuestions(next);
    const res = await sSet(key, next);
    if (!res.ok) {
      setQuestions(prev);
      showToast(`Remove failed: ${res.error}. ${APP_HINT}`, "error");
      return;
    }
    if (editingId === id) cancelEdit();
  };
  const parseBulk = (text) => {
    const blocks = text.split(/\n\s*\n/).map((b) => b.trim()).filter(Boolean);
    const parsed = [];
    const errors = [];
    blocks.forEach((block, idx) => {
      const lines = block.split("\n").map((l) => l.trim()).filter(Boolean);
      let qText = "";
      const opts = [];
      let answerLetter = "";
      let explanation = "";
      lines.forEach((line) => {
        const qMatch = line.match(/^Q[:.)]\s*(.*)$/i);
        const optMatch = line.match(/^([A-D])[).]\s*(.*)$/i);
        const ansMatch = line.match(/^ANSWER[:.]?\s*([A-D])$/i);
        const expMatch = line.match(/^EXPLANATION[:.]?\s*(.*)$/i);
        if (qMatch) qText = qMatch[1];
        else if (optMatch) opts[optMatch[1].toUpperCase().charCodeAt(0) - 65] = optMatch[2];
        else if (ansMatch) answerLetter = ansMatch[1].toUpperCase();
        else if (expMatch) explanation = expMatch[1];
        else if (!qText) qText = line;
      });
      if (!qText || opts.filter(Boolean).length < 2 || !answerLetter) {
        errors.push(idx + 1);
        return;
      }
      while (opts.length < 4) opts.push(opts[opts.length] || "");
      parsed.push({
        id: uid(),
        text: qText,
        image: null,
        options: opts.slice(0, 4).map((o) => ({ text: o || "", image: null })),
        correct: answerLetter.charCodeAt(0) - 65,
        explanation
      });
    });
    return { parsed, errors };
  };
  const saveBulk = async () => {
    const { parsed, errors } = parseBulk(bulkText);
    if (parsed.length === 0) {
      showToast("Couldn't find any valid questions in that text", "error");
      return;
    }
    const prev = questions;
    const next = [...questions, ...parsed];
    setQuestions(next);
    const res = await sSet(key, next);
    if (!res.ok) {
      setQuestions(prev);
      showToast(`Save failed: ${res.error}. ${APP_HINT}`, "error");
      return;
    }
    setBulkText("");
    setTab("list");
    showToast(
      errors.length ? `Added ${parsed.length} question(s). ${errors.length} block(s) couldn't be read.` : `Added ${parsed.length} question(s).`
    );
  };
  if (questions === null) return /* @__PURE__ */ jsx2(LoadingBlock, {});
  return /* @__PURE__ */ jsxs2("div", { children: [
    /* @__PURE__ */ jsx2(BackRow, { onBack, label: "Back" }),
    /* @__PURE__ */ jsx2(SectionHeading, { eyebrow: "Admin", title: `Manage questions \u2014 ${variantMeta.label}`, sub: `${questions.length} question${questions.length === 1 ? "" : "s"} saved here` }),
    variant === "off" && questions.length > 0 && /* @__PURE__ */ jsxs2("button", { style: { ...styles.ghostBtn, marginBottom: 14 }, onClick: () => setPrintOpen(true), children: [
      /* @__PURE__ */ jsx2(Printer, { size: 14 }),
      " Print / export PDF"
    ] }),
    variant !== "off" && /* @__PURE__ */ jsxs2("div", { style: styles.printHint, children: [
      /* @__PURE__ */ jsx2(Printer, { size: 13 }),
      " PDF export uses the Non-timed question bank \u2014 switch to that option to print."
    ] }),
    printOpen && variant === "off" && /* @__PURE__ */ jsx2(
      PrintExportModal,
      {
        questions,
        examLabel: exam.label,
        onClose: () => setPrintOpen(false)
      }
    ),
    /* @__PURE__ */ jsxs2("div", { style: styles.tabs, children: [
      /* @__PURE__ */ jsxs2("button", { style: { ...styles.tabBtn, ...tab === "list" ? styles.tabBtnActive : {} }, onClick: () => {
        cancelEdit();
        setTab("list");
      }, children: [
        /* @__PURE__ */ jsx2(ClipboardList, { size: 14 }),
        " Questions"
      ] }),
      /* @__PURE__ */ jsxs2("button", { style: { ...styles.tabBtn, ...tab === "single" ? styles.tabBtnActive : {} }, onClick: () => {
        cancelEdit();
        setTab("single");
      }, children: [
        /* @__PURE__ */ jsx2(Plus, { size: 14 }),
        " Add one"
      ] }),
      /* @__PURE__ */ jsxs2("button", { style: { ...styles.tabBtn, ...tab === "bulk" ? styles.tabBtnActive : {} }, onClick: () => {
        cancelEdit();
        setTab("bulk");
      }, children: [
        /* @__PURE__ */ jsx2(Layers, { size: 14 }),
        " Paste many"
      ] }),
      variant === "total" && /* @__PURE__ */ jsxs2("button", { style: { ...styles.tabBtn, ...tab === "timing" ? styles.tabBtnActive : {} }, onClick: () => {
        cancelEdit();
        setTab("timing");
      }, children: [
        /* @__PURE__ */ jsx2(Timer, { size: 14 }),
        " Timing"
      ] })
    ] }),
    tab === "timing" && variant === "total" && totalSettings && /* @__PURE__ */ jsx2(TotalTimingPanel, { settings: totalSettings, onSave: saveTotalSettings }),
    tab === "list" && /* @__PURE__ */ jsx2("div", { children: questions.length === 0 ? /* @__PURE__ */ jsx2(EmptyState, { icon: /* @__PURE__ */ jsx2(ClipboardList, { size: 22 }), text: "No questions yet. Use \u201CAdd one\u201D or \u201CPaste many\u201D to get started." }) : /* @__PURE__ */ jsx2("div", { style: styles.qList, children: questions.map((q, i) => /* @__PURE__ */ jsxs2("div", { style: styles.qCard, children: [
      /* @__PURE__ */ jsxs2("div", { style: styles.qCardHead, children: [
        /* @__PURE__ */ jsxs2("span", { style: styles.qNum, children: [
          "Q",
          i + 1
        ] }),
        /* @__PURE__ */ jsxs2("div", { style: { display: "flex", gap: 6 }, children: [
          /* @__PURE__ */ jsx2("button", { style: styles.iconEditBtn, onClick: () => startEdit(q), title: "Edit question", children: /* @__PURE__ */ jsx2(Pencil, { size: 13 }) }),
          /* @__PURE__ */ jsx2("button", { style: styles.iconDangerBtn, onClick: () => removeQ(q.id), title: "Delete question", children: /* @__PURE__ */ jsx2(Trash2, { size: 13 }) })
        ] })
      ] }),
      q.text && /* @__PURE__ */ jsx2("div", { style: styles.qText, children: q.text }),
      q.image && /* @__PURE__ */ jsx2("img", { src: q.image, alt: "Question", style: styles.qImage }),
      /* @__PURE__ */ jsx2("div", { style: styles.optList, children: q.options.map((o, oi) => /* @__PURE__ */ jsxs2("div", { style: { ...styles.optRow, ...oi === q.correct ? styles.optRowCorrect : {} }, children: [
        /* @__PURE__ */ jsx2("span", { style: styles.optLetter, children: String.fromCharCode(65 + oi) }),
        o.image && /* @__PURE__ */ jsx2("img", { src: o.image, alt: "", style: styles.optThumb }),
        o.text,
        oi === q.correct && /* @__PURE__ */ jsx2(Check, { size: 13, style: { marginLeft: "auto" } })
      ] }, oi)) }),
      q.explanation && /* @__PURE__ */ jsxs2("div", { style: styles.explanationNote, children: [
        /* @__PURE__ */ jsx2("span", { style: styles.explanationLabel, children: "Explanation" }),
        " ",
        q.explanation
      ] })
    ] }, q.id)) }) }),
    tab === "single" && /* @__PURE__ */ jsxs2("div", { style: styles.singleForm, children: [
      editingId && /* @__PURE__ */ jsxs2("div", { style: styles.editingBanner, children: [
        /* @__PURE__ */ jsx2(Pencil, { size: 12 }),
        " Editing an existing question"
      ] }),
      /* @__PURE__ */ jsx2("label", { style: styles.fieldLabel, children: "Question" }),
      /* @__PURE__ */ jsx2(
        AutoTextarea,
        {
          style: styles.textarea,
          minRows: 2,
          value: draft.text,
          onChange: (e) => setDraft({ ...draft, text: e.target.value }),
          placeholder: "Type the question here (optional if you add an image)"
        }
      ),
      /* @__PURE__ */ jsx2(
        ImageField,
        {
          image: draft.image,
          onChange: (img) => setDraft({ ...draft, image: img }),
          showToast,
          label: "question image"
        }
      ),
      draft.options.map((o, i) => /* @__PURE__ */ jsxs2("div", { style: styles.optEditBlock, children: [
        /* @__PURE__ */ jsxs2("div", { style: styles.optEditRow, children: [
          /* @__PURE__ */ jsx2(
            "button",
            {
              style: { ...styles.optRadio, ...draft.correct === i ? styles.optRadioActive : {} },
              onClick: () => setDraft({ ...draft, correct: i }),
              title: "Mark as correct answer",
              children: String.fromCharCode(65 + i)
            }
          ),
          /* @__PURE__ */ jsx2(
            "input",
            {
              style: styles.input,
              value: o.text,
              placeholder: `Option ${String.fromCharCode(65 + i)} (optional if you add an image)`,
              onChange: (e) => {
                const opts = [...draft.options];
                opts[i] = { ...opts[i], text: e.target.value };
                setDraft({ ...draft, options: opts });
              }
            }
          )
        ] }),
        /* @__PURE__ */ jsx2(
          ImageField,
          {
            image: o.image,
            onChange: (img) => {
              const opts = [...draft.options];
              opts[i] = { ...opts[i], image: img };
              setDraft({ ...draft, options: opts });
            },
            showToast,
            label: `option ${String.fromCharCode(65 + i)} image`,
            compact: true
          }
        )
      ] }, i)),
      /* @__PURE__ */ jsx2("div", { style: styles.hint, children: "Tap a letter to mark the correct option. Each question and option needs text or an image (or both)." }),
      /* @__PURE__ */ jsx2("label", { style: styles.fieldLabel, children: "Explanation (optional)" }),
      /* @__PURE__ */ jsx2(
        AutoTextarea,
        {
          style: styles.textarea,
          minRows: 2,
          value: draft.explanation,
          onChange: (e) => setDraft({ ...draft, explanation: e.target.value }),
          placeholder: "Shown to students after they submit \u2014 leave blank if not needed"
        }
      ),
      variant === "per" && /* @__PURE__ */ jsxs2(Fragment, { children: [
        /* @__PURE__ */ jsx2("label", { style: styles.fieldLabel, children: "Time limit for this question (seconds)" }),
        /* @__PURE__ */ jsx2(
          "input",
          {
            type: "number",
            min: "5",
            style: styles.input,
            value: draft.timeSeconds,
            onChange: (e) => setDraft({ ...draft, timeSeconds: Math.max(5, parseInt(e.target.value) || 60) })
          }
        )
      ] }),
      /* @__PURE__ */ jsxs2("div", { style: styles.formRow, children: [
        /* @__PURE__ */ jsx2("button", { style: styles.primaryBtn, onClick: saveSingle, children: editingId ? /* @__PURE__ */ jsxs2(Fragment, { children: [
          /* @__PURE__ */ jsx2(Check, { size: 14 }),
          " Save changes"
        ] }) : /* @__PURE__ */ jsxs2(Fragment, { children: [
          /* @__PURE__ */ jsx2(Plus, { size: 14 }),
          " Add question"
        ] }) }),
        editingId && /* @__PURE__ */ jsx2("button", { style: styles.ghostBtn, onClick: cancelEdit, children: "Cancel edit" })
      ] })
    ] }),
    tab === "bulk" && /* @__PURE__ */ jsxs2("div", { style: styles.singleForm, children: [
      /* @__PURE__ */ jsxs2("div", { style: styles.bulkHelp, children: [
        /* @__PURE__ */ jsx2("div", { style: styles.bulkHelpTitle, children: "Paste format \u2014 one blank line between questions. EXPLANATION line is optional:" }),
        /* @__PURE__ */ jsx2("pre", { style: styles.bulkExample, children: `Q: What is the capital of India?
A) Mumbai
B) New Delhi
C) Kolkata
D) Chennai
ANSWER: B
EXPLANATION: New Delhi has been India's capital since 1911.

Q: 5 + 7 = ?
A) 11
B) 12
C) 13
D) 10
ANSWER: B` })
      ] }),
      /* @__PURE__ */ jsx2(
        "textarea",
        {
          style: { ...styles.textarea, minHeight: 180 },
          rows: 10,
          value: bulkText,
          onChange: (e) => setBulkText(e.target.value),
          placeholder: "Paste your questions here..."
        }
      ),
      /* @__PURE__ */ jsx2("div", { style: styles.formRow, children: /* @__PURE__ */ jsxs2("button", { style: styles.primaryBtn, onClick: saveBulk, children: [
        /* @__PURE__ */ jsx2(Plus, { size: 14 }),
        " Add all questions"
      ] }) })
    ] })
  ] });
}
function TotalTimingPanel({ settings, onSave }) {
  const [minutes, setMinutes] = useState(Math.round((settings.totalSeconds || 600) / 60));
  const save = () => {
    onSave({ totalSeconds: Math.max(1, minutes) * 60 });
  };
  return /* @__PURE__ */ jsxs2("div", { style: styles.singleForm, children: [
    /* @__PURE__ */ jsx2("label", { style: styles.fieldLabel, children: "Total time for the whole set (minutes)" }),
    /* @__PURE__ */ jsx2(
      "input",
      {
        type: "number",
        min: "1",
        style: styles.input,
        value: minutes,
        onChange: (e) => setMinutes(Math.max(1, parseInt(e.target.value) || 1))
      }
    ),
    /* @__PURE__ */ jsx2("div", { style: styles.hint, children: "This one countdown covers the whole quiz \u2014 when it hits zero, it auto-submits whatever's answered." }),
    /* @__PURE__ */ jsx2("div", { style: styles.formRow, children: /* @__PURE__ */ jsxs2("button", { style: styles.primaryBtn, onClick: save, children: [
      /* @__PURE__ */ jsx2(Check, { size: 14 }),
      " Save timing settings"
    ] }) })
  ] });
}
function PrintExportModal({ questions, examLabel, onClose }) {
  const [withAnswers, setWithAnswers] = useState(null);
  const doPrint = (answers) => {
    setWithAnswers(answers);
    setTimeout(() => window.print(), 80);
  };
  if (withAnswers === null) {
    return /* @__PURE__ */ jsx2("div", { style: styles.modalBackdrop, onClick: onClose, children: /* @__PURE__ */ jsxs2("div", { style: styles.modalCard, onClick: (e) => e.stopPropagation(), children: [
      /* @__PURE__ */ jsx2("div", { style: styles.fieldLabel, children: "Export as" }),
      /* @__PURE__ */ jsxs2("div", { style: styles.formRow, children: [
        /* @__PURE__ */ jsx2("button", { style: styles.primaryBtn, onClick: () => doPrint(false), children: "Questions only" }),
        /* @__PURE__ */ jsx2("button", { style: styles.primaryBtn, onClick: () => doPrint(true), children: "With answer key" })
      ] }),
      /* @__PURE__ */ jsx2("button", { style: { ...styles.ghostBtn, marginTop: 10, width: "100%", justifyContent: "center" }, onClick: onClose, children: "Cancel" }),
      /* @__PURE__ */ jsx2("div", { style: styles.hint, children: `Your browser's print dialog will open next \u2014 choose "Save as PDF" there to download it.` })
    ] }) });
  }
  return /* @__PURE__ */ jsxs2("div", { id: "print-root", className: "pracox-print-layer", style: styles.printLayer, children: [
    /* @__PURE__ */ jsxs2("h1", { style: { fontFamily: "'Fraunces', serif" }, children: [
      examLabel,
      " \u2014 Question Paper",
      withAnswers ? " (Answer Key)" : ""
    ] }),
    questions.map((q, i) => /* @__PURE__ */ jsxs2("div", { style: { marginBottom: 18, pageBreakInside: "avoid" }, children: [
      /* @__PURE__ */ jsxs2("div", { style: { fontWeight: 600, marginBottom: 4 }, children: [
        "Q",
        i + 1,
        ". ",
        q.text
      ] }),
      q.image && /* @__PURE__ */ jsx2("img", { src: q.image, alt: "", style: { maxWidth: 300, display: "block", marginBottom: 6 } }),
      q.options.map((o, oi) => /* @__PURE__ */ jsxs2("div", { style: { marginLeft: 16, ...withAnswers && oi === q.correct ? { fontWeight: 700, color: "#2F9E44" } : {} }, children: [
        String.fromCharCode(65 + oi),
        ". ",
        o.text,
        withAnswers && oi === q.correct ? "  \u2713" : ""
      ] }, oi)),
      withAnswers && q.explanation && /* @__PURE__ */ jsxs2("div", { style: { marginLeft: 16, marginTop: 4, fontStyle: "italic", color: "#555" }, children: [
        "Explanation: ",
        q.explanation
      ] })
    ] }, q.id)),
    /* @__PURE__ */ jsx2("div", { className: "no-print", style: { marginTop: 20 }, children: /* @__PURE__ */ jsx2("button", { style: styles.ghostBtn, onClick: onClose, children: "Close print view" }) })
  ] });
}
function QuizScreen({ exam, subjectId, chapterId, variant, studentName, setStudentName, onBack, showToast }) {
  const [questions, setQuestions] = useState(null);
  const [totalSeconds, setTotalSeconds] = useState(null);
  const [started, setStarted] = useState(false);
  const [nameInput, setNameInput] = useState(studentName);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [saving, setSaving] = useState(false);
  const [saveFailed, setSaveFailed] = useState(false);
  const [saveError, setSaveError] = useState("");
  const key = `questions:${exam.id}:${subjectId}:${chapterId}:${variant}`;
  const settingsKey = `settings:${exam.id}:${subjectId}:${chapterId}:total`;
  const [subjectName, setSubjectName] = useState(subjectId);
  const [chapterName, setChapterName] = useState(chapterId === "none" ? null : chapterId);
  useEffect(() => {
    (async () => setQuestions(await sGet(key, [])))();
  }, [key]);
  useEffect(() => {
    (async () => {
      if (variant !== "total") {
        setTotalSeconds(600);
        return;
      }
      const s = await sGet(settingsKey, { totalSeconds: 600 });
      setTotalSeconds(s.totalSeconds || 600);
    })();
  }, [settingsKey, variant]);
  useEffect(() => {
    (async () => {
      const subs = await sGet(`subjects:${exam.id}`, []);
      const sub = subs.find((s) => s.id === subjectId);
      if (sub) setSubjectName(sub.name);
      if (chapterId !== "none") {
        const chaps = await sGet(`chapters:${exam.id}:${subjectId}`, []);
        const chap = chaps.find((c) => c.id === chapterId);
        if (chap) setChapterName(chap.name);
      }
    })();
  }, [exam.id, subjectId, chapterId]);
  const score = submitted ? questions.filter((q) => answers[q.id] === q.correct).length : 0;
  const beginQuiz = () => {
    const trimmed = nameInput.trim();
    if (!trimmed) {
      showToast("Enter your name to start", "error");
      return;
    }
    setStudentName(trimmed);
    setStarted(true);
  };
  const submitQuiz = async () => {
    setSubmitted(true);
    setSaving(true);
    const finalScore = questions.filter((q) => answers[q.id] === q.correct).length;
    const recKey = `scores:${studentName.trim().toLowerCase()}`;
    const history = await sGet(recKey, []);
    const record = {
      id: uid(),
      date: (/* @__PURE__ */ new Date()).toISOString(),
      examLabel: exam.label,
      subjectId,
      subjectName,
      chapterId,
      chapterName,
      variantLabel: (VARIANTS.find((v) => v.id === variant) || {}).label || variant,
      score: finalScore,
      total: questions.length
    };
    const res = await sSet(recKey, [record, ...history]);
    setSaveFailed(!res.ok);
    setSaveError(res.error || "");
    setSaving(false);
  };
  if (questions === null || totalSeconds === null) return /* @__PURE__ */ jsx2(LoadingBlock, {});
  if (questions.length === 0) {
    return /* @__PURE__ */ jsxs2("div", { children: [
      /* @__PURE__ */ jsx2(BackRow, { onBack, label: "Subjects" }),
      /* @__PURE__ */ jsx2(EmptyState, { icon: /* @__PURE__ */ jsx2(AlertCircle, { size: 22 }), text: "No questions have been added here yet. Check back later." })
    ] });
  }
  if (!started) {
    return /* @__PURE__ */ jsxs2("div", { children: [
      /* @__PURE__ */ jsx2(BackRow, { onBack, label: "Subjects" }),
      /* @__PURE__ */ jsx2(SectionHeading, { eyebrow: "Step 4", title: "Before you begin" }),
      /* @__PURE__ */ jsxs2("div", { style: styles.startCard, children: [
        /* @__PURE__ */ jsxs2("div", { style: styles.startMeta, children: [
          questions.length,
          " question",
          questions.length === 1 ? "" : "s",
          " \xB7 MCQ"
        ] }),
        /* @__PURE__ */ jsx2("label", { style: styles.fieldLabel, children: "Your name" }),
        /* @__PURE__ */ jsx2(
          "input",
          {
            autoFocus: true,
            style: styles.input,
            value: nameInput,
            onChange: (e) => setNameInput(e.target.value),
            placeholder: "Enter your name",
            onKeyDown: (e) => e.key === "Enter" && beginQuiz()
          }
        ),
        /* @__PURE__ */ jsxs2("button", { style: { ...styles.primaryBtn, marginTop: 14 }, onClick: beginQuiz, children: [
          "Start quiz ",
          /* @__PURE__ */ jsx2(ChevronRight, { size: 15 })
        ] })
      ] })
    ] });
  }
  if (submitted) {
    return /* @__PURE__ */ jsxs2("div", { children: [
      /* @__PURE__ */ jsx2(ResultCard, { score, total: questions.length, saving, saveFailed, saveError }),
      /* @__PURE__ */ jsx2("div", { style: styles.qList, children: questions.map((q, i) => {
        const given = answers[q.id];
        const isCorrect = given === q.correct;
        return /* @__PURE__ */ jsxs2("div", { style: styles.qCard, children: [
          /* @__PURE__ */ jsxs2("div", { style: styles.qCardHead, children: [
            /* @__PURE__ */ jsxs2("span", { style: styles.qNum, children: [
              "Q",
              i + 1
            ] }),
            isCorrect ? /* @__PURE__ */ jsxs2("span", { style: styles.badgeCorrect, children: [
              /* @__PURE__ */ jsx2(Check, { size: 12 }),
              " Correct"
            ] }) : /* @__PURE__ */ jsxs2("span", { style: styles.badgeWrong, children: [
              /* @__PURE__ */ jsx2(X, { size: 12 }),
              " Incorrect"
            ] })
          ] }),
          q.text && /* @__PURE__ */ jsx2("div", { style: styles.qText, children: q.text }),
          q.image && /* @__PURE__ */ jsx2("img", { src: q.image, alt: "Question", style: styles.qImage }),
          /* @__PURE__ */ jsx2("div", { style: styles.optList, children: q.options.map((o, oi) => {
            let s = styles.optRow;
            if (oi === q.correct) s = { ...s, ...styles.optRowCorrect };
            else if (oi === given) s = { ...s, ...styles.optRowWrong };
            return /* @__PURE__ */ jsxs2("div", { style: s, children: [
              /* @__PURE__ */ jsx2("span", { style: styles.optLetter, children: String.fromCharCode(65 + oi) }),
              o.image && /* @__PURE__ */ jsx2("img", { src: o.image, alt: "", style: styles.optThumb }),
              o.text,
              oi === q.correct && /* @__PURE__ */ jsx2(Check, { size: 13, style: { marginLeft: "auto" } }),
              oi === given && oi !== q.correct && /* @__PURE__ */ jsx2(X, { size: 13, style: { marginLeft: "auto" } })
            ] }, oi);
          }) }),
          q.explanation && /* @__PURE__ */ jsxs2("div", { style: styles.explanationNote, children: [
            /* @__PURE__ */ jsx2("span", { style: styles.explanationLabel, children: "Explanation" }),
            " ",
            q.explanation
          ] })
        ] }, q.id);
      }) }),
      /* @__PURE__ */ jsxs2("button", { style: { ...styles.ghostBtn, marginTop: 18 }, onClick: onBack, children: [
        /* @__PURE__ */ jsx2(ArrowLeft, { size: 14 }),
        " Back to subjects"
      ] })
    ] });
  }
  const answeredCount = Object.keys(answers).length;
  if (variant !== "off") {
    return /* @__PURE__ */ jsx2(
      TimedQuizRunner,
      {
        questions,
        settings: { timingMode: variant, totalSeconds },
        studentName,
        answers,
        setAnswers,
        onSubmit: submitQuiz
      }
    );
  }
  return /* @__PURE__ */ jsxs2("div", { children: [
    /* @__PURE__ */ jsxs2("div", { style: styles.quizProgress, children: [
      /* @__PURE__ */ jsx2("span", { children: studentName }),
      /* @__PURE__ */ jsxs2("span", { children: [
        answeredCount,
        " / ",
        questions.length,
        " answered"
      ] })
    ] }),
    /* @__PURE__ */ jsx2("div", { style: styles.qList, children: questions.map((q, i) => /* @__PURE__ */ jsxs2("div", { style: styles.qCard, children: [
      /* @__PURE__ */ jsx2("div", { style: styles.qCardHead, children: /* @__PURE__ */ jsxs2("span", { style: styles.qNum, children: [
        "Q",
        i + 1
      ] }) }),
      q.text && /* @__PURE__ */ jsx2("div", { style: styles.qText, children: q.text }),
      q.image && /* @__PURE__ */ jsx2("img", { src: q.image, alt: "Question", style: styles.qImage }),
      /* @__PURE__ */ jsx2("div", { style: styles.optList, children: q.options.map((o, oi) => /* @__PURE__ */ jsxs2(
        "button",
        {
          style: { ...styles.optButton, ...answers[q.id] === oi ? styles.optButtonActive : {} },
          onClick: () => setAnswers({ ...answers, [q.id]: oi }),
          children: [
            /* @__PURE__ */ jsx2("span", { style: styles.optLetter, children: String.fromCharCode(65 + oi) }),
            o.image && /* @__PURE__ */ jsx2("img", { src: o.image, alt: "", style: styles.optThumb }),
            o.text
          ]
        },
        oi
      )) })
    ] }, q.id)) }),
    /* @__PURE__ */ jsxs2(
      "button",
      {
        style: { ...styles.primaryBtn, marginTop: 8, width: "100%", justifyContent: "center", opacity: answeredCount < questions.length ? 0.55 : 1 },
        onClick: submitQuiz,
        disabled: answeredCount < questions.length,
        children: [
          /* @__PURE__ */ jsx2(Stamp, { size: 15 }),
          " Submit answers"
        ]
      }
    ),
    answeredCount < questions.length && /* @__PURE__ */ jsx2("div", { style: styles.hint, children: "Answer every question to submit." })
  ] });
}
function TimedQuizRunner({ questions, settings, studentName, answers, setAnswers, onSubmit }) {
  const [index, setIndex] = useState(0);
  const isPer = settings.timingMode === "per";
  const q = questions[index];
  const isLast = index === questions.length - 1;
  const perDuration = isPer ? q.timeSeconds || 60 : null;
  const [secondsLeft, setSecondsLeft] = useState(isPer ? perDuration : settings.totalSeconds);
  const submittedRef = useRef(false);
  const onSubmitRef = useRef(onSubmit);
  useEffect(() => {
    onSubmitRef.current = onSubmit;
  }, [onSubmit]);
  useEffect(() => {
    if (!isPer) return;
    setSecondsLeft(q.timeSeconds || 60);
    const interval = setInterval(() => {
      setSecondsLeft((s) => {
        if (s <= 1) {
          clearInterval(interval);
          if (index < questions.length - 1) {
            setIndex((i) => i + 1);
          } else if (!submittedRef.current) {
            submittedRef.current = true;
            onSubmitRef.current();
          }
          return 0;
        }
        return s - 1;
      });
    }, 1e3);
    return () => clearInterval(interval);
  }, [isPer, index]);
  useEffect(() => {
    if (isPer) return;
    const interval = setInterval(() => {
      setSecondsLeft((s) => {
        if (s <= 1) {
          clearInterval(interval);
          if (!submittedRef.current) {
            submittedRef.current = true;
            onSubmitRef.current();
          }
          return 0;
        }
        return s - 1;
      });
    }, 1e3);
    return () => clearInterval(interval);
  }, [isPer]);
  const fmtTime = (s) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;
  const duration = isPer ? perDuration : settings.totalSeconds;
  const pct = Math.max(0, Math.min(100, secondsLeft / duration * 100));
  return /* @__PURE__ */ jsxs2("div", { children: [
    /* @__PURE__ */ jsxs2("div", { style: styles.quizProgress, children: [
      /* @__PURE__ */ jsx2("span", { children: studentName }),
      /* @__PURE__ */ jsxs2("span", { children: [
        "Question ",
        index + 1,
        " of ",
        questions.length
      ] })
    ] }),
    /* @__PURE__ */ jsxs2("div", { style: styles.timerRow, children: [
      /* @__PURE__ */ jsx2(Timer, { size: 14 }),
      /* @__PURE__ */ jsx2("span", { style: styles.timerText, children: fmtTime(secondsLeft) }),
      /* @__PURE__ */ jsx2("div", { style: styles.timerBarTrack, children: /* @__PURE__ */ jsx2("div", { style: { ...styles.timerBarFill, width: `${pct}%`, background: pct < 20 ? "var(--bad)" : "var(--gold)" } }) })
    ] }),
    /* @__PURE__ */ jsxs2("div", { style: styles.qCard, children: [
      /* @__PURE__ */ jsx2("div", { style: styles.qCardHead, children: /* @__PURE__ */ jsxs2("span", { style: styles.qNum, children: [
        "Q",
        index + 1
      ] }) }),
      q.text && /* @__PURE__ */ jsx2("div", { style: styles.qText, children: q.text }),
      q.image && /* @__PURE__ */ jsx2("img", { src: q.image, alt: "Question", style: styles.qImage }),
      /* @__PURE__ */ jsx2("div", { style: styles.optList, children: q.options.map((o, oi) => /* @__PURE__ */ jsxs2(
        "button",
        {
          style: { ...styles.optButton, ...answers[q.id] === oi ? styles.optButtonActive : {} },
          onClick: () => setAnswers({ ...answers, [q.id]: oi }),
          children: [
            /* @__PURE__ */ jsx2("span", { style: styles.optLetter, children: String.fromCharCode(65 + oi) }),
            o.image && /* @__PURE__ */ jsx2("img", { src: o.image, alt: "", style: styles.optThumb }),
            o.text
          ]
        },
        oi
      )) })
    ] }),
    /* @__PURE__ */ jsxs2("div", { style: styles.formRow, children: [
      !isPer && index > 0 && /* @__PURE__ */ jsxs2("button", { style: styles.ghostBtn, onClick: () => setIndex(index - 1), children: [
        /* @__PURE__ */ jsx2(ArrowLeft, { size: 14 }),
        " Previous"
      ] }),
      !isLast ? /* @__PURE__ */ jsxs2("button", { style: { ...styles.primaryBtn, flex: 1, justifyContent: "center" }, onClick: () => setIndex(index + 1), children: [
        "Next ",
        /* @__PURE__ */ jsx2(ChevronRight, { size: 15 })
      ] }) : /* @__PURE__ */ jsxs2(
        "button",
        {
          style: { ...styles.primaryBtn, flex: 1, justifyContent: "center" },
          onClick: () => {
            submittedRef.current = true;
            onSubmitRef.current();
          },
          children: [
            /* @__PURE__ */ jsx2(Stamp, { size: 15 }),
            " Submit answers"
          ]
        }
      )
    ] }),
    !isPer && !isLast && /* @__PURE__ */ jsx2(
      "button",
      {
        style: { ...styles.ghostBtn, marginTop: 8, width: "100%", justifyContent: "center" },
        onClick: () => {
          submittedRef.current = true;
          onSubmitRef.current();
        },
        children: "Submit now"
      }
    )
  ] });
}
function ResultCard({ score, total, saving, saveFailed, saveError }) {
  const pct = Math.round(score / total * 100);
  let note = "Result saved to your history.";
  if (saving) note = "Saving your result\u2026";
  else if (saveFailed) note = `Couldn't save: ${saveError}. ${APP_HINT}`;
  return /* @__PURE__ */ jsxs2("div", { style: styles.resultCard, children: [
    /* @__PURE__ */ jsx2("div", { style: styles.resultStamp, children: /* @__PURE__ */ jsx2(Award, { size: 26 }) }),
    /* @__PURE__ */ jsxs2("div", { style: styles.resultScore, children: [
      score,
      /* @__PURE__ */ jsxs2("span", { style: styles.resultTotal, children: [
        "/",
        total
      ] })
    ] }),
    /* @__PURE__ */ jsxs2("div", { style: styles.resultPct, children: [
      pct,
      "% correct"
    ] }),
    /* @__PURE__ */ jsx2("div", { style: { ...styles.resultNote, ...saveFailed ? { color: "var(--bad)" } : {} }, children: note })
  ] });
}
function HistoryScreen({ initialName, onBack }) {
  const [nameInput, setNameInput] = useState(initialName || "");
  const [records, setRecords] = useState(null);
  const [searched, setSearched] = useState(false);
  const search = async () => {
    const trimmed = nameInput.trim();
    if (!trimmed) return;
    const list = await sGet(`scores:${trimmed.toLowerCase()}`, []);
    setRecords(list);
    setSearched(true);
  };
  return /* @__PURE__ */ jsxs2("div", { children: [
    /* @__PURE__ */ jsx2(BackRow, { onBack, label: "All exams" }),
    /* @__PURE__ */ jsx2(SectionHeading, { eyebrow: "Score history", title: "Look up your results" }),
    /* @__PURE__ */ jsxs2("div", { style: styles.startCard, children: [
      /* @__PURE__ */ jsx2("label", { style: styles.fieldLabel, children: "Your name" }),
      /* @__PURE__ */ jsxs2("div", { style: { display: "flex", gap: 8 }, children: [
        /* @__PURE__ */ jsx2(
          "input",
          {
            autoFocus: true,
            style: styles.input,
            value: nameInput,
            onChange: (e) => setNameInput(e.target.value),
            placeholder: "Enter your name exactly as before",
            onKeyDown: (e) => e.key === "Enter" && search()
          }
        ),
        /* @__PURE__ */ jsx2("button", { style: styles.primaryBtn, onClick: search, children: /* @__PURE__ */ jsx2(Search, { size: 14 }) })
      ] })
    ] }),
    searched && records !== null && (records.length === 0 ? /* @__PURE__ */ jsx2("div", { style: { marginTop: 16 }, children: /* @__PURE__ */ jsx2(EmptyState, { icon: /* @__PURE__ */ jsx2(History, { size: 22 }), text: "No quiz attempts found for that name yet." }) }) : /* @__PURE__ */ jsx2("div", { style: { ...styles.qList, marginTop: 16 }, children: records.map((r) => /* @__PURE__ */ jsxs2("div", { style: styles.historyRow, children: [
      /* @__PURE__ */ jsxs2("div", { children: [
        /* @__PURE__ */ jsxs2("div", { style: styles.historyExam, children: [
          r.examLabel,
          " \xB7 ",
          r.subjectName || r.subjectId,
          r.chapterName ? ` \xB7 ${r.chapterName}` : "",
          r.variantLabel ? ` \xB7 ${r.variantLabel}` : ""
        ] }),
        /* @__PURE__ */ jsx2("div", { style: styles.historyDate, children: new Date(r.date).toLocaleString() })
      ] }),
      /* @__PURE__ */ jsxs2("div", { style: styles.historyScore, children: [
        r.score,
        "/",
        r.total
      ] })
    ] }, r.id)) }))
  ] });
}
function DiagScreen({ onBack }) {
  const [results, setResults] = useState(null);
  const [running, setRunning] = useState(false);
  const runTests = useCallback(async () => {
    setRunning(true);
    const out = [];
    const testKey = `diag-test:${uid()}`;
    const testValue = { ping: Date.now() };
    try {
      const w = await window.storage.set(testKey, JSON.stringify(testValue), true);
      out.push({ label: "Shared storage \u2014 write", ok: !!w, detail: w ? "succeeded" : "returned empty result" });
    } catch (err) {
      out.push({ label: "Shared storage \u2014 write", ok: false, detail: err && (err.message || err.toString()) || "threw an error" });
    }
    try {
      const r = await window.storage.get(testKey, true);
      const match = r && JSON.parse(r.value).ping === testValue.ping;
      out.push({ label: "Shared storage \u2014 read", ok: !!match, detail: r ? match ? "succeeded" : "value mismatch" : "returned nothing" });
    } catch (err) {
      out.push({ label: "Shared storage \u2014 read", ok: false, detail: err && (err.message || err.toString()) || "threw an error" });
    }
    const privKey = `diag-test-priv:${uid()}`;
    try {
      const w = await window.storage.set(privKey, JSON.stringify(testValue), false);
      out.push({ label: "Private storage \u2014 write", ok: !!w, detail: w ? "succeeded" : "returned empty result" });
    } catch (err) {
      out.push({ label: "Private storage \u2014 write", ok: false, detail: err && (err.message || err.toString()) || "threw an error" });
    }
    try {
      const r = await window.storage.get(privKey, false);
      const match = r && JSON.parse(r.value).ping === testValue.ping;
      out.push({ label: "Private storage \u2014 read", ok: !!match, detail: r ? match ? "succeeded" : "value mismatch" : "returned nothing" });
    } catch (err) {
      out.push({ label: "Private storage \u2014 read", ok: false, detail: err && (err.message || err.toString()) || "threw an error" });
    }
    try {
      await window.storage.delete(testKey, true);
    } catch {
    }
    try {
      await window.storage.delete(privKey, false);
    } catch {
    }
    setResults(out);
    setRunning(false);
  }, []);
  useEffect(() => {
    runTests();
  }, [runTests]);
  return /* @__PURE__ */ jsxs2("div", { children: [
    /* @__PURE__ */ jsx2(BackRow, { onBack, label: "All exams" }),
    /* @__PURE__ */ jsx2(SectionHeading, { eyebrow: "Diagnostics", title: "Storage connection test", sub: "Checks whether shared and private storage can save and load right now." }),
    running && !results && /* @__PURE__ */ jsx2(LoadingBlock, {}),
    results && /* @__PURE__ */ jsx2("div", { style: styles.qList, children: results.map((r, i) => /* @__PURE__ */ jsxs2("div", { style: styles.qCard, children: [
      /* @__PURE__ */ jsxs2("div", { style: styles.qCardHead, children: [
        /* @__PURE__ */ jsx2("span", { style: { fontSize: 13.5, fontWeight: 500 }, children: r.label }),
        r.ok ? /* @__PURE__ */ jsxs2("span", { style: styles.badgeCorrect, children: [
          /* @__PURE__ */ jsx2(Check, { size: 12 }),
          " OK"
        ] }) : /* @__PURE__ */ jsxs2("span", { style: styles.badgeWrong, children: [
          /* @__PURE__ */ jsx2(X, { size: 12 }),
          " Failed"
        ] })
      ] }),
      /* @__PURE__ */ jsx2("div", { style: { fontSize: 12.5, color: "var(--ink-3)" }, children: r.detail })
    ] }, i)) }),
    /* @__PURE__ */ jsx2("button", { style: { ...styles.ghostBtn, marginTop: 16 }, onClick: runTests, disabled: running, children: running ? "Running\u2026" : "Run test again" })
  ] });
}
function AdminLoginScreen({ adminPin, onBack, onUnlock, showToast }) {
  const [pin, setPin] = useState("");
  const tryUnlock = () => {
    if (pin === adminPin) {
      onUnlock();
    } else {
      showToast("Incorrect PIN", "error");
      setPin("");
    }
  };
  return /* @__PURE__ */ jsxs2("div", { children: [
    /* @__PURE__ */ jsx2(BackRow, { onBack, label: "Cancel" }),
    /* @__PURE__ */ jsx2(SectionHeading, { eyebrow: "Admin", title: "Enter admin PIN" }),
    /* @__PURE__ */ jsxs2("div", { style: styles.startCard, children: [
      /* @__PURE__ */ jsx2("div", { style: { display: "flex", justifyContent: "center", marginBottom: 4 }, children: /* @__PURE__ */ jsx2(Lock, { size: 22, color: "var(--ink-3)" }) }),
      /* @__PURE__ */ jsx2(
        "input",
        {
          autoFocus: true,
          type: "password",
          inputMode: "numeric",
          style: { ...styles.input, textAlign: "center", fontSize: 20, letterSpacing: 4 },
          value: pin,
          onChange: (e) => setPin(e.target.value),
          placeholder: "\u2022\u2022\u2022\u2022",
          onKeyDown: (e) => e.key === "Enter" && tryUnlock()
        }
      ),
      /* @__PURE__ */ jsx2("button", { style: { ...styles.primaryBtn, marginTop: 12, justifyContent: "center" }, onClick: tryUnlock, children: "Unlock admin mode" })
    ] })
  ] });
}
function AdminSettingsScreen({ adminPin, setAdminPin, onBack, showToast }) {
  const [pin1, setPin1] = useState("");
  const [pin2, setPin2] = useState("");
  const savePin = async () => {
    if (!pin1.trim() || pin1.length < 4) {
      showToast("Use a PIN of at least 4 digits", "error");
      return;
    }
    if (pin1 !== pin2) {
      showToast("PINs don't match", "error");
      return;
    }
    const write = await sSet("admin-settings:pin", pin1);
    if (!write.ok) {
      showToast(`Save failed: ${write.error}. ${APP_HINT}`, "error");
      return;
    }
    setAdminPin(pin1);
    setPin1("");
    setPin2("");
    showToast("Admin PIN set");
  };
  const removePin = async () => {
    const res = await sSet("admin-settings:pin", null);
    if (!res.ok) {
      showToast(`Couldn't remove PIN: ${res.error}. ${APP_HINT}`, "error");
      return;
    }
    setAdminPin(null);
    showToast("PIN protection removed");
  };
  return /* @__PURE__ */ jsxs2("div", { children: [
    /* @__PURE__ */ jsx2(BackRow, { onBack, label: "Back" }),
    /* @__PURE__ */ jsx2(
      SectionHeading,
      {
        eyebrow: "Admin",
        title: "Admin PIN settings",
        sub: adminPin ? "A PIN is currently required to enter Admin mode." : "No PIN is set \u2014 anyone can switch to Admin mode."
      }
    ),
    /* @__PURE__ */ jsxs2("div", { style: styles.singleForm, children: [
      /* @__PURE__ */ jsx2("label", { style: styles.fieldLabel, children: adminPin ? "Set a new PIN" : "Set a PIN" }),
      /* @__PURE__ */ jsx2(
        "input",
        {
          type: "password",
          inputMode: "numeric",
          style: styles.input,
          value: pin1,
          onChange: (e) => setPin1(e.target.value),
          placeholder: "At least 4 digits"
        }
      ),
      /* @__PURE__ */ jsx2(
        "input",
        {
          type: "password",
          inputMode: "numeric",
          style: styles.input,
          value: pin2,
          onChange: (e) => setPin2(e.target.value),
          placeholder: "Confirm PIN",
          onKeyDown: (e) => e.key === "Enter" && savePin()
        }
      ),
      /* @__PURE__ */ jsxs2("div", { style: styles.formRow, children: [
        /* @__PURE__ */ jsx2("button", { style: styles.primaryBtn, onClick: savePin, children: "Save PIN" }),
        adminPin && /* @__PURE__ */ jsx2("button", { style: styles.ghostBtn, onClick: removePin, children: "Remove PIN protection" })
      ] }),
      /* @__PURE__ */ jsx2("div", { style: styles.hint, children: "Anyone with this PIN can add, edit, or remove content. Share it only with other admins." })
    ] })
  ] });
}
function SectionHeading({ eyebrow, title, sub }) {
  return /* @__PURE__ */ jsxs2("div", { style: styles.heading, children: [
    eyebrow && /* @__PURE__ */ jsx2("div", { style: styles.eyebrow, children: eyebrow }),
    /* @__PURE__ */ jsx2("h1", { style: styles.h1, children: title }),
    sub && /* @__PURE__ */ jsx2("div", { style: styles.subtext, children: sub })
  ] });
}
function BackRow({ onBack, label }) {
  return /* @__PURE__ */ jsxs2("button", { style: styles.backRow, onClick: onBack, children: [
    /* @__PURE__ */ jsx2(ArrowLeft, { size: 14 }),
    " ",
    label
  ] });
}
function EmptyState({ icon, text }) {
  return /* @__PURE__ */ jsxs2("div", { style: styles.empty, children: [
    /* @__PURE__ */ jsx2("div", { style: styles.emptyIcon, children: icon }),
    text
  ] });
}
function LoadingBlock() {
  return /* @__PURE__ */ jsxs2("div", { style: styles.loading, children: [
    /* @__PURE__ */ jsx2(Loader2, { size: 18, className: "spin", style: { animation: "spin 0.8s linear infinite" } }),
    "Loading\u2026"
  ] });
}
var FONT_IMPORT = `
@import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=IBM+Plex+Sans:wght@400;500;600&family=IBM+Plex+Mono:wght@500&display=swap');
@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
:root {
  --ink: #16233F;
  --ink-2: #3C4A66;
  --ink-3: #8891A3;
  --paper: #F1F3F6;
  --paper-card: #FFFFFF;
  --rule: #D8DCE3;
  --gold: #E8A33D;
  --gold-dark: #B97D22;
  --good: #3F8F5F;
  --good-bg: #E6F4EB;
  --bad: #C1443D;
  --bad-bg: #FBEAE9;
}
* { box-sizing: border-box; }
input, textarea, button { font-family: 'IBM Plex Sans', sans-serif; }
::placeholder { color: var(--ink-3); }
@media print {
  body * { visibility: hidden; }
  .pracox-print-layer, .pracox-print-layer * { visibility: visible; }
  .pracox-print-layer { position: absolute !important; left: 0; top: 0; width: 100%; }
  .pracox-print-layer .no-print { display: none !important; }
}
`;
var styles = {
  app: {
    fontFamily: "'IBM Plex Sans', sans-serif",
    background: "var(--paper)",
    color: "var(--ink)",
    minHeight: "100%",
    paddingBottom: 60
  },
  topbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "16px 18px 12px",
    borderBottom: "1px solid var(--rule)",
    background: "var(--paper-card)"
  },
  brand: { display: "flex", alignItems: "center", gap: 10, cursor: "pointer" },
  brandMark: {
    width: 38,
    height: 38,
    borderRadius: 8,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0
  },
  brandMarkImg: { width: "100%", height: "100%", objectFit: "contain" },
  brandName: { fontFamily: "'Fraunces', serif", fontWeight: 600, fontSize: 16.5, lineHeight: 1.1 },
  brandSub: { fontFamily: "'IBM Plex Mono', monospace", fontSize: 9.5, color: "var(--ink-3)", letterSpacing: 0.4, marginTop: 2 },
  historyBtn: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 34,
    height: 34,
    background: "var(--paper)",
    border: "1px solid var(--rule)",
    borderRadius: 999,
    color: "var(--ink-2)",
    cursor: "pointer",
    flexShrink: 0
  },
  iconGhostBtn: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 30,
    height: 30,
    background: "transparent",
    border: "none",
    color: "var(--ink-3)",
    cursor: "pointer",
    borderRadius: 8
  },
  drawerBackdrop: { position: "fixed", inset: 0, background: "rgba(22,35,63,0.45)", zIndex: 80 },
  drawerPanel: {
    position: "fixed",
    top: 0,
    left: 0,
    bottom: 0,
    width: 280,
    maxWidth: "82vw",
    zIndex: 81,
    background: "var(--paper-card)",
    boxShadow: "6px 0 24px rgba(0,0,0,0.18)",
    display: "flex",
    flexDirection: "column",
    padding: 16,
    overflowY: "auto"
  },
  drawerHead: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: 14,
    marginBottom: 14,
    borderBottom: "1px solid var(--rule)"
  },
  drawerSection: { marginBottom: 16 },
  drawerLabel: {
    fontFamily: "'IBM Plex Mono', monospace",
    fontSize: 10.5,
    letterSpacing: 1,
    textTransform: "uppercase",
    color: "var(--ink-3)",
    marginBottom: 8,
    padding: "0 2px"
  },
  drawerItem: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    background: "transparent",
    border: "none",
    padding: "11px 10px",
    borderRadius: 9,
    fontSize: 14,
    color: "var(--ink)",
    cursor: "pointer",
    textAlign: "left",
    width: "100%"
  },
  crumbRow: {
    display: "flex",
    alignItems: "center",
    gap: 6,
    padding: "10px 18px",
    fontFamily: "'IBM Plex Mono', monospace",
    fontSize: 11,
    color: "var(--ink-3)"
  },
  crumbLink: { cursor: "pointer", textDecoration: "underline", textUnderlineOffset: 2 },
  crumbCurrent: { color: "var(--ink)", fontWeight: 500 },
  main: { padding: "8px 18px 24px", maxWidth: 640, margin: "0 auto" },
  heading: { margin: "14px 0 18px" },
  eyebrow: {
    fontFamily: "'IBM Plex Mono', monospace",
    fontSize: 10.5,
    letterSpacing: 1.2,
    textTransform: "uppercase",
    color: "var(--gold-dark)",
    marginBottom: 4
  },
  h1: { fontFamily: "'Fraunces', serif", fontSize: 23, fontWeight: 600, margin: 0, lineHeight: 1.25 },
  subtext: { fontSize: 13, color: "var(--ink-3)", marginTop: 4 },
  groupLabel: {
    fontFamily: "'IBM Plex Mono', monospace",
    fontSize: 11,
    letterSpacing: 1,
    textTransform: "uppercase",
    color: "var(--ink-3)",
    marginBottom: 10
  },
  grid: { display: "flex", flexDirection: "column", gap: 8 },
  examCard: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    textAlign: "left",
    background: "var(--paper-card)",
    border: "1px solid var(--rule)",
    borderRadius: 10,
    padding: "12px 14px",
    cursor: "pointer"
  },
  examCardCode: {
    fontFamily: "'IBM Plex Mono', monospace",
    fontSize: 11,
    fontWeight: 500,
    color: "var(--gold-dark)",
    background: "#FBF2E2",
    padding: "3px 7px",
    borderRadius: 6,
    flexShrink: 0
  },
  examCardLabel: { fontSize: 14.5, fontWeight: 500, flex: 1 },
  subjectCard: { display: "flex", gap: 6, alignItems: "stretch" },
  subjectCardMain: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    gap: 10,
    textAlign: "left",
    background: "var(--paper-card)",
    border: "1px solid var(--rule)",
    borderRadius: 10,
    padding: "13px 14px",
    cursor: "pointer"
  },
  subjectCardLabel: { fontSize: 14.5, fontWeight: 500, flex: 1 },
  subjectCardMeta: {
    display: "flex",
    alignItems: "center",
    gap: 4,
    fontFamily: "'IBM Plex Mono', monospace",
    fontSize: 10,
    color: "var(--ink-3)"
  },
  variantCard: {
    display: "flex",
    flexDirection: "column",
    gap: 6,
    textAlign: "left",
    background: "var(--paper-card)",
    border: "1px solid var(--rule)",
    borderRadius: 12,
    padding: "14px 15px",
    cursor: "pointer",
    width: "100%"
  },
  variantCardDisabled: { opacity: 0.5, cursor: "not-allowed" },
  variantCardHead: { display: "flex", alignItems: "center", justifyContent: "space-between" },
  variantCardLabel: { fontSize: 15, fontWeight: 600, color: "var(--ink)" },
  variantCardCount: {
    fontFamily: "'IBM Plex Mono', monospace",
    fontSize: 10.5,
    color: "var(--gold-dark)",
    background: "#FBF2E2",
    padding: "3px 8px",
    borderRadius: 999,
    flexShrink: 0
  },
  variantCardDesc: { fontSize: 12.5, color: "var(--ink-3)", lineHeight: 1.4 },
  variantCardEmpty: { fontSize: 11, color: "var(--bad)", fontWeight: 500 },
  iconDangerBtn: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 38,
    background: "var(--bad-bg)",
    color: "var(--bad)",
    border: "1px solid #F0D3D1",
    borderRadius: 10,
    cursor: "pointer"
  },
  iconEditBtn: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 38,
    background: "#EFE6D3",
    color: "var(--gold-dark)",
    border: "1px solid #F0DDB3",
    borderRadius: 10,
    cursor: "pointer"
  },
  addPanel: { marginTop: 16 },
  addBtn: {
    display: "flex",
    alignItems: "center",
    gap: 6,
    background: "transparent",
    border: "1.5px dashed var(--ink-3)",
    color: "var(--ink-2)",
    borderRadius: 10,
    padding: "11px 14px",
    fontSize: 13.5,
    fontWeight: 500,
    cursor: "pointer",
    width: "100%",
    justifyContent: "center"
  },
  addForm: {
    background: "var(--paper-card)",
    border: "1px solid var(--rule)",
    borderRadius: 10,
    padding: 14,
    display: "flex",
    flexDirection: "column",
    gap: 10
  },
  input: {
    width: "100%",
    border: "1px solid var(--rule)",
    borderRadius: 8,
    padding: "9px 11px",
    fontSize: 14,
    color: "var(--ink)",
    background: "var(--paper-card)",
    outline: "none"
  },
  checkboxRow: { display: "flex", alignItems: "center", gap: 7, fontSize: 13, color: "var(--ink-2)" },
  formRow: { display: "flex", gap: 8 },
  primaryBtn: {
    display: "flex",
    alignItems: "center",
    gap: 6,
    justifyContent: "center",
    background: "var(--ink)",
    color: "var(--paper)",
    border: "none",
    borderRadius: 8,
    padding: "10px 16px",
    fontSize: 13.5,
    fontWeight: 500,
    cursor: "pointer"
  },
  ghostBtn: {
    display: "flex",
    alignItems: "center",
    gap: 6,
    justifyContent: "center",
    background: "transparent",
    color: "var(--ink-2)",
    border: "1px solid var(--rule)",
    borderRadius: 8,
    padding: "10px 16px",
    fontSize: 13.5,
    fontWeight: 500,
    cursor: "pointer"
  },
  backRow: {
    display: "flex",
    alignItems: "center",
    gap: 6,
    background: "transparent",
    border: "none",
    color: "var(--ink-3)",
    fontSize: 12.5,
    fontWeight: 500,
    cursor: "pointer",
    padding: "10px 0 0",
    marginBottom: 2
  },
  empty: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 8,
    textAlign: "center",
    color: "var(--ink-3)",
    fontSize: 13.5,
    padding: "34px 20px",
    border: "1px dashed var(--rule)",
    borderRadius: 12
  },
  emptyIcon: { color: "var(--ink-3)" },
  loading: { display: "flex", alignItems: "center", gap: 8, color: "var(--ink-3)", fontSize: 13.5, padding: "30px 0" },
  tabs: { display: "flex", gap: 6, marginBottom: 16, borderBottom: "1px solid var(--rule)", paddingBottom: 10 },
  tabBtn: {
    display: "flex",
    alignItems: "center",
    gap: 5,
    background: "var(--paper-card)",
    border: "1px solid var(--rule)",
    borderRadius: 999,
    padding: "7px 12px",
    fontSize: 12.5,
    fontWeight: 500,
    color: "var(--ink-2)",
    cursor: "pointer"
  },
  tabBtnActive: { background: "var(--ink)", color: "var(--paper)", borderColor: "var(--ink)" },
  qList: { display: "flex", flexDirection: "column", gap: 12 },
  qCard: { background: "var(--paper-card)", border: "1px solid var(--rule)", borderRadius: 12, padding: 14 },
  qCardHead: { display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 6 },
  qNum: { fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, color: "var(--gold-dark)", fontWeight: 500 },
  qText: { fontSize: 14.5, fontWeight: 500, marginBottom: 10, lineHeight: 1.4, whiteSpace: "pre-wrap" },
  optList: { display: "flex", flexDirection: "column", gap: 6 },
  optRow: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    fontSize: 13.5,
    padding: "8px 10px",
    borderRadius: 8,
    border: "1px solid var(--rule)",
    color: "var(--ink-2)",
    whiteSpace: "pre-wrap"
  },
  optRowCorrect: { background: "var(--good-bg)", borderColor: "#BFE3CC", color: "var(--good)", fontWeight: 500 },
  optRowWrong: { background: "var(--bad-bg)", borderColor: "#F0D3D1", color: "var(--bad)", fontWeight: 500 },
  optButton: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    fontSize: 13.5,
    padding: "10px 11px",
    textAlign: "left",
    borderRadius: 8,
    border: "1px solid var(--rule)",
    color: "var(--ink-2)",
    background: "var(--paper-card)",
    cursor: "pointer",
    width: "100%",
    whiteSpace: "pre-wrap"
  },
  optButtonActive: { background: "#EFE6D3", borderColor: "var(--gold)", color: "var(--ink)", fontWeight: 500 },
  optLetter: {
    fontFamily: "'IBM Plex Mono', monospace",
    fontSize: 11,
    width: 20,
    height: 20,
    borderRadius: 6,
    background: "var(--paper)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0
  },
  optEditRow: { display: "flex", alignItems: "center", gap: 8 },
  optEditBlock: { display: "flex", flexDirection: "column", gap: 6, paddingBottom: 4, borderBottom: "1px dashed var(--rule)" },
  optRadio: {
    width: 30,
    height: 30,
    borderRadius: 8,
    border: "1px solid var(--rule)",
    background: "var(--paper-card)",
    color: "var(--ink-3)",
    fontFamily: "'IBM Plex Mono', monospace",
    fontSize: 12,
    fontWeight: 600,
    cursor: "pointer",
    flexShrink: 0
  },
  optRadioActive: { background: "var(--good)", borderColor: "var(--good)", color: "#fff" },
  singleForm: { background: "var(--paper-card)", border: "1px solid var(--rule)", borderRadius: 12, padding: 16, display: "flex", flexDirection: "column", gap: 10 },
  editingBanner: {
    display: "flex",
    alignItems: "center",
    gap: 6,
    background: "#FBF2E2",
    border: "1px solid #F0DDB3",
    color: "var(--gold-dark)",
    borderRadius: 8,
    padding: "7px 10px",
    fontSize: 12,
    fontWeight: 500
  },
  printHint: {
    display: "flex",
    alignItems: "center",
    gap: 6,
    fontSize: 12,
    color: "var(--ink-3)",
    marginBottom: 14
  },
  radioRow: { display: "flex", alignItems: "flex-start", gap: 10, cursor: "pointer" },
  radioTitle: { fontSize: 13.5, fontWeight: 600, color: "var(--ink)" },
  radioSub: { fontSize: 12, color: "var(--ink-3)", marginTop: 2, lineHeight: 1.4 },
  modalBackdrop: {
    position: "fixed",
    inset: 0,
    background: "rgba(22,35,63,0.45)",
    zIndex: 60,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 20
  },
  modalCard: {
    background: "var(--paper-card)",
    borderRadius: 14,
    padding: 20,
    maxWidth: 380,
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: 10
  },
  printLayer: {
    position: "fixed",
    inset: 0,
    background: "#fff",
    color: "#111",
    zIndex: 70,
    overflow: "auto",
    padding: 24,
    fontFamily: "'IBM Plex Sans', sans-serif"
  },
  qImage: { width: "100%", maxHeight: 220, objectFit: "contain", borderRadius: 8, background: "var(--paper)", marginBottom: 10, border: "1px solid var(--rule)" },
  explanationNote: {
    marginTop: 10,
    padding: "9px 11px",
    background: "#FBF2E2",
    border: "1px solid #F0DDB3",
    borderRadius: 8,
    fontSize: 12.5,
    color: "var(--ink-2)",
    lineHeight: 1.5,
    whiteSpace: "pre-wrap"
  },
  explanationLabel: { fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, fontWeight: 600, color: "var(--gold-dark)", textTransform: "uppercase", marginRight: 4 },
  qImagePreview: { width: 120, height: 90, objectFit: "cover", borderRadius: 8, border: "1px solid var(--rule)" },
  optThumb: { width: 28, height: 28, objectFit: "cover", borderRadius: 5, flexShrink: 0, border: "1px solid var(--rule)" },
  optThumbLg: { width: 60, height: 46, objectFit: "cover", borderRadius: 6, border: "1px solid var(--rule)" },
  imageField: { marginTop: -2 },
  imageFieldCompact: { marginLeft: 38, marginTop: -2 },
  imagePreviewRow: { display: "flex", alignItems: "center", gap: 8 },
  imageAddBtn: {
    display: "flex",
    alignItems: "center",
    gap: 6,
    background: "var(--paper)",
    border: "1px dashed var(--ink-3)",
    color: "var(--ink-2)",
    borderRadius: 8,
    padding: "7px 11px",
    fontSize: 12,
    fontWeight: 500,
    cursor: "pointer"
  },
  fieldLabel: { fontSize: 11.5, fontWeight: 600, color: "var(--ink-3)", textTransform: "uppercase", letterSpacing: 0.5, marginBottom: -2 },
  textarea: { width: "100%", border: "1px solid var(--rule)", borderRadius: 8, padding: "10px 11px", fontSize: 14, resize: "vertical", outline: "none", fontFamily: "'IBM Plex Sans', sans-serif" },
  hint: { fontSize: 11.5, color: "var(--ink-3)", marginTop: -2 },
  bulkHelp: { background: "var(--paper)", border: "1px solid var(--rule)", borderRadius: 8, padding: 10 },
  bulkHelpTitle: { fontSize: 11.5, fontWeight: 600, color: "var(--ink-2)", marginBottom: 6 },
  bulkExample: { fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, color: "var(--ink-2)", margin: 0, whiteSpace: "pre-wrap", lineHeight: 1.5 },
  startCard: { background: "var(--paper-card)", border: "1px solid var(--rule)", borderRadius: 12, padding: 18, display: "flex", flexDirection: "column", gap: 10 },
  startMeta: { fontFamily: "'IBM Plex Mono', monospace", fontSize: 11.5, color: "var(--ink-3)", marginBottom: 4 },
  quizProgress: {
    display: "flex",
    justifyContent: "space-between",
    fontFamily: "'IBM Plex Mono', monospace",
    fontSize: 11.5,
    color: "var(--ink-3)",
    marginBottom: 12,
    padding: "0 2px"
  },
  timerRow: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    marginBottom: 14,
    padding: "0 2px"
  },
  timerText: {
    fontFamily: "'IBM Plex Mono', monospace",
    fontSize: 13,
    fontWeight: 600,
    color: "var(--ink)",
    minWidth: 40
  },
  timerBarTrack: {
    flex: 1,
    height: 6,
    borderRadius: 999,
    background: "var(--rule)",
    overflow: "hidden"
  },
  timerBarFill: {
    height: "100%",
    borderRadius: 999,
    transition: "width 1s linear"
  },
  resultCard: {
    background: "var(--paper-card)",
    border: "1px solid var(--rule)",
    borderRadius: 14,
    padding: "26px 20px",
    textAlign: "center",
    marginBottom: 18
  },
  resultStamp: {
    width: 48,
    height: 48,
    borderRadius: "50%",
    background: "var(--gold)",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto 10px"
  },
  resultScore: { fontFamily: "'Fraunces', serif", fontSize: 40, fontWeight: 700, color: "var(--ink)" },
  resultTotal: { fontSize: 20, color: "var(--ink-3)", fontWeight: 500 },
  resultPct: { fontSize: 13.5, color: "var(--ink-2)", marginTop: 2 },
  resultNote: { fontFamily: "'IBM Plex Mono', monospace", fontSize: 10.5, color: "var(--ink-3)", marginTop: 8 },
  historyRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    background: "var(--paper-card)",
    border: "1px solid var(--rule)",
    borderRadius: 10,
    padding: "12px 14px"
  },
  historyExam: { fontSize: 13.5, fontWeight: 500 },
  historyDate: { fontFamily: "'IBM Plex Mono', monospace", fontSize: 10.5, color: "var(--ink-3)", marginTop: 2 },
  historyScore: { fontFamily: "'Fraunces', serif", fontSize: 18, fontWeight: 600, color: "var(--gold-dark)" },
  badgeCorrect: { display: "flex", alignItems: "center", gap: 4, fontSize: 11, color: "var(--good)", fontWeight: 600 },
  badgeWrong: { display: "flex", alignItems: "center", gap: 4, fontSize: 11, color: "var(--bad)", fontWeight: 600 },
  toast: {
    position: "fixed",
    bottom: 20,
    left: "50%",
    transform: "translateX(-50%)",
    background: "var(--ink)",
    color: "var(--paper)",
    padding: "10px 16px",
    borderRadius: 999,
    fontSize: 13,
    boxShadow: "0 6px 18px rgba(0,0,0,0.18)",
    zIndex: 50
  },
  toastError: { background: "var(--bad)" }
};
export {
  App as default
};

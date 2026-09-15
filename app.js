// app.jsx
import { useState, useEffect, useCallback, useRef, useMemo } from "react";

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
var Import = (p) => /* @__PURE__ */ jsxs(Icon, { ...p, children: [
  /* @__PURE__ */ jsx("path", { d: "M12 3 V15" }),
  /* @__PURE__ */ jsx("polyline", { points: "7 10 12 15 17 10" }),
  /* @__PURE__ */ jsx("path", { d: "M4 19 H20" })
] });
var Calculator = (p) => /* @__PURE__ */ jsxs(Icon, { ...p, children: [
  /* @__PURE__ */ jsx("rect", { x: "4", y: "2", width: "16", height: "20", rx: "2" }),
  /* @__PURE__ */ jsx("line", { x1: "8", y1: "6", x2: "16", y2: "6" }),
  /* @__PURE__ */ jsx("line", { x1: "8", y1: "11", x2: "8", y2: "11.01" }),
  /* @__PURE__ */ jsx("line", { x1: "12", y1: "11", x2: "12", y2: "11.01" }),
  /* @__PURE__ */ jsx("line", { x1: "16", y1: "11", x2: "16", y2: "11.01" }),
  /* @__PURE__ */ jsx("line", { x1: "8", y1: "15", x2: "8", y2: "15.01" }),
  /* @__PURE__ */ jsx("line", { x1: "12", y1: "15", x2: "12", y2: "15.01" }),
  /* @__PURE__ */ jsx("line", { x1: "16", y1: "15", x2: "16", y2: "18" }),
  /* @__PURE__ */ jsx("line", { x1: "8", y1: "19", x2: "12", y2: "19" })
] });
var Flask = (p) => /* @__PURE__ */ jsxs(Icon, { ...p, children: [
  /* @__PURE__ */ jsx("path", { d: "M9 3 h6 M10 3 v6 l-5 9 a2 2 0 0 0 2 3 h10 a2 2 0 0 0 2 -3 l-5 -9 V3" }),
  /* @__PURE__ */ jsx("line", { x1: "7.5", y1: "14", x2: "16.5", y2: "14" })
] });
var Globe = (p) => /* @__PURE__ */ jsxs(Icon, { ...p, children: [
  /* @__PURE__ */ jsx("circle", { cx: "12", cy: "12", r: "10" }),
  /* @__PURE__ */ jsx("line", { x1: "2", y1: "12", x2: "22", y2: "12" }),
  /* @__PURE__ */ jsx("path", { d: "M12 2 a15 15 0 0 1 0 20 a15 15 0 0 1 0 -20" })
] });
var Atom = (p) => /* @__PURE__ */ jsxs(Icon, { ...p, children: [
  /* @__PURE__ */ jsx("circle", { cx: "12", cy: "12", r: "1.5" }),
  /* @__PURE__ */ jsx("ellipse", { cx: "12", cy: "12", rx: "10", ry: "4.2" }),
  /* @__PURE__ */ jsx("ellipse", { cx: "12", cy: "12", rx: "10", ry: "4.2", transform: "rotate(60 12 12)" }),
  /* @__PURE__ */ jsx("ellipse", { cx: "12", cy: "12", rx: "10", ry: "4.2", transform: "rotate(120 12 12)" })
] });
var Landmark = (p) => /* @__PURE__ */ jsxs(Icon, { ...p, children: [
  /* @__PURE__ */ jsx("line", { x1: "3", y1: "21", x2: "21", y2: "21" }),
  /* @__PURE__ */ jsx("line", { x1: "5", y1: "21", x2: "5", y2: "10" }),
  /* @__PURE__ */ jsx("line", { x1: "19", y1: "21", x2: "19", y2: "10" }),
  /* @__PURE__ */ jsx("line", { x1: "12", y1: "21", x2: "12", y2: "10" }),
  /* @__PURE__ */ jsx("polygon", { points: "12 3 21 9 3 9" })
] });
var Palette = (p) => /* @__PURE__ */ jsxs(Icon, { ...p, children: [
  /* @__PURE__ */ jsx("path", { d: "M12 2 a10 10 0 1 0 0 20 c1.5 0 2 -1 2 -2 c0 -1 -1 -1.5 -1 -2.5 c0 -1 1 -1.5 2 -1.5 h2 a4 4 0 0 0 4 -4 c0 -6 -4 -10 -9 -10 Z" }),
  /* @__PURE__ */ jsx("circle", { cx: "7.5", cy: "10.5", r: "1.2" }),
  /* @__PURE__ */ jsx("circle", { cx: "10.5", cy: "7", r: "1.2" }),
  /* @__PURE__ */ jsx("circle", { cx: "15", cy: "8", r: "1.2" })
] });
var Music = (p) => /* @__PURE__ */ jsxs(Icon, { ...p, children: [
  /* @__PURE__ */ jsx("path", { d: "M9 18 V4 l10 -2 V16" }),
  /* @__PURE__ */ jsx("circle", { cx: "6", cy: "18", r: "3" }),
  /* @__PURE__ */ jsx("circle", { cx: "16", cy: "16", r: "3" })
] });
var Sun = (p) => /* @__PURE__ */ jsxs(Icon, { ...p, children: [
  /* @__PURE__ */ jsx("circle", { cx: "12", cy: "12", r: "4.5" }),
  /* @__PURE__ */ jsx("line", { x1: "12", y1: "1.5", x2: "12", y2: "4" }),
  /* @__PURE__ */ jsx("line", { x1: "12", y1: "20", x2: "12", y2: "22.5" }),
  /* @__PURE__ */ jsx("line", { x1: "4.2", y1: "4.2", x2: "6", y2: "6" }),
  /* @__PURE__ */ jsx("line", { x1: "18", y1: "18", x2: "19.8", y2: "19.8" }),
  /* @__PURE__ */ jsx("line", { x1: "1.5", y1: "12", x2: "4", y2: "12" }),
  /* @__PURE__ */ jsx("line", { x1: "20", y1: "12", x2: "22.5", y2: "12" }),
  /* @__PURE__ */ jsx("line", { x1: "4.2", y1: "19.8", x2: "6", y2: "18" }),
  /* @__PURE__ */ jsx("line", { x1: "18", y1: "6", x2: "19.8", y2: "4.2" })
] });
var Moon = (p) => /* @__PURE__ */ jsx(Icon, { ...p, children: /* @__PURE__ */ jsx("path", { d: "M21 12.8 A9 9 0 1 1 11.2 3 A7 7 0 0 0 21 12.8 Z" }) });
var Sparkle = (p) => /* @__PURE__ */ jsx(Icon, { ...p, children: /* @__PURE__ */ jsx("path", { d: "M12 2 L14 9 L21 11 L14 13 L12 21 L10 13 L3 11 L10 9 Z" }) });

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
var SUBJECT_VISUALS = [
  { keywords: ["math", "maths", "arithmetic", "algebra"], icon: Calculator, color: "#3F6FB0" },
  { keywords: ["science", "physics", "chemistry"], icon: Flask, color: "#3F9E6E" },
  { keywords: ["biology", "bio"], icon: Atom, color: "#4C9E3F" },
  { keywords: ["social", "history", "civics", "geography", "gk", "general knowledge"], icon: Landmark, color: "#B97D22" },
  { keywords: ["english", "hindi", "malayalam", "language", "literature"], icon: BookOpen, color: "#7A5FB5" },
  { keywords: ["art", "drawing"], icon: Palette, color: "#C0567A" },
  { keywords: ["music"], icon: Music, color: "#5F8FB5" },
  { keywords: ["computer", "coding", "cs", "it"], icon: Atom, color: "#3F8F9E" },
  { keywords: ["mat", "mental ability", "sat", "aptitude"], icon: Sparkle, color: "#B9932B" },
  { keywords: ["geo"], icon: Globe, color: "#3F8F9E" }
];
function pickSubjectVisual(name) {
  const lower = (name || "").toLowerCase();
  for (const v of SUBJECT_VISUALS) {
    if (v.keywords.some((k) => lower.includes(k))) return v;
  }
  return { icon: BookOpen, color: "var(--ink-3)" };
}
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
  const [bankId, setBankId] = useState(null);
  const [screen, setScreen] = useState("home");
  const [studentName, setStudentName] = useState("");
  const [toast, setToast] = useState(null);
  const [adminPin, setAdminPin] = useState(void 0);
  const [adminUnlocked, setAdminUnlocked] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    try {
      return localStorage.getItem("pracox_theme") === "dark";
    } catch {
      return false;
    }
  });
  const toggleDarkMode = () => {
    setDarkMode((v) => {
      const next = !v;
      try {
        localStorage.setItem("pracox_theme", next ? "dark" : "light");
      } catch {
      }
      return next;
    });
  };
  useEffect(() => {
    (async () => setAdminPin(await sGet("admin-settings:pin", null)))();
  }, []);
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", darkMode ? "dark" : "light");
  }, [darkMode]);
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
    setBankId(null);
    setScreen("home");
  };
  const goHistory = () => {
    setExamId(null);
    setSubjectId(null);
    setChapterId(null);
    setVariant(null);
    setBankId(null);
    setScreen("history");
  };
  const goDiag = () => {
    setExamId(null);
    setSubjectId(null);
    setChapterId(null);
    setVariant(null);
    setBankId(null);
    setScreen("diag");
  };
  const goTimer = () => {
    setExamId(null);
    setSubjectId(null);
    setChapterId(null);
    setVariant(null);
    setBankId(null);
    setScreen("timer");
  };
  const goAdminSettings = () => {
    setExamId(null);
    setSubjectId(null);
    setChapterId(null);
    setVariant(null);
    setBankId(null);
    setScreen("admin-settings");
  };
  const requestMode = (m) => {
    if (m === "admin" && adminPin && !adminUnlocked) {
      setExamId(null);
      setSubjectId(null);
      setChapterId(null);
      setVariant(null);
      setBankId(null);
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
    setBankId(null);
    setScreen("subjects");
  };
  const goChapters = (subj) => {
    setSubjectId(subj.id);
    setChapterId(null);
    setVariant(null);
    setBankId(null);
    if (subj.hasChapters) setScreen("chapters");
    else {
      setChapterId("none");
      setScreen("variant");
    }
  };
  const goInto = (chapId) => {
    setChapterId(chapId);
    setVariant(null);
    setBankId(null);
    setScreen("variant");
  };
  const goVariant = (v) => {
    setVariant(v);
    setBankId(null);
    setScreen("banks");
  };
  const goBank = (bId) => {
    setBankId(bId);
    setScreen(mode === "admin" ? "manage" : "quiz");
  };
  return /* @__PURE__ */ jsxs2("div", { style: styles.app, "data-theme": darkMode ? "dark" : "light", children: [
    /* @__PURE__ */ jsx2("style", { children: FONT_IMPORT }),
    /* @__PURE__ */ jsx2(
      TopBar,
      {
        mode,
        setMode: requestMode,
        onHome: reset,
        onHistory: goHistory,
        onDiag: goDiag,
        onSettings: goAdminSettings,
        darkMode,
        onToggleDark: toggleDarkMode,
        onTimer: goTimer
      }
    ),
    /* @__PURE__ */ jsx2(Breadcrumb, { exam, subjectId, chapterId, onHome: reset, onExam: () => goSubjects(examId) }),
    /* @__PURE__ */ jsxs2("main", { style: styles.main, className: "px-fade-in", children: [
      screen === "home" && /* @__PURE__ */ jsx2(ExamGrid, { onPick: goSubjects }),
      screen === "history" && /* @__PURE__ */ jsx2(HistoryScreen, { initialName: studentName, onBack: reset }),
      screen === "diag" && /* @__PURE__ */ jsx2(DiagScreen, { onBack: reset }),
      screen === "timer" && /* @__PURE__ */ jsx2(PracticeTimerScreen, { onBack: reset }),
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
      screen === "banks" && exam && subjectId && chapterId && variant && /* @__PURE__ */ jsx2(
        BankScreen,
        {
          exam,
          subjectId,
          chapterId,
          variant,
          mode,
          studentName,
          setStudentName,
          onBack: () => setScreen("variant"),
          onPick: goBank,
          showToast
        }
      ),
      screen === "manage" && exam && subjectId && chapterId && variant && bankId && /* @__PURE__ */ jsx2(
        ManageQuestions,
        {
          exam,
          subjectId,
          chapterId,
          variant,
          bankId,
          onBack: () => setScreen("banks"),
          showToast
        }
      ),
      screen === "quiz" && exam && subjectId && chapterId && variant && bankId && /* @__PURE__ */ jsx2(
        QuizScreen,
        {
          exam,
          subjectId,
          chapterId,
          variant,
          bankId,
          studentName,
          setStudentName,
          onBack: () => setScreen("banks"),
          showToast
        }
      )
    ] }, screen + variant + bankId),
    toast && /* @__PURE__ */ jsx2("div", { style: { ...styles.toast, ...toast.kind === "error" ? styles.toastError : {} }, children: toast.msg })
  ] });
}
function TopBar({ mode, setMode, onHome, onHistory, onDiag, onSettings, darkMode, onToggleDark, onTimer }) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [drawerMounted, setDrawerMounted] = useState(false);
  const openDrawer = () => {
    setDrawerMounted(true);
    requestAnimationFrame(() => setDrawerOpen(true));
  };
  const close = () => setDrawerOpen(false);
  return /* @__PURE__ */ jsxs2("header", { style: styles.topbar, children: [
    /* @__PURE__ */ jsxs2("div", { style: { display: "flex", alignItems: "center", gap: 10 }, children: [
      /* @__PURE__ */ jsx2("button", { style: styles.historyBtn, onClick: openDrawer, title: "Menu", children: /* @__PURE__ */ jsx2(Menu, { size: 18 }) }),
      /* @__PURE__ */ jsxs2("div", { style: styles.brand, className: "px-tap", onClick: onHome, children: [
        /* @__PURE__ */ jsx2("div", { style: styles.brandMark, children: /* @__PURE__ */ jsx2("img", { src: LOGO_SRC, alt: "PracOx", style: styles.brandMarkImg }) }),
        /* @__PURE__ */ jsxs2("div", { children: [
          /* @__PURE__ */ jsx2("div", { style: styles.brandName, children: "PracOx" }),
          /* @__PURE__ */ jsx2("div", { style: styles.brandSub, children: "Practice Through Failure" })
        ] })
      ] })
    ] }),
    drawerMounted && /* @__PURE__ */ jsxs2(Fragment, { children: [
      /* @__PURE__ */ jsx2(
        "div",
        {
          style: {
            ...styles.drawerBackdrop,
            opacity: drawerOpen ? 1 : 0,
            pointerEvents: drawerOpen ? "auto" : "none",
            transition: "opacity 0.25s ease"
          },
          onClick: close,
          onTransitionEnd: () => {
            if (!drawerOpen) setDrawerMounted(false);
          }
        }
      ),
      /* @__PURE__ */ jsxs2(
        "div",
        {
          style: {
            ...styles.drawerPanel,
            transform: drawerOpen ? "translateX(0)" : "translateX(-100%)",
            transition: "transform 0.28s cubic-bezier(.2,.9,.3,1)"
          },
          children: [
            /* @__PURE__ */ jsxs2("div", { style: styles.drawerHead, children: [
              /* @__PURE__ */ jsxs2("div", { style: styles.brand, className: "px-tap", onClick: () => {
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
            ] }),
            /* @__PURE__ */ jsxs2("div", { style: styles.drawerSection, children: [
              /* @__PURE__ */ jsx2("div", { style: styles.drawerLabel, children: "Tools" }),
              /* @__PURE__ */ jsxs2("button", { style: styles.drawerItem, onClick: () => {
                close();
                onTimer();
              }, children: [
                /* @__PURE__ */ jsx2(Timer, { size: 16 }),
                " Practice timer"
              ] })
            ] }),
            /* @__PURE__ */ jsxs2("div", { style: styles.drawerSection, children: [
              /* @__PURE__ */ jsx2("div", { style: styles.drawerLabel, children: "Appearance" }),
              /* @__PURE__ */ jsxs2("button", { style: styles.drawerItem, onClick: () => { close(); onToggleDark(); }, children: [
                darkMode ? /* @__PURE__ */ jsx2(Sun, { size: 16 }) : /* @__PURE__ */ jsx2(Moon, { size: 16 }),
                darkMode ? "Switch to light mode" : "Switch to dark mode"
              ] })
            ] })
          ]
        }
      )
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
    /* @__PURE__ */ jsx2("div", { style: styles.grid, children: subjects.map((s) => {
      const visual = pickSubjectVisual(s.name);
      const VIcon = visual.icon;
      return /* @__PURE__ */ jsxs2("div", { style: styles.subjectCard, children: [
        /* @__PURE__ */ jsxs2("button", { style: styles.subjectCardMain, onClick: () => onPick(s), children: [
          /* @__PURE__ */ jsx2("div", { style: { ...styles.subjectIconWrap, background: visual.color + "1E", color: visual.color }, children: /* @__PURE__ */ jsx2(VIcon, { size: 18 }) }),
          /* @__PURE__ */ jsx2("span", { style: styles.subjectCardLabel, children: s.name }),
          /* @__PURE__ */ jsx2("span", { style: styles.subjectCardMeta, children: s.hasChapters ? /* @__PURE__ */ jsxs2(Fragment, { children: [
            /* @__PURE__ */ jsx2(Layers, { size: 12 }),
            " has chapters"
          ] }) : "no chapters" }),
          /* @__PURE__ */ jsx2(ChevronRight, { size: 16, color: "var(--ink-3)" })
        ] }),
        mode === "admin" && /* @__PURE__ */ jsx2("button", { style: styles.iconDangerBtn, onClick: () => removeSubject(s.id), title: "Remove subject", children: /* @__PURE__ */ jsx2(Trash2, { size: 14 }) })
      ] }, s.id);
    }) }),
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
    const bankLists = await Promise.all(
      VARIANTS.map((v) => sGet(`banks:${exam.id}:${subjectId}:${chapterId}:${v.id}`, []))
    );
    const questionCounts = await Promise.all(
      bankLists.map(
        (banks, i) => Promise.all(
          banks.map((b) => sGet(`questions:${exam.id}:${subjectId}:${chapterId}:${VARIANTS[i].id}:${b.id}`, []))
        ).then((lists) => lists.reduce((sum, l) => sum + l.length, 0))
      )
    );
    setCounts(Object.fromEntries(VARIANTS.map((v, i) => [v.id, questionCounts[i]])));
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
function BankScreen({ exam, subjectId, chapterId, variant, mode, studentName, setStudentName, onBack, onPick, showToast }) {
  const [banks, setBanks] = useState(null);
  const [counts, setCounts] = useState({});
  const [adding, setAdding] = useState(false);
  const [name, setName] = useState("");
  const [nameInput, setNameInput] = useState(studentName || "");
  const [doneMap, setDoneMap] = useState({});
  const banksKey = `banks:${exam.id}:${subjectId}:${chapterId}:${variant}`;
  const load = useCallback(async () => {
    const list = await sGet(banksKey, []);
    setBanks(list);
    const qCounts = await Promise.all(
      list.map((b) => sGet(`questions:${exam.id}:${subjectId}:${chapterId}:${variant}:${b.id}`, []))
    );
    setCounts(Object.fromEntries(list.map((b, i) => [b.id, qCounts[i].length])));
  }, [banksKey, exam.id, subjectId, chapterId, variant]);
  useEffect(() => {
    load();
  }, [load]);
  const loadDoneStatus = useCallback(async (nm, bankList) => {
    const trimmed = nm.trim().toLowerCase();
    if (!trimmed || !bankList.length) {
      setDoneMap({});
      return;
    }
    const history = await sGet(`scores:${trimmed}`, []);
    const results = await Promise.all(
      bankList.map(async (b) => {
        const overrideKey = `bank-done:${trimmed}:${exam.id}:${subjectId}:${chapterId}:${variant}:${b.id}`;
        try {
          const r = await window.storage.get(overrideKey, true);
          return [b.id, JSON.parse(r.value)];
        } catch {
          const auto = history.some((h) => h.bankId === b.id && h.variantLabel);
          return [b.id, auto];
        }
      })
    );
    setDoneMap(Object.fromEntries(results));
  }, [exam.id, subjectId, chapterId, variant]);
  useEffect(() => {
    if (mode === "student" && banks) loadDoneStatus(nameInput, banks);
  }, [banks, mode]);
  const toggleDone = async (bankId, current) => {
    const trimmed = nameInput.trim().toLowerCase();
    if (!trimmed) {
      showToast("Enter your name first to track completed banks", "error");
      return;
    }
    setDoneMap({ ...doneMap, [bankId]: !current });
    const overrideKey = `bank-done:${trimmed}:${exam.id}:${subjectId}:${chapterId}:${variant}:${bankId}`;
    const res = await sSet(overrideKey, !current);
    if (!res.ok) {
      setDoneMap({ ...doneMap, [bankId]: current });
      showToast(`Couldn't save: ${res.error}`, "error");
    }
  };
  const addBank = async () => {
    const trimmed = name.trim();
    if (!trimmed) return;
    if (banks.some((b) => b.name.toLowerCase() === trimmed.toLowerCase())) {
      showToast("A bank with that name already exists", "error");
      return;
    }
    const prev = banks;
    const next = [...banks, { id: uid(), name: trimmed }];
    setBanks(next);
    const res = await sSet(banksKey, next);
    if (!res.ok) {
      setBanks(prev);
      showToast(`Save failed: ${res.error}. ${APP_HINT}`, "error");
      return;
    }
    setName("");
    setAdding(false);
    showToast("Bank added");
  };
  const removeBank = async (bankId) => {
    const prev = banks;
    const next = banks.filter((b) => b.id !== bankId);
    setBanks(next);
    const res = await sSet(banksKey, next);
    if (!res.ok) {
      setBanks(prev);
      showToast(`Remove failed: ${res.error}. ${APP_HINT}`, "error");
    }
  };
  if (banks === null) return /* @__PURE__ */ jsx2(LoadingBlock, {});
  const variantMeta = VARIANTS.find((v) => v.id === variant);
  return /* @__PURE__ */ jsxs2("div", { children: [
    /* @__PURE__ */ jsx2(BackRow, { onBack, label: "Back" }),
    /* @__PURE__ */ jsx2(
      SectionHeading,
      {
        eyebrow: "Step 5",
        title: `${variantMeta.label} \u2014 choose a bank`,
        sub: mode === "admin" ? "Pick which bank to add questions to, or create a new one." : "Pick a set of questions to take."
      }
    ),
    mode === "student" && /* @__PURE__ */ jsxs2("div", { style: { ...styles.startCard, marginBottom: 14 }, children: [
      /* @__PURE__ */ jsx2("label", { style: styles.fieldLabel, children: "Your name" }),
      /* @__PURE__ */ jsx2(
        "input",
        {
          style: styles.input,
          value: nameInput,
          onChange: (e) => setNameInput(e.target.value),
          onBlur: () => {
            setStudentName(nameInput);
            loadDoneStatus(nameInput, banks);
          },
          placeholder: "Enter your name to track completed banks"
        }
      )
    ] }),
    banks.length === 0 && mode === "student" && /* @__PURE__ */ jsx2(EmptyState, { text: "No banks have been added for this option yet." }),
    /* @__PURE__ */ jsx2("div", { style: styles.grid, children: banks.map((b) => {
      const count = counts[b.id] || 0;
      const disabled = mode === "student" && count === 0;
      const done = !!doneMap[b.id];
      return /* @__PURE__ */ jsxs2("div", { style: styles.subjectCard, children: [
        /* @__PURE__ */ jsxs2(
          "button",
          {
            style: { ...styles.subjectCardMain, ...disabled ? styles.variantCardDisabled : {} },
            onClick: () => !disabled && onPick(b.id),
            disabled,
            children: [
              /* @__PURE__ */ jsx2("span", { style: styles.subjectCardLabel, children: b.name }),
              /* @__PURE__ */ jsxs2("span", { style: styles.subjectCardMeta, children: [
                count,
                " question",
                count === 1 ? "" : "s",
                disabled ? " \xB7 empty" : ""
              ] }),
              /* @__PURE__ */ jsx2(ChevronRight, { size: 16, color: "var(--ink-3)" })
            ]
          }
        ),
        mode === "student" && count > 0 && /* @__PURE__ */ jsx2(
          "button",
          {
            style: { ...styles.iconDangerBtn, ...done ? styles.doneToggleActive : styles.doneToggleBtn },
            onClick: (e) => {
              e.stopPropagation();
              toggleDone(b.id, done);
            },
            title: done ? "Marked done \u2014 tap to unmark" : "Mark as done",
            children: /* @__PURE__ */ jsx2(Check, { size: 14 })
          }
        ),
        mode === "admin" && /* @__PURE__ */ jsx2("button", { style: styles.iconDangerBtn, onClick: () => removeBank(b.id), title: "Remove bank", children: /* @__PURE__ */ jsx2(Trash2, { size: 14 }) })
      ] }, b.id);
    }) }),
    mode === "admin" && /* @__PURE__ */ jsx2("div", { style: styles.addPanel, children: !adding ? /* @__PURE__ */ jsxs2("button", { style: styles.addBtn, onClick: () => setAdding(true), children: [
      /* @__PURE__ */ jsx2(Plus, { size: 15 }),
      " Add bank"
    ] }) : /* @__PURE__ */ jsxs2("div", { style: styles.addForm, children: [
      /* @__PURE__ */ jsx2(
        "input",
        {
          autoFocus: true,
          style: styles.input,
          placeholder: "Bank name, e.g. Bank 1",
          value: name,
          onChange: (e) => setName(e.target.value),
          onKeyDown: (e) => e.key === "Enter" && addBank()
        }
      ),
      /* @__PURE__ */ jsxs2("div", { style: styles.formRow, children: [
        /* @__PURE__ */ jsx2("button", { style: styles.primaryBtn, onClick: addBank, children: "Save" }),
        /* @__PURE__ */ jsx2("button", { style: styles.ghostBtn, onClick: () => {
          setAdding(false);
          setName("");
        }, children: "Cancel" })
      ] })
    ] }) })
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
function ManageQuestions({ exam, subjectId, chapterId, variant, bankId, onBack, showToast }) {
  const [questions, setQuestions] = useState(null);
  const [tab, setTab] = useState("list");
  const [draft, setDraft] = useState(BLANK_Q());
  const [editingId, setEditingId] = useState(null);
  const [bulkText, setBulkText] = useState("");
  const [totalSettings, setTotalSettings] = useState(null);
  const [printOpen, setPrintOpen] = useState(false);
  const [importOpen, setImportOpen] = useState(false);
  const key = `questions:${exam.id}:${subjectId}:${chapterId}:${variant}:${bankId}`;
  const settingsKey = `settings:${exam.id}:${subjectId}:${chapterId}:${variant}:${bankId}`;
  const variantMeta = VARIANTS.find((v) => v.id === variant);
  const [bankName, setBankName] = useState(bankId);
  useEffect(() => {
    (async () => {
      const banks = await sGet(`banks:${exam.id}:${subjectId}:${chapterId}:${variant}`, []);
      const b = banks.find((bk) => bk.id === bankId);
      if (b) setBankName(b.name);
    })();
  }, [exam.id, subjectId, chapterId, variant, bankId]);
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
  const importSelected = async (selectedQuestions) => {
    const copies = selectedQuestions.map((q) => ({
      ...q,
      id: uid(),
      options: q.options.map((o) => ({ ...o })),
      timeSeconds: q.timeSeconds || 60
    }));
    const prev = questions;
    const next = [...questions, ...copies];
    setQuestions(next);
    const res = await sSet(key, next);
    if (!res.ok) {
      setQuestions(prev);
      showToast(`Save failed: ${res.error}. ${APP_HINT}`, "error");
      return;
    }
    setImportOpen(false);
    showToast(`Imported ${copies.length} question${copies.length === 1 ? "" : "s"}`);
  };
  if (questions === null) return /* @__PURE__ */ jsx2(LoadingBlock, {});
  return /* @__PURE__ */ jsxs2("div", { children: [
    /* @__PURE__ */ jsx2(BackRow, { onBack, label: "Back" }),
    /* @__PURE__ */ jsx2(SectionHeading, { eyebrow: "Admin", title: `${variantMeta.label} \u2014 ${bankName}`, sub: `${questions.length} question${questions.length === 1 ? "" : "s"} saved here` }),
    variant === "off" && questions.length > 0 && /* @__PURE__ */ jsxs2("button", { style: { ...styles.ghostBtn, marginBottom: 14 }, onClick: () => setPrintOpen(true), children: [
      /* @__PURE__ */ jsx2(Printer, { size: 14 }),
      " Print / export PDF"
    ] }),
    variant !== "off" && /* @__PURE__ */ jsxs2(Fragment, { children: [
      /* @__PURE__ */ jsxs2("button", { style: { ...styles.ghostBtn, marginBottom: 10 }, onClick: () => setImportOpen(true), children: [
        /* @__PURE__ */ jsx2(Import, { size: 14 }),
        " Import from Non-timed"
      ] }),
      /* @__PURE__ */ jsxs2("div", { style: styles.printHint, children: [
        /* @__PURE__ */ jsx2(Printer, { size: 13 }),
        " PDF export uses the Non-timed question bank \u2014 switch to that option to print."
      ] })
    ] }),
    importOpen && /* @__PURE__ */ jsx2(
      ImportModal,
      {
        exam,
        subjectId,
        chapterId,
        onImport: importSelected,
        onClose: () => setImportOpen(false),
        showToast
      }
    ),
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
function ImportModal({ exam, subjectId, chapterId, onImport, onClose, showToast }) {
  const [banks, setBanks] = useState(null);
  const [chosenBankId, setChosenBankId] = useState(null);
  const [bankQuestions, setBankQuestions] = useState(null);
  const [selected, setSelected] = useState({});
  useEffect(() => {
    (async () => {
      setBanks(await sGet(`banks:${exam.id}:${subjectId}:${chapterId}:off`, []));
    })();
  }, [exam.id, subjectId, chapterId]);
  const pickBank = async (bId) => {
    setChosenBankId(bId);
    setSelected({});
    const list = await sGet(`questions:${exam.id}:${subjectId}:${chapterId}:off:${bId}`, []);
    setBankQuestions(list);
  };
  const toggle = (id) => setSelected({ ...selected, [id]: !selected[id] });
  const selectedCount = Object.values(selected).filter(Boolean).length;
  const doImport = () => {
    const chosen = bankQuestions.filter((q) => selected[q.id]);
    if (chosen.length === 0) {
      showToast("Select at least one question to import", "error");
      return;
    }
    onImport(chosen);
  };
  return /* @__PURE__ */ jsx2("div", { style: styles.modalBackdrop, onClick: onClose, children: /* @__PURE__ */ jsx2("div", { style: { ...styles.modalCard, maxWidth: 460, maxHeight: "80vh", overflowY: "auto" }, onClick: (e) => e.stopPropagation(), children: !chosenBankId ? /* @__PURE__ */ jsxs2(Fragment, { children: [
    /* @__PURE__ */ jsx2("div", { style: styles.fieldLabel, children: "Import from which Non-timed bank?" }),
    banks === null ? /* @__PURE__ */ jsx2(LoadingBlock, {}) : banks.length === 0 ? /* @__PURE__ */ jsx2(EmptyState, { text: "No Non-timed banks exist yet to import from." }) : /* @__PURE__ */ jsx2("div", { style: { display: "flex", flexDirection: "column", gap: 8, marginTop: 10 }, children: banks.map((b) => /* @__PURE__ */ jsx2("button", { style: styles.addBtn, onClick: () => pickBank(b.id), children: b.name }, b.id)) }),
    /* @__PURE__ */ jsx2("button", { style: { ...styles.ghostBtn, marginTop: 12, width: "100%", justifyContent: "center" }, onClick: onClose, children: "Cancel" })
  ] }) : bankQuestions === null ? /* @__PURE__ */ jsx2(LoadingBlock, {}) : bankQuestions.length === 0 ? /* @__PURE__ */ jsxs2(Fragment, { children: [
    /* @__PURE__ */ jsx2(EmptyState, { text: "That bank has no questions to import." }),
    /* @__PURE__ */ jsx2("button", { style: { ...styles.ghostBtn, marginTop: 12, width: "100%", justifyContent: "center" }, onClick: () => setChosenBankId(null), children: "Back" })
  ] }) : /* @__PURE__ */ jsxs2(Fragment, { children: [
    /* @__PURE__ */ jsxs2("div", { style: styles.fieldLabel, children: [
      "Pick questions to import (",
      selectedCount,
      " selected)"
    ] }),
    /* @__PURE__ */ jsx2("div", { style: { display: "flex", flexDirection: "column", gap: 8, marginTop: 10 }, children: bankQuestions.map((q, i) => /* @__PURE__ */ jsxs2("label", { style: styles.radioRow, children: [
      /* @__PURE__ */ jsx2("input", { type: "checkbox", checked: !!selected[q.id], onChange: () => toggle(q.id) }),
      /* @__PURE__ */ jsxs2("div", { children: [
        /* @__PURE__ */ jsxs2("div", { style: styles.radioTitle, children: [
          "Q",
          i + 1,
          ". ",
          q.text || "(image question)"
        ] }),
        /* @__PURE__ */ jsx2("div", { style: styles.radioSub, children: q.options.map((o) => o.text).filter(Boolean).join(" \xB7 ") })
      ] })
    ] }, q.id)) }),
    /* @__PURE__ */ jsxs2("div", { style: styles.formRow, children: [
      /* @__PURE__ */ jsxs2("button", { style: styles.primaryBtn, onClick: doImport, children: [
        /* @__PURE__ */ jsx2(Import, { size: 14 }),
        " Import selected (",
        selectedCount,
        ")"
      ] }),
      /* @__PURE__ */ jsx2("button", { style: styles.ghostBtn, onClick: () => setChosenBankId(null), children: "Back" })
    ] })
  ] }) }) });
}
function QuizScreen({ exam, subjectId, chapterId, variant, bankId, studentName, setStudentName, onBack, showToast }) {
  const [questions, setQuestions] = useState(null);
  const [totalSeconds, setTotalSeconds] = useState(null);
  const [started, setStarted] = useState(false);
  const [nameInput, setNameInput] = useState(studentName);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [saving, setSaving] = useState(false);
  const [saveFailed, setSaveFailed] = useState(false);
  const [saveError, setSaveError] = useState("");
  const key = `questions:${exam.id}:${subjectId}:${chapterId}:${variant}:${bankId}`;
  const settingsKey = `settings:${exam.id}:${subjectId}:${chapterId}:${variant}:${bankId}`;
  const [subjectName, setSubjectName] = useState(subjectId);
  const [chapterName, setChapterName] = useState(chapterId === "none" ? null : chapterId);
  const [bankName, setBankName] = useState(bankId);
  useEffect(() => {
    (async () => setQuestions(await sGet(key, [])))();
  }, [key]);
  useEffect(() => {
    (async () => {
      const banks = await sGet(`banks:${exam.id}:${subjectId}:${chapterId}:${variant}`, []);
      const b = banks.find((bk) => bk.id === bankId);
      if (b) setBankName(b.name);
    })();
  }, [exam.id, subjectId, chapterId, variant, bankId]);
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
      bankId,
      bankName,
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
      /* @__PURE__ */ jsx2("div", { style: styles.timerBarTrack, children: /* @__PURE__ */ jsx2(
        "div",
        {
          className: pct < 20 ? "px-pulse" : "",
          style: { ...styles.timerBarFill, width: `${pct}%`, background: pct < 20 ? "var(--bad)" : "var(--gold)" }
        }
      ) })
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
var CONFETTI_COLORS = ["#E8A33D", "#3F8F5F", "#16233F", "#C1443D", "#5B8DEF"];
function Confetti() {
  const pieces = Array.from({ length: 28 }, (_, i) => ({
    left: i * 37 % 100,
    color: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
    delay: i % 10 * 0.12,
    duration: 2.2 + i % 5 * 0.3,
    size: 6 + i % 3 * 3
  }));
  return /* @__PURE__ */ jsx2("div", { style: styles.confettiWrap, children: pieces.map((p, i) => /* @__PURE__ */ jsx2(
    "div",
    {
      className: "px-fall",
      style: {
        position: "absolute",
        top: -20,
        left: `${p.left}%`,
        width: p.size,
        height: p.size * 1.6,
        background: p.color,
        borderRadius: 2,
        animationDelay: `${p.delay}s`,
        animationDuration: `${p.duration}s`
      }
    },
    i
  )) });
}
function ResultCard({ score, total, saving, saveFailed, saveError }) {
  const pct = Math.round(score / total * 100);
  const [displayScore, setDisplayScore] = useState(0);
  useEffect(() => {
    if (score === 0) {
      setDisplayScore(0);
      return;
    }
    const start = performance.now();
    const dur = 700;
    let raf;
    const tick = (now) => {
      const t = Math.min(1, (now - start) / dur);
      setDisplayScore(Math.round(t * score));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [score]);
  let note = "Result saved to your history.";
  if (saving) note = "Saving your result\u2026";
  else if (saveFailed) note = `Couldn't save: ${saveError}. ${APP_HINT}`;
  let band = "Keep practicing \u2014 you'll get there.";
  if (pct >= 90) band = "Outstanding! \u{1F389}";
  else if (pct >= 70) band = "Great work!";
  else if (pct >= 50) band = "Good effort \u2014 keep going.";
  return /* @__PURE__ */ jsxs2("div", { style: styles.resultCard, className: "px-pop", children: [
    pct >= 80 && /* @__PURE__ */ jsx2(Confetti, {}),
    /* @__PURE__ */ jsx2("div", { style: styles.resultStamp, children: /* @__PURE__ */ jsx2(Award, { size: 26 }) }),
    /* @__PURE__ */ jsxs2("div", { style: styles.resultScore, children: [
      displayScore,
      /* @__PURE__ */ jsxs2("span", { style: styles.resultTotal, children: [
        "/",
        total
      ] })
    ] }),
    /* @__PURE__ */ jsxs2("div", { style: styles.resultPct, children: [
      pct,
      "% correct"
    ] }),
    /* @__PURE__ */ jsx2("div", { style: styles.resultBand, children: band }),
    /* @__PURE__ */ jsx2("div", { style: { ...styles.resultNote, ...saveFailed ? { color: "var(--bad)" } : {} }, children: note })
  ] });
}
function StatsPanel({ records }) {
  const stats = useMemo(() => {
    if (!records.length) return null;
    const days = [...new Set(records.map((r) => new Date(r.date).toDateString()))].map((d) => new Date(d)).sort((a, b) => b - a);
    let streak = 0;
    if (days.length) {
      const oneDay = 864e5;
      let cursor = /* @__PURE__ */ new Date();
      cursor.setHours(0, 0, 0, 0);
      const mostRecent = new Date(days[0]);
      mostRecent.setHours(0, 0, 0, 0);
      if (cursor - mostRecent <= oneDay) {
        cursor = mostRecent;
        for (const d of days) {
          const day = new Date(d);
          day.setHours(0, 0, 0, 0);
          if (day.getTime() === cursor.getTime()) {
            streak++;
            cursor = new Date(cursor.getTime() - oneDay);
          } else break;
        }
      }
    }
    const bySubject = {};
    records.forEach((r) => {
      const name = r.subjectName || r.subjectId || "Unknown";
      if (!bySubject[name]) bySubject[name] = { correct: 0, total: 0 };
      bySubject[name].correct += r.score;
      bySubject[name].total += r.total;
    });
    const subjectAverages = Object.entries(bySubject).map(([name, v]) => ({
      name,
      pct: v.total ? Math.round(v.correct / v.total * 100) : 0
    }));
    subjectAverages.sort((a, b) => b.pct - a.pct);
    const best = subjectAverages[0];
    const weakest = subjectAverages.length > 1 ? subjectAverages[subjectAverages.length - 1] : null;
    const recent = [...records].slice(0, 8).reverse().map((r) => ({
      pct: r.total ? Math.round(r.score / r.total * 100) : 0
    }));
    return { streak, best, weakest, recent };
  }, [records]);
  if (!stats) return null;
  return /* @__PURE__ */ jsxs2("div", { style: styles.statsCard, children: [
    /* @__PURE__ */ jsxs2("div", { style: styles.statsRow, children: [
      /* @__PURE__ */ jsxs2("div", { style: styles.statsBlock, children: [
        /* @__PURE__ */ jsx2("div", { style: styles.statsNum, children: stats.streak }),
        /* @__PURE__ */ jsx2("div", { style: styles.statsLabel, children: "day streak" })
      ] }),
      stats.best && /* @__PURE__ */ jsxs2("div", { style: styles.statsBlock, children: [
        /* @__PURE__ */ jsxs2("div", { style: styles.statsNum, children: [
          stats.best.pct,
          "%"
        ] }),
        /* @__PURE__ */ jsxs2("div", { style: styles.statsLabel, children: [
          "best: ",
          stats.best.name
        ] })
      ] }),
      stats.weakest && /* @__PURE__ */ jsxs2("div", { style: styles.statsBlock, children: [
        /* @__PURE__ */ jsxs2("div", { style: styles.statsNum, children: [
          stats.weakest.pct,
          "%"
        ] }),
        /* @__PURE__ */ jsxs2("div", { style: styles.statsLabel, children: [
          "focus: ",
          stats.weakest.name
        ] })
      ] })
    ] }),
    stats.recent.length > 1 && /* @__PURE__ */ jsx2("div", { style: styles.trendRow, children: stats.recent.map((r, i) => /* @__PURE__ */ jsx2("div", { style: styles.trendBarTrack, children: /* @__PURE__ */ jsx2(
      "div",
      {
        style: {
          ...styles.trendBarFill,
          height: `${Math.max(6, r.pct)}%`,
          background: r.pct >= 70 ? "var(--good)" : r.pct >= 40 ? "var(--gold)" : "var(--bad)"
        }
      }
    ) }, i)) })
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
    searched && records !== null && (records.length === 0 ? /* @__PURE__ */ jsx2("div", { style: { marginTop: 16 }, children: /* @__PURE__ */ jsx2(EmptyState, { icon: /* @__PURE__ */ jsx2(History, { size: 22 }), text: "No quiz attempts found for that name yet." }) }) : /* @__PURE__ */ jsxs2(Fragment, { children: [
      /* @__PURE__ */ jsx2(StatsPanel, { records }),
      /* @__PURE__ */ jsx2("div", { style: { ...styles.qList, marginTop: 16 }, children: records.map((r) => /* @__PURE__ */ jsxs2("div", { style: styles.historyRow, children: [
        /* @__PURE__ */ jsxs2("div", { children: [
          /* @__PURE__ */ jsxs2("div", { style: styles.historyExam, children: [
            r.examLabel,
            " \xB7 ",
            r.subjectName || r.subjectId,
            r.chapterName ? ` \xB7 ${r.chapterName}` : "",
            r.variantLabel ? ` \xB7 ${r.variantLabel}` : "",
            r.bankName ? ` \xB7 ${r.bankName}` : ""
          ] }),
          /* @__PURE__ */ jsx2("div", { style: styles.historyDate, children: new Date(r.date).toLocaleString() })
        ] }),
        /* @__PURE__ */ jsxs2("div", { style: styles.historyScore, children: [
          r.score,
          "/",
          r.total
        ] })
      ] }, r.id)) })
    ] }))
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
    /* @__PURE__ */ jsx2(EmptyIllustration, {}),
    text
  ] });
}
function EmptyIllustration() {
  return /* @__PURE__ */ jsxs2("svg", { width: "88", height: "88", viewBox: "0 0 88 88", fill: "none", style: { animation: "pxFloat 3s ease-in-out infinite" }, children: [
    /* @__PURE__ */ jsx2("rect", { x: "20", y: "14", width: "38", height: "50", rx: "4", stroke: "var(--ink-3)", strokeWidth: "2", fill: "var(--paper)" }),
    /* @__PURE__ */ jsx2("line", { x1: "28", y1: "26", x2: "50", y2: "26", stroke: "var(--rule)", strokeWidth: "2.5", strokeLinecap: "round" }),
    /* @__PURE__ */ jsx2("line", { x1: "28", y1: "34", x2: "50", y2: "34", stroke: "var(--rule)", strokeWidth: "2.5", strokeLinecap: "round" }),
    /* @__PURE__ */ jsx2("line", { x1: "28", y1: "42", x2: "42", y2: "42", stroke: "var(--rule)", strokeWidth: "2.5", strokeLinecap: "round" }),
    /* @__PURE__ */ jsx2("circle", { cx: "58", cy: "56", r: "12", stroke: "var(--gold)", strokeWidth: "3", fill: "var(--paper-card)" }),
    /* @__PURE__ */ jsx2("line", { x1: "67", y1: "65", x2: "76", y2: "74", stroke: "var(--gold)", strokeWidth: "3.5", strokeLinecap: "round" })
  ] });
}
function LoadingBlock() {
  return /* @__PURE__ */ jsxs2("div", { style: styles.loading, children: [
    /* @__PURE__ */ jsx2("div", { style: { display: "flex", gap: 5 }, children: [0, 1, 2].map((i) => /* @__PURE__ */ jsx2(
      "div",
      {
        style: {
          width: 8,
          height: 8,
          borderRadius: "50%",
          background: "var(--gold)",
          animation: "pxBounce 1.1s ease-in-out infinite",
          animationDelay: `${i * 0.15}s`
        }
      },
      i
    )) }),
    "Loading\u2026"
  ] });
}
var FONT_IMPORT = `
@import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=IBM+Plex+Sans:wght@400;500;600&family=IBM+Plex+Mono:wght@500&display=swap');
@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
@keyframes pxFadeIn { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: translateY(0); } }
@keyframes pxPulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }
@keyframes pxPop { 0% { transform: scale(0.7); opacity: 0; } 60% { transform: scale(1.08); opacity: 1; } 100% { transform: scale(1); } }
@keyframes pxFall { from { transform: translateY(-10vh) rotate(0deg); opacity: 1; } to { transform: translateY(110vh) rotate(360deg); opacity: 0.9; } }
@keyframes pxBounce { 0%, 80%, 100% { transform: translateY(0); opacity: 0.5; } 40% { transform: translateY(-7px); opacity: 1; } }
@keyframes pxFloat { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-5px); } }
.px-fade-in { animation: pxFadeIn 0.28s ease; }
.px-pulse { animation: pxPulse 1s ease-in-out infinite; }
.px-pop { animation: pxPop 0.5s cubic-bezier(.2,1.4,.4,1); }
.px-fall { animation: pxFall linear forwards; }
button { transition: transform 0.1s ease, box-shadow 0.1s ease; }
button:active { transform: scale(0.96); }
* { -webkit-tap-highlight-color: transparent; }
button, [role="button"], a { outline: none; }
button:focus-visible, [role="button"]:focus-visible, a:focus-visible, input:focus-visible, textarea:focus-visible {
  outline: 2px solid var(--gold);
  outline-offset: 2px;
}
.px-tap { transition: transform 0.1s ease; }
.px-tap:active { transform: scale(0.97); }
:root {
  --ink: #16233F;
  --ink-2: #3C4A66;
  --ink-3: #8891A3;
  --paper: #F1F3F6;
  --paper-card: #FFFFFF;
  --rule: #D8DCE3;
  --gold: #E8A33D;
  --gold-dark: #B97D22;
  --gold-bg: #FBF2E2;
  --gold-border: #F0DDB3;
  --good: #3F8F5F;
  --good-bg: #E6F4EB;
  --good-border: #BFE3CC;
  --bad: #C1443D;
  --bad-bg: #FBEAE9;
  --bad-border: #F0D3D1;
}
[data-theme="dark"] {
  --ink: #EDF1F8;
  --ink-2: #C3CBDA;
  --ink-3: #8994AC;
  --paper: #0F1626;
  --paper-card: #182238;
  --rule: #2C3852;
  --gold: #EFB65B;
  --gold-dark: #F5C878;
  --gold-bg: #3A2E14;
  --gold-border: #5A4820;
  --good: #5BC183;
  --good-bg: #163524;
  --good-border: #2F5940;
  --bad: #E17870;
  --bad-bg: #3B1A1B;
  --bad-border: #5A2E2E;
}
* { box-sizing: border-box; }
input, textarea, button { font-family: 'IBM Plex Sans', sans-serif; color: inherit; }
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
    background: "var(--gold-bg)",
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
    background: "var(--gold-bg)",
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
  doneToggleBtn: {
    background: "var(--paper)",
    color: "var(--ink-3)",
    border: "1px solid var(--rule)"
  },
  doneToggleActive: {
    background: "var(--good-bg)",
    color: "var(--good)",
    border: "1px solid var(--good-border)"
  },
  iconEditBtn: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 38,
    background: "var(--gold-bg)",
    color: "var(--gold-dark)",
    border: "1px solid var(--gold-border)",
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
  optRowCorrect: { background: "var(--good-bg)", borderColor: "var(--good-border)", color: "var(--good)", fontWeight: 500 },
  optRowWrong: { background: "var(--bad-bg)", borderColor: "var(--bad-border)", color: "var(--bad)", fontWeight: 500 },
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
  optButtonActive: { background: "var(--gold-bg)", borderColor: "var(--gold)", color: "var(--ink)", fontWeight: 500 },
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
    background: "var(--gold-bg)",
    border: "1px solid var(--gold-border)",
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
    background: "var(--gold-bg)",
    border: "1px solid var(--gold-border)",
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
    marginBottom: 18,
    position: "relative"
  },
  confettiWrap: {
    position: "fixed",
    inset: 0,
    overflow: "hidden",
    pointerEvents: "none",
    zIndex: 50
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
  resultBand: { fontSize: 13.5, fontWeight: 600, color: "var(--gold-dark)", marginTop: 6 },
  resultNote: { fontFamily: "'IBM Plex Mono', monospace", fontSize: 10.5, color: "var(--ink-3)", marginTop: 8 },
  statsCard: {
    background: "var(--paper-card)",
    border: "1px solid var(--rule)",
    borderRadius: 12,
    padding: 16,
    marginTop: 16
  },
  statsRow: { display: "flex", gap: 18 },
  statsBlock: { flex: 1, textAlign: "center" },
  statsNum: { fontFamily: "'Fraunces', serif", fontSize: 22, fontWeight: 700, color: "var(--ink)" },
  statsLabel: { fontSize: 10.5, color: "var(--ink-3)", marginTop: 2, lineHeight: 1.3 },
  trendRow: {
    display: "flex",
    alignItems: "flex-end",
    gap: 6,
    height: 56,
    marginTop: 16,
    borderTop: "1px solid var(--rule)",
    paddingTop: 10
  },
  trendBarTrack: { flex: 1, height: "100%", display: "flex", alignItems: "flex-end" },
  trendBarFill: { width: "100%", borderRadius: "3px 3px 0 0", transition: "height 0.4s ease" },
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

function PracticeTimerScreen({ onBack }) {
  const [step, setStep] = useState("setup");
  const [mode, setMode] = useState("per");
  const [perSeconds, setPerSeconds] = useState(60);
  const [totalMinutes, setTotalMinutes] = useState(10);
  const [secondsLeft, setSecondsLeft] = useState(60);
  const [running, setRunning] = useState(false);
  const [questionNum, setQuestionNum] = useState(1);
  const [finished, setFinished] = useState(false);
  const audioCtxRef = useRef(null);
  const ensureAudio = () => {
    if (!audioCtxRef.current) {
      try {
        audioCtxRef.current = new (window.AudioContext || window.webkitAudioContext)();
      } catch {
      }
    }
    return audioCtxRef.current;
  };
  const playAlert = () => {
    const ctx = ensureAudio();
    if (ctx) {
      try {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.frequency.value = 880;
        gain.gain.setValueAtTime(0.25, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(1e-3, ctx.currentTime + 0.4);
        osc.start();
        osc.stop(ctx.currentTime + 0.4);
      } catch {
      }
    }
    if (navigator.vibrate) {
      try {
        navigator.vibrate([200, 100, 200]);
      } catch {
      }
    }
  };
  useEffect(() => {
    if (step !== "running" || !running) return;
    const interval = setInterval(() => {
      setSecondsLeft((s) => {
        if (s <= 1) {
          playAlert();
          if (mode === "per") {
            setQuestionNum((n) => n + 1);
            return perSeconds;
          } else {
            setRunning(false);
            setFinished(true);
            return 0;
          }
        }
        return s - 1;
      });
    }, 1e3);
    return () => clearInterval(interval);
  }, [step, running, mode, perSeconds]);
  const start = () => {
    ensureAudio();
    setFinished(false);
    setQuestionNum(1);
    setSecondsLeft(mode === "per" ? perSeconds : totalMinutes * 60);
    setStep("running");
    setRunning(true);
  };
  const togglePause = () => setRunning((r) => !r);
  const nextQuestion = () => {
    setQuestionNum((n) => n + 1);
    setSecondsLeft(perSeconds);
  };
  const resetTimer = () => {
    setRunning(false);
    setFinished(false);
    setQuestionNum(1);
    setSecondsLeft(mode === "per" ? perSeconds : totalMinutes * 60);
  };
  const backToSetup = () => {
    setRunning(false);
    setStep("setup");
  };
  const fmtTime = (s) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;
  const duration = mode === "per" ? perSeconds : totalMinutes * 60;
  const pct = Math.max(0, Math.min(100, secondsLeft / duration * 100));
  if (step === "setup") {
    return /* @__PURE__ */ jsxs2("div", { children: [
      /* @__PURE__ */ jsx2(BackRow, { onBack, label: "Back" }),
      /* @__PURE__ */ jsx2(SectionHeading, { eyebrow: "Tool", title: "Practice timer", sub: "For working through questions in a physical book \u2014 nothing here is saved." }),
      /* @__PURE__ */ jsxs2("div", { style: styles.singleForm, children: [
        /* @__PURE__ */ jsx2("label", { style: styles.fieldLabel, children: "Timing mode" }),
        /* @__PURE__ */ jsxs2("div", { style: { display: "flex", flexDirection: "column", gap: 8 }, children: [
          /* @__PURE__ */ jsxs2("label", { style: styles.radioRow, children: [
            /* @__PURE__ */ jsx2("input", { type: "radio", checked: mode === "per", onChange: () => setMode("per") }),
            /* @__PURE__ */ jsxs2("div", { children: [
              /* @__PURE__ */ jsx2("div", { style: styles.radioTitle, children: "Time each question separately" }),
              /* @__PURE__ */ jsx2("div", { style: styles.radioSub, children: "Set seconds per question \u2014 it auto-restarts and counts up the question number each time it runs out." })
            ] })
          ] }),
          /* @__PURE__ */ jsxs2("label", { style: styles.radioRow, children: [
            /* @__PURE__ */ jsx2("input", { type: "radio", checked: mode === "total", onChange: () => setMode("total") }),
            /* @__PURE__ */ jsxs2("div", { children: [
              /* @__PURE__ */ jsx2("div", { style: styles.radioTitle, children: "One total countdown" }),
              /* @__PURE__ */ jsx2("div", { style: styles.radioSub, children: "Set one total duration for the whole session \u2014 it alerts once when time runs out." })
            ] })
          ] })
        ] }),
        mode === "per" ? /* @__PURE__ */ jsxs2(Fragment, { children: [
          /* @__PURE__ */ jsx2("label", { style: styles.fieldLabel, children: "Seconds per question" }),
          /* @__PURE__ */ jsx2(
            "input",
            {
              type: "number",
              min: "5",
              style: styles.input,
              value: perSeconds,
              onChange: (e) => setPerSeconds(Math.max(5, parseInt(e.target.value) || 60))
            }
          )
        ] }) : /* @__PURE__ */ jsxs2(Fragment, { children: [
          /* @__PURE__ */ jsx2("label", { style: styles.fieldLabel, children: "Total minutes" }),
          /* @__PURE__ */ jsx2(
            "input",
            {
              type: "number",
              min: "1",
              style: styles.input,
              value: totalMinutes,
              onChange: (e) => setTotalMinutes(Math.max(1, parseInt(e.target.value) || 10))
            }
          )
        ] }),
        /* @__PURE__ */ jsxs2("button", { style: { ...styles.primaryBtn, marginTop: 4, justifyContent: "center" }, onClick: start, children: [
          /* @__PURE__ */ jsx2(Timer, { size: 15 }),
          " Start timer"
        ] })
      ] })
    ] });
  }
  return /* @__PURE__ */ jsxs2("div", { children: [
    /* @__PURE__ */ jsx2(BackRow, { onBack: backToSetup, label: "Change settings" }),
    /* @__PURE__ */ jsx2(SectionHeading, { eyebrow: "Practice timer", title: mode === "per" ? `Question ${questionNum}` : "Session countdown" }),
    /* @__PURE__ */ jsxs2("div", { style: styles.timerRow, children: [
      /* @__PURE__ */ jsx2(Timer, { size: 14 }),
      /* @__PURE__ */ jsx2("span", { style: styles.timerText, children: fmtTime(secondsLeft) }),
      /* @__PURE__ */ jsx2("div", { style: styles.timerBarTrack, children: /* @__PURE__ */ jsx2(
        "div",
        {
          className: pct < 20 ? "px-pulse" : "",
          style: { ...styles.timerBarFill, width: `${pct}%`, background: pct < 20 ? "var(--bad)" : "var(--gold)" }
        }
      ) })
    ] }),
    finished && mode === "total" && /* @__PURE__ */ jsxs2("div", { style: styles.resultCard, children: [
      /* @__PURE__ */ jsx2("div", { style: styles.resultBand, children: "Time's up!" }),
      /* @__PURE__ */ jsx2("div", { style: styles.resultNote, children: "Session finished \u2014 tap Reset to run it again." })
    ] }),
    /* @__PURE__ */ jsxs2("div", { style: styles.formRow, children: [
      /* @__PURE__ */ jsx2("button", { style: { ...styles.primaryBtn, flex: 1, justifyContent: "center" }, onClick: togglePause, children: running ? "Pause" : "Resume" }),
      /* @__PURE__ */ jsx2("button", { style: styles.ghostBtn, onClick: resetTimer, children: "Reset" })
    ] }),
    mode === "per" && /* @__PURE__ */ jsx2("button", { style: { ...styles.ghostBtn, marginTop: 8, width: "100%", justifyContent: "center" }, onClick: nextQuestion, children: "Skip to next question" })
  ] });
}

import { initializeApp } from "firebase/app";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  deleteDoc,
} from "firebase/firestore";
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./app.js";

// ---------------------------------------------------------------------------
// PASTE YOUR FIREBASE CONFIG HERE — see SETUP.md for how to get this.
// ---------------------------------------------------------------------------

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhgNZwuTVDX4ruckM_wMgwhKa-5S0LOA4",
  authDomain: "pracox-2026.firebaseapp.com",
  projectId: "pracox-2026",
  storageBucket: "pracox-2026.firebasestorage.app",
  messagingSenderId: "365316092180",
  appId: "1:365316092180:web:4ae1e5e958a8c4f7cf9201"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

// Firestore doc IDs can't contain "/", so swap any into a safe character.
// (App keys use ":" which Firestore allows fine, but this guards against
// any future key that might include a slash.)
const safeId = (key) => key.replace(/\//g, "__");

// A tiny stand-in for the Claude-artifact `window.storage` API this app was
// originally written against — same method names/shapes, so the rest of the
// app (sGet/sSet in app.jsx) needs zero changes.
//
//   shared = true  -> stored in Firestore, visible to everyone using this site
//   shared = false -> stored in this browser's localStorage only (per device)
window.storage = {
  async get(key, shared) {
    if (shared) {
      const snap = await getDoc(doc(db, "pracox_kv", safeId(key)));
      if (!snap.exists()) throw new Error("not found");
      return { key, value: snap.data().value, shared };
    } else {
      const v = localStorage.getItem("pracox_priv:" + key);
      if (v === null) throw new Error("not found");
      return { key, value: v, shared };
    }
  },
  async set(key, value, shared) {
    if (shared) {
      await setDoc(doc(db, "pracox_kv", safeId(key)), { value });
    } else {
      localStorage.setItem("pracox_priv:" + key, value);
    }
    return { key, value, shared };
  },
  async delete(key, shared) {
    if (shared) {
      await deleteDoc(doc(db, "pracox_kv", safeId(key)));
    } else {
      localStorage.removeItem("pracox_priv:" + key);
    }
    return { key, deleted: true, shared };
  },
  async list() {
    // Not used by the app today — included for API completeness.
    return { keys: [] };
  },
};

const root = createRoot(document.getElementById("root"));
root.render(React.createElement(App));

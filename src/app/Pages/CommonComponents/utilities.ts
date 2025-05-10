"use client";
export function sizeCheck() {
  if (typeof window == "undefined") return undefined;
  if (window.innerWidth <= 480) {
    return "mobile";
  } else if (window.innerWidth <= 768) {
    return "tablet";
  } else if (window.innerWidth <= 1068) {
    return "laptop";
  } else {
    return "desktop";
  }
}

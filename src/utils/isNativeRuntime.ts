// @ts-ignore
export const isNative =
  typeof window !== "undefined" ? window.__TAURI_IPC__ !== undefined : false;

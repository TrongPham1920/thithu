const STORAGE_KEY = "thi-thu:topic-progress:v1";
const EMPTY_PROGRESS = {};
let snapshot: any;
const listeners = new Set<() => void>();

export function getPracticeProgress() {
  if (!snapshot) snapshot = readPracticeProgress();
  return snapshot;
}

export function getServerPracticeProgress() {
  return EMPTY_PROGRESS;
}

export function subscribePracticeProgress(listener: () => void) {
  listeners.add(listener);
  const onStorage = (event: StorageEvent) => {
    if (event.key === STORAGE_KEY || event.key === null) {
      snapshot = readPracticeProgress();
      listeners.forEach((notify) => notify());
    }
  };
  window.addEventListener("storage", onStorage);
  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", onStorage);
  };
}

export function subscribeReady() {
  return () => {};
}
export function getClientReady() {
  return true;
}
export function getServerReady() {
  return false;
}

export function readPracticeProgress() {
  try {
    const data = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
    const result: any = {};
    if (!data || typeof data !== "object" || Array.isArray(data)) return result;
    for (const [subject, topics] of Object.entries(data)) {
      if (!topics || typeof topics !== "object" || Array.isArray(topics)) continue;
      result[subject] = {};
      for (const [topic, value] of Object.entries(topics)) {
        const item: any = value;
        if (
          item &&
          [item.attempts, item.wrongCount, item.correctStreak].every(
            (n) => Number.isSafeInteger(n) && n >= 0,
          ) &&
          item.wrongCount <= item.attempts &&
          item.correctStreak <= item.attempts
        )
          result[subject][topic] = {
            attempts: item.attempts,
            wrongCount: item.wrongCount,
            correctStreak: item.correctStreak,
          };
      }
    }
    return result;
  } catch {
    return {};
  }
}

export function savePracticeProgress(progress: any) {
  snapshot = progress;
  listeners.forEach((notify) => notify());
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    return true;
  } catch {
    return false;
  }
}

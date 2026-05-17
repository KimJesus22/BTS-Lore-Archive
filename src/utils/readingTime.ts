export interface ReadingTime {
  minutes: number;
  label: string;
  words: number;
}

const WORDS_PER_MINUTE_ES = 220;

export const calculateReadingTime = (text: string): ReadingTime => {
  const words = text
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;

  const minutes = Math.max(1, Math.ceil(words / WORDS_PER_MINUTE_ES));
  const label = `${minutes} min de lectura`;

  return {
    minutes,
    label,
    words,
  };
};

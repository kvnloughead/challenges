// Returns the maximal time chunk. Example: if seconds is 3599, then maximal
// chunk is minutes.
const thresholds = {
  second: 1,
  minute: 60,
  hour: 3600,
  day: 3600 * 24,
  year: 3600 * 24 * 365,
};

function getTimeChunks(seconds) {
  let totalSeconds = seconds;
  const y = Math.floor(totalSeconds / (3600 * 24 * 365));
  totalSeconds %= 3600 * 24 * 365;
  const d = Math.floor(totalSeconds / (3600 * 24));
  totalSeconds %= 3600 * 24;
  const h = Math.floor(totalSeconds / 3600);
  totalSeconds %= 3600;
  const m = Math.floor(totalSeconds / 60);
  const s = totalSeconds % 60;
  return [
    { unit: "second", val: s },
    { unit: "minute", val: m },
    { unit: "hour", val: h },
    { unit: "day", val: d },
    { unit: "year", val: y },
  ];
}

// Unsophisticated pluralizer
function pluralize(word, count) {
  return count === 1 ? word : `${word}s`;
}

function formatStrs(strings) {
  switch (strings.length) {
    case 1:
      return strings[0];
    case 2:
      return `${strings[1]} and ${strings[0]}`;
    default:
      return `${strings.slice(2).reverse().join(", ")}, ${strings[1]} and ${
        strings[0]
      }`;
  }
}

function formatDuration(seconds) {
  if (seconds === 0) {
    return "now";
  }
  const chunks = getTimeChunks(seconds);
  const strings = [];
  chunks.forEach(({ unit, val }) => {
    if (val > 0 && seconds >= thresholds[unit]) {
      strings.push(`${val} ${pluralize(unit, val)}`);
    }
  });
  return formatStrs(strings);
}

console.log(formatDuration(31536000 + 3662));
console.log(formatDuration(31536000));
console.log(formatDuration(3662));
console.log(formatDuration(3660));

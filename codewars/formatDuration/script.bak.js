const units = {
  second: {
    calc: (s) => s % 60,
    min: 1,
  },
  minute: {
    calc: (s) => Math.floor(s / 60),
    min: 60,
  },
  hour: {
    calc: (s) => Math.floor(s / 3600),
    min: 3600,
  },
  day: {
    calc: (s) => Math.floor(s / (3600 * 24)),
    min: 3600 * 24,
  },
  year: {
    calc: (s) => Math.floor(s / (3600 * 24 * 365)),
    min: 3600 * 24 * 365,
  },
};

function formatDuration(seconds) {
  if (seconds === 0) {
    return "now";
  } else {
    const substrings = [];
    ["second", "minute", "hour", "day", "year"].forEach((unit) => {
      n =
        unit !== "second"
          ? units[unit].calc(seconds) % units[unit].min
          : units[unit].calc(seconds);
      if (n > 0 && seconds >= units[unit].min) {
        substrings.push(`${n} ${unit}${n !== 1 ? "s" : ""}`);
      }
    });
    if (substrings.length === 1) {
      return substrings[0];
    } else if (substrings.length === 2) {
      return `${substrings[1]} and ${substrings[0]}`;
    } else {
      let formatted = "";
      substrings
        .slice(2)
        .reverse()
        .forEach((s) => {
          formatted += `${s}, `;
        });
      return (formatted += `${substrings[1]} and ${substrings[0]}`);
    }
  }
}

console.log(formatDuration(3662));
console.log(formatDuration(3660));

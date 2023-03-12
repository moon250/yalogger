import {
  Color,
  blue,
  cyan,
  green,
  magenta,
  red,
  redBright,
  yellow,
  gray,
  bold,
  white,
} from "colorette";

type Log = (...data: (string | object)[]) => void;

type Level = {
  name: string;
  color: Color;
  bold?: boolean;
  time?: boolean;
};

const getFormattedDate = function (): string {
  const date = new Date();
  const months = [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
  ];
  let formatted = "";

  formatted += `${date.getFullYear()}/${months[date.getMonth()]}/${(
    "0" + date.getDate()
  ).slice(-2)}`;
  formatted += `  `;
  formatted += `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}.${date.getMilliseconds()}`;

  return formatted;
};

const success: Log = (...data) => {
  dataLog(data, {
    name: "success",
    color: green,
  });
};

const info: Log = (...data) => {
  dataLog(data, {
    name: "info",
    color: blue,
  });
};

const warn: Log = (...data) => {
  dataLog(data, {
    name: "warn",
    color: yellow,
  });
};

const error: Log = (...data) => {
  dataLog(data, {
    name: "error",
    color: redBright,
  });
};

const fatal: Log = (...data) => {
  dataLog(data, {
    name: "fatal",
    color: red,
    bold: true,
  });
};

const debug: Log = (...data) => {
  dataLog(data, {
    name: "debug",
    color: magenta,
  });
};

const log: Log = (...data) => {
  dataLog(data, {
    name: "log",
    color: cyan,
  });
};

/**
 * Log data to stdout, empty values ({}, "", []) are ignored
 *
 * Format : DATE | LEVEL - DATA
 */
const dataLog = (data: (string | object)[], level: Level) => {
  for (let fragment of data) {
    if (typeof fragment === "object") {
      fragment = JSON.stringify(fragment);
    }

    if (fragment === "" || fragment === "{}") continue;

    let levelName = level.color(level.name.toUpperCase());

    if (level.bold) {
      levelName = bold(levelName);
    }

    let message = `${levelName} - ${white(fragment)}`;

    if (level.time === false) {
      console.log(gray(message));
    } else {
      console.log(gray(`${getFormattedDate()} | ${message}`));
    }
  }
};

export { success, info, warn, error, fatal, debug, log, dataLog, Level, Log };

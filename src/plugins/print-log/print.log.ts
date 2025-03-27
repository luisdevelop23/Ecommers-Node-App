const printLog = {
  error: (url: string) => {
    const error = "\x1b[41m\x1b[37m";
    const reset = "\x1b[0m";
    console.log(`${error} ${url}${reset}`);
  },

  correct: (url: string) => {
    const correct = "\x1b[42m\x1b[37m";
    const reset = "\x1b[0m";
    console.log(`${correct} ${url}${reset}`);
  },

  warning: (url: string) => {
    const warning = "\x1b[43m\x1b[37m";
    const reset = "\x1b[0m";
    console.log(`${warning} ${url}${reset}`);
  },
};

export default printLog;

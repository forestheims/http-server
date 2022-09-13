export default {
  // Jest cannot pull in packages prefixed with '#'. This impacts chalk.js and
  // maybe otthers. See https://github.com/facebook/jest/issues/12270 for notes,
  // progess, and potential workarounds. This workaround comes from:
  // https://github.com/chalk/chalk/issues/532
  moduleNameMapper: {
    "#(.*)": "<rootDir>/node_modules/$1",
  },
};

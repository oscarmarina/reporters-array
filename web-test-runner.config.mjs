// import { playwrightLauncher } from '@web/test-runner-playwright';
import { defaultReporter } from "@web/test-runner";
import { mochaReporter } from "@chialab/wtr-mocha-reporter";

const filteredLogs = ["Running in dev mode", "lit-html is in dev mode"];

export default /** @type {import("@web/test-runner").TestRunnerConfig} */ ({
  /** Test files to run */
  files: "test/**/*.test.js",

  /** Resolve bare module imports */
  nodeResolve: {
    exportConditions: ["browser", "development"],
  },

  // OK
  //reporters: [mochaReporter()],

  // OK
  // reporters: [defaultReporter()],

  // fail
   reporters: [defaultReporter(), mochaReporter()],

  // fail
  /*  reporters: [
    defaultReporter({
      reportTestResults: false,
      reportTestProgress: true,
    }),
    mochaReporter(),
  ], */

  // OK
  /* reporters: [
    defaultReporter({
      reportTestResults: false,
      reportTestProgress: false,
    }),
    mochaReporter(),
  ], */

  // more or less
  /*  reporters: [
    defaultReporter({
      reportTestResults: true,
      reportTestProgress: false,
    }),
    mochaReporter(),
  ], */

  /** Filter out lit dev mode logs */
  filterBrowserLogs(log) {
    for (const arg of log.args) {
      if (
        typeof arg === "string" &&
        filteredLogs.some((l) => arg.includes(l))
      ) {
        return false;
      }
    }
    return true;
  },

  /** Compile JS for older browsers. Requires @web/dev-server-esbuild plugin */
  // esbuildTarget: 'auto',

  /** Amount of browsers to run concurrently */
  // concurrentBrowsers: 2,

  /** Amount of test files per browser to test concurrently */
  // concurrency: 1,

  /** Browsers to run tests on */
  // browsers: [
  //   playwrightLauncher({ product: 'chromium' }),
  //   playwrightLauncher({ product: 'firefox' }),
  //   playwrightLauncher({ product: 'webkit' }),
  // ],

  // See documentation for all available options
});

const t = require("tap");
const tsdLib = require("tsd");
const path = require("path");

const tsdRunner = tsdLib.default;
const parentDir = path.resolve(__dirname, "..");

/**
 * We use tsd (https://github.com/SamVerschueren/tsd) to validate TypeScript definitions programatically.
 * That library provides a CLI interface that generate human-friendly output, where it's much easier to understand what's failing.
 * The testing library tap makes it difficult to show complex human-friendly output for failures.
 * If this this test fails, please use the CLI to get better information by executing: ./node_modules/.bin/tsd
 */
t.test("Validate TypeScript Types", async (t) => {
  const diagnostics = await tsdRunner({
    cwd: parentDir, // the full path is required because the actual logic is outsources to a worker than needs a full path
    // typingsFile: `${parentDir}/types.d.ts`, // By default, this value is collected from package.json#/types
    // testFiles: [`${parentDir}/test-d/*.test-d.ts`] // By default, this value is test-d
  });

  if (diagnostics.length === 0) {
    t.pass("TypeScript definitions are OK");
    return;
  }

  const describeFailures = diagnostics
    .map((failure) => `"${path.basename(failure.fileName)}@${failure.line}:${failure.column}" ${failure.severity}="${failure.message}"`)
    .join("\n");
  t.fail(`Issues with TypeScript definitions. Please run './node_modules/.bin/tsd' to see human-friendly output. (${describeFailures})`);
});

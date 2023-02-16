if (process.platform === "win32") {
  // exit code 1 will cause the next script to execute only on windows
  process.exit(1);
} else {
  // exit code 1 will make it so that the next script is skipped
  process.exit(0);
}

const { execSync } = require("child_process")
const os = require("os")

// Run command depending on the OS
if (os.type() === "Windows_NT") {
    execSync("node build-windows.js", { encoding: "utf-8" })
} else {
    execSync("node build-linux.js", { encoding: "utf-8" })
}

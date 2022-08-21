const { execSync } = require("child_process")

execSync('if exist dist rmdir /S /Q dist && tsc -p tsconfig.json && tsc -p tsconfig-cjs.json && fixup.bat', { encoding: "utf-8" })

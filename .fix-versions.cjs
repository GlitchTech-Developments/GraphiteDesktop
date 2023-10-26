const fs = require("node:fs");
const packageJson = require("./package.json");
const cp = require("child_process");

const versionHandler = async () => {
  const { version: actualVersion } = packageJson;
  const revision = cp.execSync("git rev-parse --short HEAD").toString().trim();

  const updatePackageJsonVersion = async () => {
    const versionCode = actualVersion.split("-")[0];
    try {
      const newPackageJson = {
        ...packageJson,
        version: `${versionCode}-${revision}`,
      };
      await fs.promises.writeFile(
        "./package.json",
        JSON.stringify(newPackageJson, null, 2),
      );
    } catch (error) {
      console.error(error);
    }
  };

  const swapCargoPackageVersion = async () => {
    try {
      const cargo = await fs.promises.readFile(
        "./src-tauri/Cargo.toml",
        "utf-8",
      );

      if (!cargo) throw new Error("Cargo.toml not found");

      const cargoPackageVersion = cargo.match(/version = "(.*)"/)[1];

      console.log("versions mismatched:", {
        cargo: cargoPackageVersion,
        package: actualVersion,
      });

      const newCargoConfig = cargo.replace(
        /version = "(.*)"/,
        `version = "${actualVersion}"`,
      );
      await fs.promises.writeFile("./src-tauri/Cargo.toml", newCargoConfig);
    } catch (error) {
      console.error(error);
    }
  };

  const swapTauriPackageVersion = async () => {
    try {
      const tauri = await fs.promises.readFile(
        "./src-tauri/tauri.conf.json",
        "utf-8",
      );
      const tauriPackageVersion = tauri.match(/"version": "(.*)"/)[1];

      console.log("versions mismatched:", {
        tauri: tauriPackageVersion,
        package: actualVersion,
      });

      const newTauriConfig = tauri.replace(
        /"version": "(.*)"/,
        `"version": "${actualVersion}"`,
      );
      await fs.promises.writeFile(
        "./src-tauri/tauri.conf.json",
        newTauriConfig,
      );
    } catch (error) {
      console.error(error);
    }
  };

  await Promise.allSettled([
    updatePackageJsonVersion(),
    swapCargoPackageVersion(),
    swapTauriPackageVersion(),
  ]);
};
versionHandler();

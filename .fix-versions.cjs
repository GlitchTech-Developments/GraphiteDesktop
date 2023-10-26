const fs = require("node:fs");
const packageJson = require("./package.json");

const versionHandler = async () => {
  const { version: actualVersion } = packageJson;

  const updatePackageJsonVersion = async () => {
    const versionCode = actualVersion.split("-")[0];
    try {
      const newPackageJson = {
        ...packageJson,
        version: `${versionCode}`,
      };
      await fs.promises.writeFile(
        "./package.json",
        JSON.stringify(newPackageJson, null, 2),
      );
    } catch (error) {
      throw error;
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

      console.log("versions:", {
        cargo: cargoPackageVersion,
        package: actualVersion,
      });

      const newCargoConfig = cargo.replace(
        /version = "(.*)"/,
        `version = "${actualVersion}"`,
      );

      await fs.promises.writeFile("./src-tauri/Cargo.toml", newCargoConfig);

      if (cargoPackageVersion !== actualVersion)
        throw new Error("Version mismatch");
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

      if (!tauri) throw new Error("tauri.conf.json not found");

      const tauriPackageVersion = tauri.match(/"version": "(.*)"/)[1];

      console.log("versions:", {
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

      if (tauriPackageVersion !== actualVersion)
        throw new Error("Version mismatch");
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

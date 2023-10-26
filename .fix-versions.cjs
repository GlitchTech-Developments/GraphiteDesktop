const fs = require("node:fs");
const packageJson = require("./package.json");

const versionHandler = async () => {
  const { version: actualVersion } = packageJson;

  const swapCargoPackageVersion = async () => {
    try {
      const cargo = await fs.promises.readFile(
        "./src-tauri/Cargo.toml",
        "utf-8",
      );

      if (!cargo) throw new Error("Cargo.toml not found");

      const cargoPackageVersion = cargo.match(/version = "(.*)"/)[1];

      if (cargoPackageVersion === actualVersion) {
        console.log("versions matched on cargo package", {
          cargo: cargoPackageVersion,
          package: actualVersion,
        });
        return;
      }

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

      if (tauriPackageVersion === actualVersion) {
        console.log("versions matched on tauri package", {
          tauri: tauriPackageVersion,
          package: actualVersion,
        });

        return;
      }

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
    swapCargoPackageVersion(),
    swapTauriPackageVersion(),
  ]);
};
versionHandler();

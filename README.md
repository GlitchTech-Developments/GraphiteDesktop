<h1 align="center">Welcome to GraphiteDesktop 👋</h1>
<p>
  <img alt="GitHub package.json version (stable-branch)" src="https://img.shields.io/github/package-json/v/GlitchTech-Developments/GraphiteDesktop/main?label=version%20%7C%20stable&color=%2334a123">
  <img alt="GitHub package.json version (nightly-branch)" src="https://img.shields.io/github/package-json/v/GlitchTech-Developments/GraphiteDesktop/nightly?label=version%20%7C%20nightly&color=%2334a123">
  <a href="https://github.com/GlitchTech-Developments/GraphiteDesktop/blob/main/LICENCE" target="_blank" style="text-decoration:none;">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
  <a href="https://twitter.com/GlitchTechEU" target="_blank">
    <img alt="Twitter: GlitchTechEU" src="https://img.shields.io/twitter/follow/GlitchTechEU.svg?style=social" />
  </a>
</p>

> Open-Source Desktop application for Graphite. (Practically wraps the web-app for now)

## How to install GraphiteDesktop?

### Windows

Grab the latest release from [here](https://github.com/GlitchTech-Developments/GraphiteDesktop/releases/latest) and run the MSI or EXE installer.

### Linux

For now we only support deb packaging which can be found [here](https://github.com/GlitchTech-Developments/GraphiteDesktop/releases/latest) as well. If you run Arch or any other distro, you can build the app yourself by using the following commands.

Arch

```sh
pnpm tauri build
sudo cp src-tauri/target/release/graphite-desktop /usr/bin/graphite-desktop
```

## Install

```sh
pnpm install
```

## Usage

```sh
pnpm run dev:native
```

## Run executable locally

> After these commands you'll find the installer in `/src-tauri/target/release/bundle` depending on your platform. Automated releases towards github will be coming in the near future as well though.

```sh
pnpm tauri build && pnpm run preview:native-[win/linux]
```

## What to expect?

When opening the app, you'll first be welcomed with the following screen where the app checks if Graphite is up and reachable:
![image](https://github.com/GlitchTech-Developments/GraphiteDesktop/assets/60965908/4bd9943a-5fb9-4ee8-9a05-bf1679c2e070)

On windows you'll get (after logging in) the following screen (could change upstream at some point):
![image](https://github.com/GlitchTech-Developments/GraphiteDesktop/assets/60965908/60d266c0-9af4-4500-bea3-52f2bb564d1b)

## Author

👤 **GlitchTech Developments**

- Website: https://glitchtech.eu
- Twitter: [@GlitchTechEU](https://twitter.com/GlitchTechEU)
- Github: [@GlitchTech-Developments](https://github.com/GlitchTech-Developments)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/GlitchTech-Developments/GraphiteDesktop/issues).

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2023 [GlitchTech Developments](https://github.com/GlitchTech-Developments).<br />
This project is [MIT](https://github.com/GlitchTech-Developments/GraphiteDesktop/blob/main/LICENCE) licensed.

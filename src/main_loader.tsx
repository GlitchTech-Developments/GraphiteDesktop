import { render } from "preact";

import "@/styles/tailwind.css";

import SplashScreenProvider from "./providers/splashScreen";

const mountPoint = document.getElementById("GLITCHTECH_APP");

const App = () => {
  return (
    <SplashScreenProvider>
      <div class="wrapper">
        <div class="content">
          <div className="flex flex-1">Checking status of Graphite Web...</div>
        </div>
      </div>
    </SplashScreenProvider>
  );
};

render(<App />, mountPoint!);

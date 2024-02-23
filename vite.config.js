const { defineConfig } = require("vite");

module.exports = defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: "src/index.html",
        mercury: "src/mercury.html",
        venus: "src/venus.html",
        earth: "src/earth.html",
        mars: "src/mars.html",
        jupiter: "src/jupiter.html",
        saturn: "src/saturn.html",
        uranus: "src/uranus.html",
        neptune: "src/neptune.html",
        pluto: "src/pluto.html",
      },
    },
  },
});

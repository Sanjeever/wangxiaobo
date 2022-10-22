const vetur = require("@volar-plugins/vetur");

module.exports = {
  plugins: [
    vetur(),
    Components({
      dts: true, // enabled by default if `typescript` is installed
    }),
  ],
};

module.exports = {
  plugins: {
    "postcss-import": {},
    "tailwindcss/nesting": "postcss-nesting",
    tailwindcss: {
      config: require.resolve("./tailwind.config.cjs"),
    },
    "postcss-preset-env": {
      autoprefixer: {},
      stage: 3,
      features: {
        "custom-properties": false,
        "nesting-rules": false,
      },
      cssnano: {
        preset: "advanced",
      },
    },
  },
};

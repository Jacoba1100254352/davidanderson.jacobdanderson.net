module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["plugin:vue/essential", "eslint:recommended", "@vue/prettier"],
  parserOptions: {
    parser: "babel-eslint",
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
  },
};


// module.exports = {
//   root: true,
//   env: {
//     node: true,
//     es2021: true,
//   },
//   extends: ["plugin:vue/essential", "airbnb-base", "eslint:recommended", "@vue/prettier"],
//   parserOptions: {
//     ecmaVersion: 12,
//     sourceType: 'module',
//     parser: "babel-eslint",
//   },
//   plugins: [
//     'vue',
//   ],
//   rules: {
//     "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
//     "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
//   },
// };
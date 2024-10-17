import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";
import url from "@rollup/plugin-url";

export default {
  input: "src/components/index.ts",
  output: [
    {
      file: "dist/index.cjs.js",
      format: "cjs",
      sourcemap: true,
    },
    {
      file: "dist/index.esm.js",
      format: "esm",
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve(), 
    commonjs(),
    typescript(), 
    postcss({
      modules: true, 
      extract: true, 
      minimize: true, 
    }),
    url({
      include: ["**/*.png", "**/*.svg"], 
      limit: 8192,
    }),
  ],
  external: ["react", "react-dom"],
};

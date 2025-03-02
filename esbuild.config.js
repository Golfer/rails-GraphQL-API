const path = require("path");
const rails = require("esbuild-rails");
const sassPlugin = require("esbuild-plugin-sass");
const { copy } = require("esbuild-plugin-copy");
const esbuild = require("esbuild");

const isProduction = process.env.NODE_ENV === "production";

const buildOptions = {
    entryPoints: [
        "application.js"
    ],
    bundle: true,
    minify: isProduction,
    outdir: path.join(process.cwd(), "app/assets/builds"),
    absWorkingDir: path.join(process.cwd(), "app/javascript"),
    loader: {
        ".svg": "file",
        ".png": "file",
        ".jpg": "file",
    },
    sourcemap: !isProduction,
    publicPath: "/assets",
    assetNames: "[name]-[hash]",
    plugins: [
        rails(),
        sassPlugin(),
        copy({
            resolveFrom: "cwd",
            assets: {
                from: ["app/assets/images/**/*"],
                to: ["app/assets/builds/images/"],
            },
        }),
    ],
    define: {
        "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV || "development"),
        "process.env.REACT_ENV": JSON.stringify(process.env.REACT_ENV || "development"),
    },
};

// Check if watch mode is enabled
if (process.argv.includes("--watch")) {
    esbuild.context(buildOptions).then((ctx) => {
        ctx.watch();
        console.log("🚀 Watching for changes...");
    }).catch(() => process.exit(1));
} else {
    esbuild.build(buildOptions).catch(() => process.exit(1));
}

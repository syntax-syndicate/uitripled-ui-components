const path = require("path");
const fs = require("fs");

const __dirname_mock = "/Users/moumensoliman/code/uitripled/apps/docs/scripts";

function resolvePath(filePath) {
    if (filePath.startsWith("@uitripled/react-shadcn")) {
      return path.join(
        __dirname_mock,
        "../../../packages/components/react-shadcn",
        (() => {
          let relative = filePath.replace("@uitripled/react-shadcn/", "");
          if (!relative.startsWith("src/")) relative = "src/" + relative;
          return relative;
        })()
      );
    }
    return "UNKNOWN";
}

const testPaths = [
    "@uitripled/react-shadcn/src/components/web-performance/web-performance-page.tsx",
    "@uitripled/react-shadcn/components/sections/scroll-reveal.tsx"
];

testPaths.forEach(p => {
    const resolved = resolvePath(p);
    console.log(`Input: ${p}`);
    console.log(`Resolved: ${resolved}`);
    console.log(`Exists: ${fs.existsSync(resolved)}`);
    console.log("-------------------");
});

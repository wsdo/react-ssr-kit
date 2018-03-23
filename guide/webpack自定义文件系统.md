自定义文件系统(Custom File Systems)
默认情况下，webpack 使用普通文件系统来读取文件并将文件写入磁盘。但是，还可以使用不同类型的文件系统（内存(memory), webDAV 等）来更改输入或输出行为。为了实现这一点，可以改变 inputFileSystem 或 outputFileSystem。例如，可以使用 memory-fs 替换默认的 outputFileSystem，以将文件写入到内存中，而不是写入到磁盘：

const MemoryFS = require("memory-fs");
const webpack = require("webpack");

const fs = new MemoryFS();
const compiler = webpack({ /* options*/ });

compiler.outputFileSystem = fs;
compiler.run((err, stats) => {
  // 之后读取输出：
  const content = fs.readFileSync("...");
});
值得一提的是，被 webpack-dev-server 及众多其他包依赖的 webpack-dev-middleware 就是通过这种方式，将你的文件神秘地隐藏起来，但却仍然可以用它们为浏览器提供服务！

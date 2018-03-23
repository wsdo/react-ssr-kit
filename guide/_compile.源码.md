3.4 module._compile
// Run the file contents in the correct scope or sandbox. Expose
// the correct helper variables (require, module, exports) to
// the file.
// Returns exception, if any.
Module.prototype._compile = function(content, filename) {
  ...(omit here)...
  // create wrapper function
  var wrapper = Module.wrap(content);

  var compiledWrapper = vm.runInThisContext(wrapper, {
    filename: filename,
    lineOffset: 0,
    displayErrors: true
  });

  if (process._debugWaitConnect && process._eval == null) {
    if (!resolvedArgv) {
      // we enter the repl if we're not given a filename argument.
      if (process.argv[1]) {
        resolvedArgv = Module._resolveFilename(process.argv[1], null);
      } else {
        resolvedArgv = 'repl';
      }
    }

    // Set breakpoint on module start
    if (filename === resolvedArgv) {
      delete process._debugWaitConnect;
      const Debug = vm.runInDebugContext('Debug');
      Debug.setBreakPoint(compiledWrapper, 0, 0);
    }
  }
  var dirname = path.dirname(filename);
  var require = internalModule.makeRequireFunction.call(this);
  var args = [this.exports, require, this, filename, dirname];
  var depth = internalModule.requireDepth;
  if (depth === 0) stat.cache = new Map();
  var result = compiledWrapper.apply(this.exports, args);
  if (depth === 0) stat.cache = null;
  return result;
};
首先，对于js文件内容，需要把最开始说的wrapper 闭包的头尾部分给补充完毕才行，这一部分是在NativeModule中，

  NativeModule.wrap = function(script) {
    return NativeModule.wrapper[0] + script + NativeModule.wrapper[1];
  };

  NativeModule.wrapper = [
    '(function (exports, require, module, __filename, __dirname) { ',
    '\n});'
  ];


  Module.prototype._compile = function(content, filename) {
  // 1. Create the standalone require function that calls module.require.
  // 2. Attach other helper methods to require.
  // 3. Wraps the JS code in a function that provides our require,
  //    module, etc. variables locally to the module scope.
  // 4. Run that function
};

/ / 1。创建独立的需要调用module.require的函数。
/ / 2。附加其他辅助方法以要求。
/ / 3。将JS代码封装在一个提供我们需要的函数中，
//模块，等等，局部变量到模块范围。
/ / 4。运行这个函数

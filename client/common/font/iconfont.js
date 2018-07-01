;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-shengyin" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M228.053 512.001c0 8.469 1.721 16.868 4.904 24.589 3.24 7.752 7.967 14.926 13.937 20.895 5.959 5.959 13.135 10.688 20.893 13.9 7.712 3.208 16.127 4.932 24.604 4.932 8.459 0 16.866-1.724 24.581-4.904 7.75-3.24 14.926-7.97 20.885-13.93 5.977-5.974 10.705-13.142 13.916-20.894 3.21-7.712 4.932-16.12 4.932-24.589 0-8.437-1.737-16.845-4.94-24.586-3.203-7.819-7.91-14.966-13.831-20.88l-0.078-0.077c-5.914-5.921-13.06-10.627-20.81-13.831-7.82-3.203-16.219-4.94-24.656-4.94-8.477 0-16.892 1.723-24.617 4.91-7.827 3.278-15.003 7.976-20.88 13.86l-0.078 0.077c-5.884 5.876-10.582 13.053-13.83 20.887-3.21 7.715-4.932 16.115-4.932 24.581zM432.922 341.76c47.002 47.007 70.509 108.633 70.509 170.241 0 61.611-23.507 123.244-70.509 170.244-7.16 7.115-10.718 16.483-10.718 25.874 0 9.342 3.573 18.71 10.705 25.841l0.058 0.062a36.333 36.333 0 0 0 25.82 10.763c9.375-0.075 18.734-3.635 25.849-10.727l0.09-0.09c61.25-61.28 91.88-141.621 91.88-221.972 0-80.313-30.647-160.643-91.917-221.921l-0.091-0.092a36.28 36.28 0 0 0-25.812-10.763c-9.367 0.075-18.734 3.632-25.857 10.727l-0.008 0.083a36.507 36.507 0 0 0-10.718 25.865 36.507 36.507 0 0 0 10.719 25.865z"  ></path>' +
    '' +
    '<path d="M571.56 930.095c3.572 3.537 7.606 6.196 11.822 7.947 4.538 1.882 9.306 2.841 13.974 2.85l0.21-0.076c4.67 0.067 9.437-0.885 13.97-2.766 4.221-1.75 8.256-4.418 11.79-7.954 53.685-53.683 94.871-115.015 123.524-180.378 29.716-67.789 46.107-140.027 49.167-212.682l-0.045-50.067c-3.014-72.638-19.406-144.875-49.122-212.672-28.653-65.358-69.83-126.687-123.525-180.39A36.471 36.471 0 0 0 597.47 83.19c-9.388 0-18.756 3.558-25.895 10.667-7.107 7.181-10.689 16.557-10.689 25.908 0 9.36 3.574 18.733 10.713 25.873 101.155 101.171 151.75 233.771 151.75 366.364 0 132.595-50.595 265.203-151.75 366.367-7.146 7.094-10.713 16.474-10.713 25.87 0 9.398 3.552 18.773 10.676 25.856z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)
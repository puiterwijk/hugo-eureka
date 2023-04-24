document.addEventListener("DOMContentLoaded", function () {
  new Valine({
    el: "#valine-comments",
    {{- partial "utils/get-js-configs" . | safeJS }}
  })
});

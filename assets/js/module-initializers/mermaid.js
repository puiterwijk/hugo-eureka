document.addEventListener("DOMContentLoaded", function () {
  mermaid.initialize({
    {{- partial "utils/get-js-configs" . | safeJS }}
  });
});

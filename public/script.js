document.getElementById("copy-btn").addEventListener("click", function () {
  const link = document.getElementById("short-url").href;
  navigator.clipboard.writeText(link).then(() => {
    alert("✅ Short URL copied to clipboard!");
  });
});

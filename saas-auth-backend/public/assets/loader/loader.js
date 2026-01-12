/**
 * Show loader and redirect after delay
 * @param {string} targetPage
 * @param {number} delay
 * @param {string} message
 */
/**function showLoaderAndRedirect(targetPage, delay = 6500, message = "") {
  const loader = document.getElementById("page-loader");
  const text = document.getElementById("loader-text");

  if (message && text) {
    text.innerText = message;
  }

  loader.classList.add("active");

  setTimeout(() => {
    window.location.href = targetPage;
  }, delay);
}*/
function showLoaderAndRedirect(targetPage, delay = 6500, message = "") {
  const loader = document.getElementById("page-loader");
  const text = document.getElementById("loader-text");
  const video = document.getElementById("loader-video");

  if (message && text) {
    text.innerText = message;
  }

  loader.classList.add("active");

  // Force play video
  if (video) {
    video.currentTime = 0;
    video.play().catch(() => {});
  }

  setTimeout(() => {
    window.location.href = targetPage;
  }, delay);
}


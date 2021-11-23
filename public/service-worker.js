var CACHE_NAME = "my-site-cache-v1";
const DATA_CACHE_NAME = "data-cache-v1";

let fileCache = [
  "/",
  "/db.js",
  "/index.js",
  "/manifest.json",
  "/styles.css",
  "https://cdn.jsdelivr.net/npm/chart.js@2.8.0",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(fileCache)
    })
  );
});

// look up where DATA_CACHE_NAME is coming from, also look at respondWith. test if I can run my if (response.status) without the .then above

// NEEDS WORK

self.addEventListener("fetch", (event) => {
  if (event.request.url.includes("/api/")) {
    event.respondWith(
      caches.open(DATA_CACHE_NAME).then((cache) => {
        return fetch(event.request)
})
  }
}
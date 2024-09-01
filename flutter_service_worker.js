'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "f21b77009aa3d2bf8e49b390d379b8a2",
"index.html": "a5300707f0b40807077d4bcd4ba394f1",
"/": "a5300707f0b40807077d4bcd4ba394f1",
"main.dart.js": "bb938e4f00a425a8655a4faa95ea8222",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "a0bea58ca81645b22c8be06973991b3e",
"assets/AssetManifest.json": "00b8fd3361ddd7edd91bd44bb516357f",
"assets/NOTICES": "c5b870c02e8bc8f94f8299e1922de84d",
"assets/FontManifest.json": "cee49c184c7112df002d055b00fbccca",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "9cda082bd7cc5642096b56fa8db15b45",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "0a94bab8e306520dc6ae14c2573972ad",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b00363533ebe0bfdb95f3694d7647f6d",
"assets/lib/l10n/en.json": "f4ff8d08476d986d75e020d046e2f3df",
"assets/lib/l10n/fa.json": "74564c7bdecb4cfe392ea54b23f0dcbf",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/images/svg/search.svg": "842db34903932c2075224140744aa776",
"assets/assets/images/svg/questions.svg": "7675f443820446a2ebd98ad6d505c6aa",
"assets/assets/images/svg/location_address.svg": "f08ba5b87bdcd7edbb1f281545b282ed",
"assets/assets/images/svg/brand_xiaomi.svg": "4d2303c3318e987e1893be322ea4460d",
"assets/assets/images/svg/shuffle-outline.svg": "d2b24da650984a6cb34de6947839673e",
"assets/assets/images/svg/microphone.svg": "70b2494faac3aea75ef2415e9df279a9",
"assets/assets/images/svg/brand_belkin.svg": "d2e02d21cb5f1d574bf8aa73ede2ef2c",
"assets/assets/images/svg/car-outline.svg": "d84c1c1beb17b8cd3f01ace2ba4e3338",
"assets/assets/images/svg/shopping-bag.svg": "97d91ab290060d1eaabec541e5452904",
"assets/assets/images/svg/item4.svg": "3f03df7c84b8a27e5031ec891fed11b8",
"assets/assets/images/svg/item3.svg": "44b9cca4db9e3592d873c1517f67261a",
"assets/assets/images/svg/item2.svg": "345fbcc21d5e451809855fa121263b48",
"assets/assets/images/svg/cube-outline.svg": "867d5fea7bb7cf9ad460eaf7bbb6419e",
"assets/assets/images/svg/brand_jbl.svg": "fb716ff6105ae1425864533b222a0bb1",
"assets/assets/images/svg/alarms.svg": "7ab6b4a08141036fbcd3a2ff3549a04b",
"assets/assets/images/svg/item1.svg": "26c5366d79d70c1547700308d830d111",
"assets/assets/images/svg/brand_samsung.svg": "06dd998a447625c372625c0b10c7a37d",
"assets/assets/images/svg/Close.svg": "ca9121ed6d816e652a1f004c8c0fb568",
"assets/assets/images/svg/orders.svg": "87a12a3e168faf9f4b1dbcd490867b66",
"assets/assets/images/svg/english.svg": "3684c0fb3f792b828200d8149bbccb1d",
"assets/assets/images/svg/brand_apple.svg": "06585ce73a2ad3b955d27694c83fa3bb",
"assets/assets/images/svg/favorite.svg": "52a853fae05b2fc4a66e7f5643e3d2df",
"assets/assets/images/svg/heart-outline.svg": "d2deae7f648bf914f3b4a69f6ab54f64",
"assets/assets/images/svg/messages.svg": "63d16d3add420c6d934f0a1c08781aa0",
"assets/assets/images/svg/arrow_down.svg": "971717e4e53aa30a48110bb76bdaf742",
"assets/assets/images/svg/new_parcel_item1.svg": "5929aa1cda414b82026823934f884820",
"assets/assets/images/svg/star.svg": "d52e7a1061a3cf089f346e538da04c64",
"assets/assets/images/svg/arrow_left-min.svg": "efe1a94d6fc41b30a5a1dd6d8519085e",
"assets/assets/images/svg/delete.svg": "b00873103a4b532516760119740f273f",
"assets/assets/images/svg/location.svg": "d58567ef606e7b6a59ad7ea39b210dda",
"assets/assets/images/svg/filter.svg": "924f5475da399af3c5135e979d107d86",
"assets/assets/images/svg/Arrow-left.svg": "5ea067c6b21943cf179c870e6dd27ec1",
"assets/assets/images/svg/logo.svg": "304cb25905f0b75149c5ca0dda2e6906",
"assets/assets/images/svg/heart-outline.png": "427ba6a5decdb18ebb2bb7086d1e805e",
"assets/assets/images/svg/toman.svg": "ec1a0703ecf8b0b42b594e55caa6da1e",
"assets/assets/images/svg/brand_sony.svg": "19af84c4a91a743092f0cdf513e00ed3",
"assets/assets/images/svg/chevron.right.svg": "163f0012b933b939f332a6b629507756",
"assets/assets/images/png/arkacoin_1.png": "778ec4654809283dcb8bfe30e1c6899f",
"assets/assets/images/png/arkacoin_2.png": "5aac289322a1c35bdd01b73d65a73a26",
"assets/assets/images/png/arkacoin_3.png": "077d8158ebbdb01873b472af4e7de2be",
"assets/assets/images/png/arkacoin_4.png": "66227da9bf1df05ff4db2f9c11a5ab36",
"assets/assets/images/png/cheetapost1.jpg": "97ac99d82ff08c79ae97cae93ad79924",
"assets/assets/images/png/cheetapost2.jpg": "0d8d8b4b6b2b6b978200bf6fda711d8d",
"assets/assets/images/png/cheetapost3.jpg": "c1a232bc8484da7d4fb6841cdd59dfe2",
"assets/assets/images/png/cheetapost4.jpg": "b99b975907147e09622c01fd121469ea",
"assets/assets/images/png/driver4.png": "cb027b0ddbe113cfc81c6caf4abddc55",
"assets/assets/images/png/saragsm4.png": "27e6d092467375a7f742e8bdb3dee0e2",
"assets/assets/images/png/driver1.png": "a903f09f91f69dc2d653af70f3a45a5b",
"assets/assets/images/png/saragsm1.png": "8cf3f4032982e8247c657ecd2881b39d",
"assets/assets/images/png/saragsm3.png": "1141b237742e8d9084648a86ea2f3b02",
"assets/assets/images/png/driver2.png": "1b3bf4fc8ac4678f02491584ea898707",
"assets/assets/images/png/driver3.png": "dc249163d472501f6b0264b26b041379",
"assets/assets/images/png/saragsm2.png": "c6d27d77cf2d43dbed018049f556daee",
"assets/assets/fonts/vazirmatn.ttf": "cd60384e8ba740bf572d1f69b2dceb30",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

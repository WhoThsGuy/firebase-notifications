importScripts(
  "https://www.gstatic.com/firebasejs/9.0.2/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/9.0.2/firebase-messaging-compat.js"
);

firebase.initializeApp({
  apiKey: "AIzaSyC0bsUdXoG_VUoKTDpNvzUrpzqeWT3_8c8",
  authDomain: "nextjs-with-firebase-messaging.firebaseapp.com",
  projectId: "nextjs-with-firebase-messaging",
  storageBucket: "nextjs-with-firebase-messaging.appspot.com",
  messagingSenderId: "1052350335170",
  appId: "1:1052350335170:web:5c2db0b992aed0b8f4135b",
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  // Customize notification here
  const notificationTitle = "Background Message Title";
  const notificationOptions = {
    body: "Background Message body.",
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});

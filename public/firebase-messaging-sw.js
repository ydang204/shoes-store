importScripts("https://www.gstatic.com/firebasejs/7.2.3/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/7.2.3/firebase-messaging.js");

firebase.initializeApp({
  messagingSenderId: "530042059218"
});
const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function(payload) {
  // Customize notification here
  const {
    data: { title, message }
  } = payload;
  const notificationTitle = title;
  const notificationOptions = {
    body: message,
    icon: "/firebase-logo.png"
  };

  return self.registration.showNotification(
    notificationTitle,
    notificationOptions
  );
});

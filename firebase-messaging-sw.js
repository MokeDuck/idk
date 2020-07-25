// Give the service worker access to Firebase Messaging.
 // Note that you can only use Firebase Messaging here, other Firebase libraries
 // are not available in the service worker.
 importScripts('https://www.gstatic.com/firebasejs/7.15.0/firebase-app.js');
 importScripts('https://www.gstatic.com/firebasejs/7.15.0/firebase-messaging.js');
 // maybe try 4.8.1 instead of 7.15.0 up above
 
 // Initialize the Firebase app in the service worker by passing in
 // the messagingSenderId
 firebase.initializeApp({
  'messagingSenderId': '378512363534'
  });
  
 // Retrieve an instance of Firebase Messaging so that it can handle background
 // messages.
 const messaging = firebase.messaging();
 
 messaging.setBackgroundMessageHandler(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // Customize notification here
  var obj = JSON.parse(payload.data.notification);
  var notificationTitle = obj.title;
  var notificationoptions = {
    body: obj.body
    icon: obj.icon
  };
  
  return self.registration.showNotification(notificationTitle,
    notificationOptions);
});    

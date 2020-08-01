if('serviceWorker' in navigator){
    navigator.serviceWorker.register('/sw.js')
      .then((reg) => console.log('service worker registered', reg))
      .catch((err) => console.log('service worker not registered', err));
  }

  Notification.requestPermission((status) => {
    console.log('Notification permission status:', status)
  })
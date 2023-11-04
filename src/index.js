const timer = {
  start() {
    const startTime = Date.now();

    setInterval(() => {
      const currentTime = Date.now();
      console.log('start => currentTime', currentTime);
      console.log(currentTime - startTime);
    }, 1000);
  },
};

timer.start();

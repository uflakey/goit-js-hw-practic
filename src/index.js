// таймер
// const timer = {
//   start() {
//     const startTime = Date.now();

//     setInterval(() => {
//       const currentTime = Date.now();
//       const deltaTime = currentTime - startTime;
//       const { hours, mins, secs } = getTimeComponents(deltaTime);

//       console.log(`${hours}:${mins}:${secs}`);
//     }, 1000);
//   },
// };

// timer.start();

// function updateClockfase({ hours, mins, secs }) {
//   refs.clockfase.textContent = `${hours}, ${mins}, ${secs}`;
// }

// function pad(value) {
//   return String(value).padStart(2, '0');
// }

// function getTimeComponents(time) {
//   const hours = pad(
//     Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
//   );
//   const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
//   const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

//   return { hours, mins, secs };
// }

// // Проміси
// const promise = new Promise((resolve, rejekt) => {
//   const canFulfill = Math.random() > 0.5;
//   console.log(canFulfill);

//   setTimeout(() => {
//     if (canFulfill) {
//       resolve('Проміс виконано успішно');
//     }
//     rejekt('Проміс відхилено');
//   }, 2000);
// });

// promise.then(onFulfilled, onRejekted);

// function onFulfilled(result) {
//   console.log('onFulfilled => onFulfilled');
//   console.log(`${result}`);
// }
// function onRejekted(error) {
//   console.log('onRejekted => onRejekted');
//   console.log(`${error}`);
// }

// Запити на бекенд
// fetch('https://pokeapi.co/api/v2/pokemon/4')
//   .then(response => {
//     return response.json();
//   })
//   .then(pokemon => {
//     console.log(pokemon);
//   })
//   .catch(error => {
//     console.log(error);
//   })
//   .finally(() => reset());

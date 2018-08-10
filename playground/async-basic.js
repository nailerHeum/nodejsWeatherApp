console.log('Starting app');

setTimeout(() => {
  console.log('instead of callback');
}, 2000);

setTimeout(() => {
  console.log('second of callback')
}, 0);
console.log('Finishing app');

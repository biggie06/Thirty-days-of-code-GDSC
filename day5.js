console.log('Start');

setTimeout(() => {
  console.log('skiped');
}, 1000);

setImmediate(() => {
  console.log('done');
});

setTimeout(() => {
  console.log('skiped again');
}, 1000);

setImmediate(() => {
  console.log('done');
});
setTimeout(()=>{
    console.log('finish');
},3000)
console.log('finish');

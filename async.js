console.log('before');

/*function myAsyncFunction(callback) {
  setTimeout(() => {
    const value = 17 + 4;
    callback(value);
  }, 1000);
}*/

/*myAsyncFunction(function(value) {
  console.log(value);
  myAsyncFunction(function(value) {
    console.log(value);
    myAsyncFunction(function(value) {
      console.log(value);
      myAsyncFunction(function(value) {
        console.log(value);
        myAsyncFunction(function(value) {
          console.log(value);
          myAsyncFunction(function(value) {
            console.log(value);
          });
        });
      });
    });
  });
});*/

function myAsyncFunction() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const value = 17 + 4;
      resolve(value); // erfolg
      //reject(new Error('my message')); // fehlschlag
    }, 1000);
  });
}

/*const promise = myAsyncFunction();
promise
  .then(value => {
    console.log(value);
    return myAsyncFunction();
  })
  .then(value => {
    console.log(value);
    return myAsyncFunction();
  })
  .then(value => {
    console.log(value);
    return myAsyncFunction();
  })
  .then(value => {
    console.log(value);
    return myAsyncFunction();
  })
  .then(value => {
    console.log(value);
    return myAsyncFunction();
  })
  .catch(e => console.error('Whoops', e));*/
/*Promise.all([
  myAsyncFunction(),
  myAsyncFunction(),
  myAsyncFunction(),
  myAsyncFunction(),
]).then(values => console.log(values));*/
/*Promise.race([
  myAsyncFunction(),
  myAsyncFunction(),
  myAsyncFunction(),
  myAsyncFunction(),
]).then(values => console.log(values));*/

(async function() {
  try {
    const value = await myAsyncFunction();
    const value2 = await myAsyncFunction();
    const value3 = await myAsyncFunction();
    const value4 = await myAsyncFunction();
    const value5 = await myAsyncFunction();
    console.log('async', value, value2, value3, value4, value5);
  } catch (e) {
    console.trace('error', e);
  }
})();

console.log('after');

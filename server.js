console.log('Hello World');

// fetch('http://localhost:3000/users')
//   .then(response => response.json())
//   .then(data => console.log(data));

(async () => {
  try {
    response = await fetch('http://localhost:3000/users');
    const data = await response.json();
    console.log(data);
  } catch (e) {
    console.error(e);
  }
})();

$.ajax('http://').then(data => {});

console.log('xxx');

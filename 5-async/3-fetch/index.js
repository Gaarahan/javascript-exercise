function fetchData(url) {
  // <-- start
  return fetch(url).then(response => {
    return new Promise((resolve, reject) => {
      if (response.ok) {
        resolve(response.json());
      }
      reject(response.json());
    });
  });
  // end -->
}

const URL = 'http://localhost:3000/api';
fetchData(URL)
  .then(result => {
    document.writeln(result.name);
  })
  .catch(error => {
    console.error(error);
  });

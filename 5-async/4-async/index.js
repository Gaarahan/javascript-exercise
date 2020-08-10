async function resolveResponse(response) {
  if (response.ok) {
    return response.json();
  }
  throw new Error(response.json());
}

async function fetchData(url) {
  // <-- start
  try {
    const response = await fetch(url);
    const json = await resolveResponse(response);

    document.writeln(json.name);
  } catch (error) {
    console.error(error);
  }
  // end -->
}

const URL = 'http://localhost:3000/api';
fetchData(URL);

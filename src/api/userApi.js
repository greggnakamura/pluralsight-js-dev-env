import 'whatwg-fetch';  // polyfill

// public
export function getUsers() {
  return get('users');
}

// private
function get(url) {
  return fetch(url).then(onSuccess, onError);
}

// private
function onSuccess(response) {
  return response.json();
}

// private
function onError(error) {
  console.log(error); // eslint-disable-line no-console
}

export default function getBaseUrl() {
  // const inDevelopment = window.location.hostname === 'localhost';
  // return inDevelopment ? 'http://localhost:8888/' : '/';

  // If 'useMockApi' use local with mock api data, otherwise, use real api
  /*
    - Prod API: http://localhost:3000
    - Mock API: http://localhost:3000/?useMockApi=true
  */
  return getQueryStringParameterByName('useMockApi') ? 'http://localhost:8888/' : '/';
}

// get parameter from url
function getQueryStringParameterByName(name, url) {
    if (!url) url = window.location.href;

    name = name.replace(/[\[\]]/g, "\\$&");

    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);

    if (!results) return null;
    if (!results[2]) return '';

    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

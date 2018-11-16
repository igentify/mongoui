
module.exports.API_URL = formatUrlString(inheritUrl({
  protocol: PUB_API_PROTO,
  host: PUB_API_HOST,
  port: PUB_API_PORT,
}));

console.log(module.exports.API_URL);

function formatUrlString(uri) {
  var currentLocation = window.location;
  console.log(`uri.host - ${currentLocation.hostname}`)
  console.log(`API_URL = ${currentLocation.protocol}//${currentLocation.hostname}:${currentLocation.port}${currentLocation.pathname}`)
  return `${currentLocation.protocol}//${currentLocation.hostname}:${currentLocation.port}${currentLocation.pathname}`;
}

function inheritUrl(uri){
  return Object.assign( uri && PUB_API_WINDOW === false ? {} : {
    protocol: window.location.protocol,
    host: window.location.host,
    port: window.location.port,
  }, uri || {});
}

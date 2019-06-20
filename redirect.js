// For cross browser compatibility
window.browser = (function () {
  return window.msBrowser ||
    window.browser ||
    window.chrome;
})();

var steemdomains = ["steemit.com","steempeak.com","busy.org","steem.kr","utopian.io","dsound.audio","appics.com","steemitwallet.com","partiko.app","steemd.com"];
var paldomains = ["www.palnet.io","palnet.io"];
if (steemdomains.includes(location.hostname)){
// Active tab is on a non-palnet steem domain
console.log("Redirecting to Palnet from " + location.hostname);
location.replace(location.protocol + "//www.palnet.io" + location.pathname + location.search + location.hash)

} else if (paldomains.includes(location.hostname)) {
// Active tab is already on palnet
console.log("Redirecting to Steempeak from " + location.hostname);
location.replace(location.protocol + "//steempeak.com" + location.pathname + location.search + location.hash)

} else {
// Active tab is somewhere else entirely
console.log("Not redirecting, this is not a steem ui");

}

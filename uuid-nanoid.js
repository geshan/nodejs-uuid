const Nanoid = require('nanoid');
const NanoidAsync = require('nanoid/async');

console.log(`UUID with Nano ID sync: ${Nanoid.nanoid()}`);

(async function() {
  const nanoId = await NanoidAsync.nanoid();
  console.log(`UUID with Nano ID async: ${nanoId}`);
})();

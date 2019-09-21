const opencage = require('opencage-api-client');
async function geocodeAddress(address) {
    return opencage.geocode({
        q: address
    })
}
module.exports = {
    geocodeAddress: geocodeAddress
}
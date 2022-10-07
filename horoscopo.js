const aztroJs = require('aztro-js')
let sign = {
    "signs": [
        "aries",
        "taurus",
        "gemini",
        "cancer",
        "leo",
        "virgo",
        "libra",
        "scorpio",
        "sagitarius",
        "capricorn",
        "aquarius",
        "pisces"
    ]
}
for (i = 0; i < 12; i++) {
    aztroJs.getAllHoroscope(sign.signs[i], function(res) {
        console.log(res)
    })
}
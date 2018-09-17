

function sendRequest(args) {
    return new Promise((resolve, reject) => {

        let req = new XMLHttpRequest();
        req.open(args.method, args.url);
        req.send();

        req.addEventListener("load", (e) => {
            if (e.currentTarget.status == 200) return resolve(e.currentTarget.response);
            reject(e.currentTarget.response);
        })

        req.addEventListener("error", (e) => {
            reject("Error while retriving location information");
        })
    })
}

function sendRequests(args) {
    return Promise.all(args.map(arg => sendRequest(arg)));
}

function getGpsLocation() {
    //	Add timeout, accuracy and max age options if needed.
    let options = {
        enableHighAccuracy: true
    };

    return new Promise((res, rej) => {

        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
                res({
                    lat: position.coords.latitude,
                    lon: position.coords.longitude
                })
            }, (error) => {
                rej(error);
            }, options);
    
            navigator.geolocation.watchPosition((position) => {
    
                // Update user position.
    
            }, (error) => {
                // handle error in a different way.
            }, options);

        } else {
            // do something else.
        }
    })
}

function getIpLocation() {
    const url = "http://api.ipstack.com/check?access_key=c7de56c920dfe9a06b36d80df9c287ac";

    return sendRequest({ method: "GET", url: url})
    .then(response => {
        response = JSON.parse(response);
        return {
            lat: response.latitude,
            lng: response.longitude
        };

    });
}

module.exports.sendRequest = sendRequest;
module.exports.sendRequests = sendRequests;
module.exports.getGpsLocation = getGpsLocation;
module.exports.getIpLocation = getIpLocation;
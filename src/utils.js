

function sendRequest(args) {
    return new Promise((resolve, reject) => {

        let req = new XMLHttpRequest();
        req.open(args.method, args.url);
        req.send();

        req.addEventListener("load", (e) => {
            if (e.currentTarget.status >= 200 && e.currentTarget.status < 300) return resolve(e.currentTarget.response);
            reject(e.currentTarget.response);
        })

        req.addEventListener("error", (e) => {
            reject(`Error in request/response: ${JSON.stringify(e)}`);
        })
    })
}

function sendRequests(args) {
    return Promise.all(args.map(arg => sendRequest(arg)));
}

module.exports.sendRequest = sendRequest;
module.exports.sendRequests = sendRequests;
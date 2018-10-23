let google = require('googleapis').google;
let _auth = require('./Authorizer');
const storage = google.storage('v1');

exports.handler = function (request, response) {

    storage.objects.insert({
        "bucket": "test_sigma_gcp_storage",
        "name": "Ob1",
        "media": {
            "body": "Testing"
        }
    })
        .then(response => {
            console.log(response.data);           // successful response
            /*
            response.data = {
                "kind": "storage#object",
                "id": "<bucket>/<name>/<timestamp>",
                "selfLink": "https://www.googleapis.com/storage/v1/b/<bucket>/o/<name>",
                "name": "<name>",
                "bucket": "<bucket>",
                "contentType": "<content-type>",
                "timeCreated": "<yyyy-MM-ddTHH:mm:ss.###Z>",
                "updated": "<yyyy-MM-ddTHH:mm:ss.###Z>",
                "size": "<bytes>",
                "md5Hash": "<hash>",
                "metadata": {
                    "<key1>": "<val1>",
                    "<key2>": "<val2>"
                },
                "crc32c": "<crc>",
                "etag": "<etag>"
                // , ...
            }
            */
        })
        .catch(err => {
            console.log(err, err.stack); // an error occurred
        });

    response.send({ "message": "Successfully executed" });
}
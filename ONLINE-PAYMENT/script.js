new window.IntaSend({ // new instance as new popup
    publicAPIKey: "ISPubKey_live_91dcad9a-ec13-4140-a28b-c3a6dc5fb2fc",
    live: true //set to true when going live
    })
    .on("COMPLETE", (results) => {console.log("Do something on success", results)}) // successful payment
    .on("FAILED", (results) => {console.log("Do something on failure", results)})  // failed payment
    .on("IN-PROGRESS", (results) => {console.log("Payment in progress status", results)}) // not complete and not failed.


    
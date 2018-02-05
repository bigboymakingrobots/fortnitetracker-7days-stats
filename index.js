const request = require('request');

exports.getStats = (username, platform, callback) => {

    var url = "https://fortnitetracker.com/profile/";
    url += platform + "/" + username;

    request(url, (error, response, body) => {
        // error
        if(!response){
            callback(new Error("No response"), null);
            return;
        }

        // player not found
        if(response.statusCode != 200){
            callback(new Error("Player not found"), null);
            return;
        }

        // get relevant json text from html file
        var last7 = body.substring(body.indexOf("var Last7") + 12);
        last7 = last7.substring(0, last7.indexOf("</script>") - 1);

        // parse to json object
        var json = JSON.parse(last7);

        // obtain each value and put in dict
        var ret = {
            score: json[0].value,
            kills: json[1].value,
            wins: json[2].value,
            matches: json[3].value,
            top_3_5_10: json[5].value,
            top_6_12_25: json[6].value,
            kd: json[7].displayValue,
            wr: json[8].value,
            minutesPlayed: json[9].value
        }

        // callback function with result
        callback(null, ret);
    });
}

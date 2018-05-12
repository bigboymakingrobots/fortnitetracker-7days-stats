const request = require('request');

exports.getStats = (username, platform, callback) => {

    var url = "https://fortnitetracker.com/profile/";
    url += platform + "/" + encodeURIComponent(username) + "?old=1"; //i guess

    request(url, (error, response, body) => {
        // check platform
        if(platform != "pc" && platform != "psn" && platform != "xbl"){
            callback(new Error("Platform must be one of: 'pc', 'psn', 'xbl'"), null);
            return;
        }

        // no response
        if(!response){
            callback(new Error("No response"), null);
            return;
        }

        // player not found
        if(response.statusCode != 200){
            callback(new Error("Player not found"), null);
            return;
        }

        // random error
        if(error){
            callback(new Error("Some error occured :("), null);
            return;
        }

        // get text for last 7 days stats
        var last7 = body.substring(body.indexOf("var Last7") + 12);
        last7 = last7.substring(0, last7.indexOf("</script>") - 1);

        // get text for account info
        var accountInfo = body.substring(body.indexOf("var accountInfo") + 18);
        accountInfo = accountInfo.substring(0, accountInfo.indexOf(";</script>"));

        // parse to json objects
        var jsonStats = JSON.parse(last7);
        var jsonInfo = JSON.parse(accountInfo);

        // obtain each value and put in dict
        var ret = {
            accountName: jsonInfo.Nickname,
            skinUrl: jsonInfo.EmblemUrl,
            score: jsonStats[0].value,
            kills: jsonStats[1].value,
            wins: jsonStats[2].value,
            matches: jsonStats[3].value,
            top_3_5_10: jsonStats[4].value,
            top_6_12_25: jsonStats[5].value,
            kd: jsonStats[6].displayValue,
            wr: jsonStats[7].value,
            minutesPlayed: jsonStats[8].value
        }

        // callback function with result
        callback(null, ret);
    });
}

exports.getStatsSolo = (username, platform, callback) => {

    var url = "https://fortnitetracker.com/profile/";
    url += platform + "/" + encodeURIComponent(username) + "?p=p2";

    request(url, (error, response, body) => {
        // check platform
        if(platform != "pc" && platform != "psn" && platform != "xbl"){
            callback(new Error("Platform must be one of: 'pc', 'psn', 'xbl'"), null);
            return;
        }

        // no response
        if(!response){
            callback(new Error("No response"), null);
            return;
        }

        // player not found
        if(response.statusCode != 200){
            callback(new Error("Player not found"), null);
            return;
        }

        // random error
        if(error){
            callback(new Error("Some error occured :("), null);
            return;
        }

        // get text for last 7 days stats
        var last7 = body.substring(body.indexOf("var Last7") + 12);
        last7 = last7.substring(0, last7.indexOf("</script>") - 1);

        // get text for account info
        var accountInfo = body.substring(body.indexOf("var accountInfo") + 18);
        accountInfo = accountInfo.substring(0, accountInfo.indexOf(";</script>"));

        // parse to json objects
        var jsonStats = JSON.parse(last7);
        var jsonInfo = JSON.parse(accountInfo);

        // obtain each value and put in dict
        var ret = {
            accountName: jsonInfo.Nickname,
            skinUrl: jsonInfo.EmblemUrl,
            score: jsonStats[0].value,
            kills: jsonStats[1].value,
            wins: jsonStats[2].value,
            matches: jsonStats[3].value,
            top_3_5_10: jsonStats[4].value,
            top_6_12_25: jsonStats[5].value,
            kd: jsonStats[6].displayValue,
            wr: jsonStats[7].value,
            minutesPlayed: jsonStats[8].value
        }

        // callback function with result
        callback(null, ret);
    });
}

exports.getStatsDuo = (username, platform, callback) => {

    var url = "https://fortnitetracker.com/profile/";
    url += platform + "/" + encodeURIComponent(username) + "?p=p10";

    request(url, (error, response, body) => {
        // check platform
        if(platform != "pc" && platform != "psn" && platform != "xbl"){
            callback(new Error("Platform must be one of: 'pc', 'psn', 'xbl'"), null);
            return;
        }

        // no response
        if(!response){
            callback(new Error("No response"), null);
            return;
        }

        // player not found
        if(response.statusCode != 200){
            callback(new Error("Player not found"), null);
            return;
        }

        // random error
        if(error){
            callback(new Error("Some error occured :("), null);
            return;
        }

        // get text for last 7 days stats
        var last7 = body.substring(body.indexOf("var Last7") + 12);
        last7 = last7.substring(0, last7.indexOf("</script>") - 1);

        // get text for account info
        var accountInfo = body.substring(body.indexOf("var accountInfo") + 18);
        accountInfo = accountInfo.substring(0, accountInfo.indexOf(";</script>"));

        // parse to json objects
        var jsonStats = JSON.parse(last7);
        var jsonInfo = JSON.parse(accountInfo);

        // obtain each value and put in dict
        var ret = {
            accountName: jsonInfo.Nickname,
            skinUrl: jsonInfo.EmblemUrl,
            score: jsonStats[0].value,
            kills: jsonStats[1].value,
            wins: jsonStats[2].value,
            matches: jsonStats[3].value,
            top_3_5_10: jsonStats[4].value,
            top_6_12_25: jsonStats[5].value,
            kd: jsonStats[6].displayValue,
            wr: jsonStats[7].value,
            minutesPlayed: jsonStats[8].value
        }

        // callback function with result
        callback(null, ret);
    });
}

exports.getStatsSquad = (username, platform, callback) => {

    var url = "https://fortnitetracker.com/profile/";
    url += platform + "/" + encodeURIComponent(username) + "?p=p9";

    request(url, (error, response, body) => {
        // check platform
        if(platform != "pc" && platform != "psn" && platform != "xbl"){
            callback(new Error("Platform must be one of: 'pc', 'psn', 'xbl'"), null);
            return;
        }

        // no response
        if(!response){
            callback(new Error("No response"), null);
            return;
        }

        // player not found
        if(response.statusCode != 200){
            callback(new Error("Player not found"), null);
            return;
        }

        // random error
        if(error){
            callback(new Error("Some error occured :("), null);
            return;
        }

        // get text for last 7 days stats
        var last7 = body.substring(body.indexOf("var Last7") + 12);
        last7 = last7.substring(0, last7.indexOf("</script>") - 1);

        // get text for account info
        var accountInfo = body.substring(body.indexOf("var accountInfo") + 18);
        accountInfo = accountInfo.substring(0, accountInfo.indexOf(";</script>"));

        // parse to json objects
        var jsonStats = JSON.parse(last7);
        var jsonInfo = JSON.parse(accountInfo);

        // obtain each value and put in dict
        var ret = {
            accountName: jsonInfo.Nickname,
            skinUrl: jsonInfo.EmblemUrl,
            score: jsonStats[0].value,
            kills: jsonStats[1].value,
            wins: jsonStats[2].value,
            matches: jsonStats[3].value,
            top_3_5_10: jsonStats[4].value,
            top_6_12_25: jsonStats[5].value,
            kd: jsonStats[6].displayValue,
            wr: jsonStats[7].value,
            minutesPlayed: jsonStats[8].value
        }

        // callback function with result
        callback(null, ret);
    });
}

exports.extractChuckQuote = function (response) {
    if (!response || !response.body || !response.body.value){
        throw new Error ('Cannot extract Chuck Norris quote');
    }
    return response.body.value;
};

exports.extractNumberQuote = function (response) {
    if (!response || !response.body || !response.body.text){
        throw new Error ('Cannot extract number quote');
    }
    return response.body.text;
};

exports.mergeQuotes = function (chuckQuote, numberQuote){
    return {
        chuckquote : chuckQuote,
        numberQuote: numberQuote
    };
};

exports.simpleErrorHandling = function(error, response, next){
    if (error || !response.ok) {
        console.error(`problem with request: ${err}`);
        next();
    }
};

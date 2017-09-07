exports.extractChuckQuote = function (response) {
    if (!response || !response.body || !response.body.value){
        throw new Error ('Cannot extract Chuck Norris quote ');
    }
    return response.body.value;
};

exports.extractNumberQuote = function (response) {
    if (!response || !response.body || !response.body.text){
        throw new Error ('Cannot extract number quote ');
    }
    return response.body.text;
};

exports.mergeQuotes = function (chuckQuote, numberQuote){
    return {
        chuckQuote : chuckQuote,
        numberQuote: numberQuote
    };
};

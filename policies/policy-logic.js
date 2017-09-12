export function extractChuckQuote (response) {
    if (!response || !response.body || !response.body.value){
        throw new Error ('Cannot extract Chuck Norris quote');
    }
    return response.body.value;
};

export function extractNumberQuote (response) {
    if (!response || !response.body || !response.body.text){
        throw new Error ('Cannot extract number quote');
    }
    return response.body.text;
};

export function mergeQuotes(chuckQuote, numberQuote){
    return {
        chuckquote : chuckQuote,
        numberQuote: numberQuote
    };
};

export function simpleErrorHandling (error, response, next){
    if (error || !response.ok) {
        console.error(`problem with request: ${err}`);
        next();
    }
};

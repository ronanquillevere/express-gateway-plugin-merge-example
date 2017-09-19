//All dependencies are injected for easier testing
export default function (req, res, next, Request, Utils) {
    Request
    .get('http://api.chucknorris.io/jokes/random')
    .set('Content-Type', 'application/json')
    .end((err, r) => {
        Utils.simpleErrorHandling(err, r, next);

        const chuckQuote = Utils.extractChuckQuote(r);

        Request
        .get(`http://numbersapi.com/${chuckQuote.length}`)
        .set('Content-Type', 'application/json')
        .end((err2, r2) => {
            Utils.simpleErrorHandling(err2, r2, next);

            const numberQuote = Utils.extractNumberQuote(r2);
            res.send(Utils.mergeQuotes(chuckQuote,numberQuote));
        });
    });
}

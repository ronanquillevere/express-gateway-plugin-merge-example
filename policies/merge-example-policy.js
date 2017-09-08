const request = require('superagent');
const logic = require('./policy-logic.js');

module.exports = {
    name: 'merge-example',
    policy: (actionParams) => {
        return (req, res, next) => {
            // eslint-disable-next-line no-console
            console.log('executing policy of merge-example plugin', actionParams);

            request
            .get('http://api.chucknorris.io/jokes/random')
            .set('Content-Type', 'application/json')
            .end((err, r) => {
                logic.simpleErrorHandling(err, r, next);

                const chuckQuote = logic.extractChuckQuote(r);

                request
                .get(`http://numbersapi.com/${chuckQuote.length}`)
                .set('Content-Type', 'application/json')
                .end((err2, r2) => {
                    logic.simpleErrorHandling(err2, r2, next);

                    const numberQuote = logic.extractNumberQuote(r2);
                    res.send(logic.mergeQuotes(chuckQuote,numberQuote));
                });
            });
        };
    }
};

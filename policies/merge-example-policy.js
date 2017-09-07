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
                if (err || !r.ok) {
                    console.error(`problem with request1: ${err}`);
                    next();
                } else {
                    let chuckQuote = logic.extractChuckQuote(r);

                    request
                    .get(`http://numbersapi.com/${chuckQuote.length}`)
                    .set('Content-Type', 'application/json')
                    .end((err, r2) => {
                        if (err || !r2.ok) {
                            console.error(`problem with request2: ${err}`);
                            next();
                        } else {
                            let numberQuote = logic.extractNumberQuote(r2);
                            res.send(logic.mergeQuotes(chuckQuote,numberQuote));
                        }
                    });
                }
            });
        };
    }
};

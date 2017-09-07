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
                    request
                    .get(`http://numbersapi.com/${quote1.length}`)
                    .set('Content-Type', 'application/json')
                    .end((err, r2) => {
                        if (err || !r2.ok) {
                            console.error(`problem with request2: ${err}`);
                            next();
                        } else {
                            res.send(logic.mergeQuotes(r,r2));
                        }
                    });
                }
            });
        };
    }
};

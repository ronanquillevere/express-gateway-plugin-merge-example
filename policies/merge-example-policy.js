const request = require('superagent');

module.exports = {
    name: 'merge-example',
    policy: (actionParams) => {
        return (req, res, next) => {
            // eslint-disable-next-line no-console
            console.log('executing policy of merge-example plugin', actionParams);

            let quote1 = '';
            let quote2 = '';

            request
            .get('http://api.chucknorris.io/jokes/random')
            .set('Content-Type', 'application/json')
            .end((err, r) => {
                if (err || !r.ok) {
                    console.error(`problem with request1: ${err}`);
                    next();
                } else {
                    quote1 = r.body.value;
                    console.log(`quote1: ${quote1}`);
                    console.log(`url2: http://numbersapi.com/${quote1.length}`);

                    request
                    .get(`http://numbersapi.com/${quote1.length}`)
                    .set('Content-Type', 'application/json')
                    .end((err, r2) => {
                        if (err || !r2.ok) {
                            console.error(`problem with request2: ${err}`);
                            next();
                        } else {
                            console.log(`body2: ${r2.body}`);
                            quote2 = r2.body.text;

                            res.send({quote1 : quote1, quote2: quote2});
                        }
                    });
                }
            });
        };
    }
};

import Request from 'superagent';
import * as Utils from './policy-helpers';
import merge from './policy-code';

export default {
    name: 'merge-example',
    policy: (actionParams) => {
        return (req, res, next) => {
            // eslint-disable-next-line no-console
            console.log('executing policy with ES6 code of merge-example plugin', actionParams);
            //res.send('{success:true}');

            //All dependencies are injected for easier testing
            merge(req, res, next, Request, Utils);
        };
    }
};

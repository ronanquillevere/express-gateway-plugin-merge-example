# express-gateway-plugin-merge-example

A simple example of plugin policy for express-gateway.

Note that my intention was just to test the plugin system of express-gateway, nothing more.

# What this policy does

- Call http://api.chucknorris.io/jokes/random using [superagent](https://github.com/visionmedia/superagent)
- Extract the `value` field of the response body to get the quote (warning some of them can be offensive, I am not responsible for this API)
- Call http://numbersapi.com/{number} passing the length of the first quote as the number path param
- Extract the `text` field of the response body
- Return javascript object with the 2 quotes to caller, does not call next(), with following format
`{quote1 : quote1, quote2: quote2}`


policy code

```javascript
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
```

Here is what it looks like

![screenshot](./gfx/screenshot.png)


## How to execute it inside express-gateway

Here is my gateway.config.yml

```yml
http:
  port: 8080
# https:
#   port: 9999
#   tls: {}
admin: # remove this section to disable admin API
  port: 9876
  hostname: localhost # use 0.0.0.0 to listen on all IPv4 interfaces
apiEndpoints:
  merge:
    host: 'localhost'
    paths: '/merge'
policies:
  - merge-example
pipelines:
  - name: merge
    apiEndpoints:
      - merge
    policies:
        - merge-example :

```

## How I made this work

Thanks to Serhii Kuts

https://groups.google.com/a/express-gateway.io/forum/#!topic/discuss/v0t34Cz-IBU

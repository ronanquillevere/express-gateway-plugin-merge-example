/*eslint no-undef: "off"*/

'use strict';
// Using Node global to avoid repeating the require everywhere, only for tests
// this is not a good practice for application code
global.chai = require('chai');
global.sinon = require('sinon');
global.sinonChai = require('sinon-chai');

global.chai.should();
global.expect = global.chai.expect;
global.chai.use(global.sinonChai);

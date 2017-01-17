chai = require('chai');
// although you will probably only choose one style
// assert, expect, and should are all here

global.assert = chai.assert;
global.expect = chai.expect;
global.should = chai.should(); // Note that should has to be executed

chai.config.includeStack = true;


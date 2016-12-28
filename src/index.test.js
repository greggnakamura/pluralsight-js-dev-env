import {expect} from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';  // interact with file system using node

describe('Our first test', () => {
  it('should pass', () => {
    expect(true).to.equal(true);
  });
});

describe('index.html', () => {
  it('should say hello', (done) => {
    // cache contents of homepage
    const index = fs.readFileSync('./src/index.html', 'utf-8');

    // use jsdom
    jsdom.env(index, function (err, window) {
      const h1 = window.document.getElementsByTagName('h1')[0];
      expect(h1.innerHTML).to.equal('Hello World!');

      done(); // tell mocha test is done

      // free up memory
      window.close();
    });
  });
});

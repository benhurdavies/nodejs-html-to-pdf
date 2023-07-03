import * as inlineCss from 'inline-css';
import {readFileSync} from 'fs';
import * as htmlparser2 from 'htmlparser2';
import {getHtmlParserHandler} from './html-parser-handler';
import {printVirtualDom} from './helper/printVirtualDom';

(async () => {
  const html = readFileSync(
    '/Users/benhur/Documents/personal/git/nodejs-html-to-pdf/mocks/test1.html',
    {encoding: 'utf-8'}
  );
  const inlineCssHtml = await inlineCss(html, {url: 'somefile'});

  const htmlParserHandler = getHtmlParserHandler();

  const parser = new htmlparser2.Parser(htmlParserHandler.htmlParserHandlers);

  parser.write(inlineCssHtml);
  parser.end;

  const virtualDOM = htmlParserHandler.getVirtualDOM();
  printVirtualDom(virtualDOM);
})();

import { parse } from '../src';
import { lineBreak, link, paragraph, plain } from '../src/utils';

test.each([
  [
    'https://pt.wikipedia.org/wiki/Condi%C3%A7%C3%A3o_de_corrida#:~:text=Uma%20condi%C3%A7%C3%A3o%20de%20corrida%20%C3%A9,sequ%C3%AAncia%20ou%20sincronia%20doutros%20eventos',
    [
      paragraph([
        link(
          'https://pt.wikipedia.org/wiki/Condi%C3%A7%C3%A3o_de_corrida#:~:text=Uma%20condi%C3%A7%C3%A3o%20de%20corrida%20%C3%A9,sequ%C3%AAncia%20ou%20sincronia%20doutros%20eventos'
        ),
      ]),
    ],
  ],
  [
    'https://pt.wikipedia.org/',
    [paragraph([link('https://pt.wikipedia.org/')])],
  ],
  [
    'https://pt.wikipedia.org/with-hyphen',
    [paragraph([link('https://pt.wikipedia.org/with-hyphen')])],
  ],
  [
    'https://pt.wikipedia.org/with_underscore',
    [paragraph([link('https://pt.wikipedia.org/with_underscore')])],
  ],
  [
    'https://www.npmjs.com/package/@quickchat.vn/message-parser',
    [
      paragraph([
        link('https://www.npmjs.com/package/@quickchat.vn/message-parser'),
      ]),
    ],
  ],
  ['http:/quickchat.vn/teste', [paragraph([plain('http:/quickchat.vn/teste')])]],
  ['https:/quickchat.vn/', [paragraph([plain('https:/quickchat.vn/')])]],
  ['https://test', [paragraph([plain('https://test')])]],
  [
    'httpsss://quickchat.vn/test',
    [paragraph([link('httpsss://quickchat.vn/test')])],
  ],
  [
    'https://quickchat.vn:3000/test',
    [paragraph([link('https://quickchat.vn:3000/test')])],
  ],
  [
    'https://quickchat.vn/test?search',
    [paragraph([link('https://quickchat.vn/test?search')])],
  ],
  [
    'https://quickchat.vn/test?search=test',
    [paragraph([link('https://quickchat.vn/test?search=test')])],
  ],
  ['https://quickchat.vn', [paragraph([link('https://quickchat.vn')])]],
  ['https://localhost', [paragraph([link('https://localhost')])]],
  ['https://localhost:3000', [paragraph([link('https://localhost:3000')])]],
  [
    'https://localhost:3000#fragment',
    [paragraph([link('https://localhost:3000#fragment')])],
  ],
  ['https://localhost:3000#', [paragraph([link('https://localhost:3000#')])]],
  ['https://localhost:3000?', [paragraph([link('https://localhost:3000?')])]],
  ['https://localhost:3000/', [paragraph([link('https://localhost:3000/')])]],
  [
    'ftp://user:pass@localhost:21/etc/hosts',
    [paragraph([link('ftp://user:pass@localhost:21/etc/hosts')])],
  ],
  ['ssh://test@test.test', [paragraph([link('ssh://test@test.test')])]],
  ['custom://test@test.test', [paragraph([link('custom://test@test.test')])]],
  ['ftp://test.com', [paragraph([link('ftp://test.com')])]],
  [
    'https://www.thingiverse.com/thing:5451684',
    [paragraph([link('https://www.thingiverse.com/thing:5451684')])],
  ],
  ['http://📙.la/❤️', [paragraph([link('http://📙.la/❤️')])]],
  [
    'https://developer.quickchat.vn/reference/api/rest-api#production-security-concerns look at this',
    [
      paragraph([
        link(
          'https://developer.quickchat.vn/reference/api/rest-api#production-security-concerns'
        ),
        plain(' look at this'),
      ]),
    ],
  ],
  [
    'https://developer.quickchat.vn/reference/api/rest-api look at this',
    [
      paragraph([
        link('https://developer.quickchat.vn/reference/api/rest-api'),
        plain(' look at this'),
      ]),
    ],
  ],

  [
    'https://developer.quickchat.vn/reference/api/rest-api#fragment?query=query look at this',
    [
      paragraph([
        link(
          'https://developer.quickchat.vn/reference/api/rest-api#fragment?query=query'
        ),
        plain(' look at this'),
      ]),
    ],
  ],
  [
    'https://developer.quickchat.vn look at this',
    [
      paragraph([
        link('https://developer.quickchat.vn'),
        plain(' look at this'),
      ]),
    ],
  ],
  [
    'https://developer.quickchat.vn?query=query look at this',
    [
      paragraph([
        link('https://developer.quickchat.vn?query=query'),
        plain(' look at this'),
      ]),
    ],
  ],
  [
    'https://developer.quickchat.vn?query=query\nline break',
    [
      paragraph([link('https://developer.quickchat.vn?query=query')]),
      paragraph([plain('line break')]),
    ],
  ],
  [
    'https://developer.quickchat.vn?query=query\n\nline break',
    [
      paragraph([link('https://developer.quickchat.vn?query=query')]),
      lineBreak(),
      paragraph([plain('line break')]),
    ],
  ],
  [
    'https://developer.quickchat.vn?query=query_with_underscore look at this',
    [
      paragraph([
        link('https://developer.quickchat.vn?query=query_with_underscore'),
        plain(' look at this'),
      ]),
    ],
  ],
  [
    'https://developer.quickchat.vn/path_with_underscore look at this',
    [
      paragraph([
        link('https://developer.quickchat.vn/path_with_underscore'),
        plain(' look at this'),
      ]),
    ],
  ],
  [
    'https://developer.quickchat.vn#fragment_with_underscore look at this',
    [
      paragraph([
        link('https://developer.quickchat.vn#fragment_with_underscore'),
        plain(' look at this'),
      ]),
    ],
  ],
  [
    'https://developer.quickchat.vn followed by text',
    [
      paragraph([
        link('https://developer.quickchat.vn'),
        plain(' followed by text'),
      ]),
    ],
  ],
  [
    'two urls https://developer.quickchat.vn , https://quickchat.vn',
    [
      paragraph([
        plain('two urls '),
        link('https://developer.quickchat.vn'),
        plain(' , '),
        link('https://quickchat.vn'),
      ]),
    ],
  ],
  [
    'https://1developer.quickchat.vn',
    [paragraph([link('https://1developer.quickchat.vn')])],
  ],
])('parses %p', (input, output) => {
  expect(parse(input)).toMatchObject(output);
});

describe('link helper function', () => {
  it('should preserve the original protocol if the protocol is http or https', () => {
    expect(link('https://quickchat.vn/test')).toMatchObject({
      type: 'LINK',
      value: {
        src: plain('https://quickchat.vn/test'),
        label: plain('https://quickchat.vn/test'),
      },
    });
    expect(link('http://quickchat.vn/test')).toMatchObject({
      type: 'LINK',
      value: {
        src: plain('http://quickchat.vn/test'),
        label: plain('http://quickchat.vn/test'),
      },
    });
  });

  it('should preserve the original protocol even if for custom protocols', () => {
    expect(link('custom://quickchat.vn/test')).toMatchObject({
      type: 'LINK',
      value: {
        src: plain('custom://quickchat.vn/test'),
        label: plain('custom://quickchat.vn/test'),
      },
    });
  });

  it('should return // as the protocol if // is the protocol specified', () => {
    expect(link('//quickchat.vn/test')).toMatchObject({
      type: 'LINK',
      value: {
        src: plain('//quickchat.vn/test'),
        label: plain('//quickchat.vn/test'),
      },
    });
  });
  it("should return an url concatenated '//' if the url has no protocol", () => {
    expect(link('quickchat.vn/test')).toMatchObject({
      type: 'LINK',
      value: {
        src: plain('//quickchat.vn/test'),
        label: plain('quickchat.vn/test'),
      },
    });
  });
});

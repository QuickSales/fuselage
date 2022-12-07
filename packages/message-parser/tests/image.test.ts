import { parse } from '../src';
import { image, paragraph, plain } from '../src/utils';

test.each([
  [
    '![image](https://quickchat.vn/assets/img/header/logo.svg)',
    [
      paragraph([
        image('https://quickchat.vn/assets/img/header/logo.svg', plain('image')),
      ]),
    ],
  ],
  [
    '![](https://quickchat.vn/assets/img/header/logo.svg)',
    [paragraph([image('https://quickchat.vn/assets/img/header/logo.svg')])],
  ],
])('parses %p', (input, output) => {
  expect(parse(input)).toMatchObject(output);
});

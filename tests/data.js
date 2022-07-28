exports.arrayEqualData = [
  {
    desc: 'equal arrays of strings',
    args: [
      ['a', 'b'],
      ['a', 'b'],
    ],
    expected: true,
  },
  {
    desc: 'nonequal arrays of strings',
    args: [
      ['a', 'b', 'c'],
      ['a', 'b'],
    ],
    expected: false,
  },
  {
    desc: 'one empty array',
    args: [[], ['a', 'b']],
    expected: false,
  },
  {
    desc: 'both empty arrays',
    args: [[], []],
    expected: true,
  },
  {
    desc: 'one arg not an array',
    args: [[], { foo: 'bar' }],
    expected: false,
  },
  {
    desc: 'array of objects',
    args: [
      [{ foo: 'bar' }, { bar: 'foo' }],
      [{ foo: 'bar' }, { bar: 'foo' }],
    ],
    expected: true,
  },
  {
    desc: 'array of objects',
    args: [
      [{ foo: 'bar' }, { bar: 'foo' }],
      [{ foo: 'foo' }, { bar: 'bar' }],
    ],
    expected: false,
  },
];

exports.deepEqualData = [
  {
    desc: 'both empty objects',
    args: [{}, {}],
    expected: true,
  },
  {
    desc: 'empty object and empty array',
    args: [{}, []],
    expected: false,
  },
  {
    desc: 'object and something else',
    args: [{ foo: 'bar' }, 'foo'],
    expected: false,
  },
  {
    desc: 'equal strings',
    args: ['foo', 'foo'],
    expected: true,
  },
  {
    desc: 'non-equal strings',
    args: ['foo', 'bar'],
    expected: false,
  },
  {
    desc: 'deeply equal objects',
    args: [
      { foo: 'bar', bar: { foo: 'bar' } },
      { foo: 'bar', bar: { foo: 'bar' } },
    ],
    expected: true,
  },
  {
    desc: 'not deeply equal objects',
    args: [
      { foo: 'bar', bar: { foo: 'bar' } },
      { foo: 'bar', bar: { foo: '' } },
    ],
    expected: false,
  },
];

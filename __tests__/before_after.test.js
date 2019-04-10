console.log('1 - start↓↓↓↓↓↓↓↓↓↓↓↓')
beforeAll(() => console.log('1 - beforeAll'));
beforeEach(() => console.log('1 - beforeEach'));
afterEach(() => console.log('1 - afterEach'));
afterAll(() => console.log('1 - afterAll'));

test('test 1', () => {
  console.log('1 - test!!!!!!!!!!!!!')
  console.log('1 - end↑↑↑↑↑↑↑↑↑↑↑↑↑')
});

describe('Scoped / Nested block', () => {
  console.log('  2 - start↓↓↓↓↓↓↓↓↓↓↓↓')
  beforeAll(() => console.log('  2 - beforeAll'));
  beforeEach(() => console.log('  2 - beforeEach'));
  afterEach(() => console.log('  2 - afterEach'));
  afterAll(() => console.log('  2 - afterAll'));

  test('test 2', () => {
    console.log('  2 - test!!!!!!!!!!!!!')
    console.log('  2 - end↑↑↑↑↑↑↑↑↑↑↑↑↑')
  });

  describe('Scoped / Nested Nested block', () => {
    console.log('    3 - start↓↓↓↓↓↓↓↓↓↓↓↓')
    beforeAll(() => console.log('    3 - beforeAll'));
    beforeEach(() => console.log('    3 - beforeEach'));
    afterEach(() => console.log('    3 - afterEach'));
    afterAll(() => console.log('    3 - afterAll'));

    test('test 3', () => {
      console.log('    3 - test!!!!!!!!!!!')
      console.log('    3 - end↑↑↑↑↑↑↑↑↑↑↑↑↑')
    });

    describe('Scoped / Nested Nested Nested block', () => {
      console.log('      4 - start↓↓↓↓↓↓↓↓↓↓↓↓')
      beforeAll(() => console.log('      4 - beforeAll'));
      beforeEach(() => console.log('      4 - beforeEach'));
      afterEach(() => console.log('      4 - afterEach'));
      afterAll(() => console.log('      4 - afterAll'));

      test('test 4', () => {
        console.log('      4 - test!!!!!!!!!!!')
        console.log('      4 - end↑↑↑↑↑↑↑↑↑↑↑↑↑')
      });
    });
  })
});

/**
    ✍️ describe内の宣言は先にすべて呼ばれてしまう
    1 - start↓↓↓↓↓↓↓↓↓↓↓↓
      2 - start↓↓↓↓↓↓↓↓↓↓↓↓
        3 - start↓↓↓↓↓↓↓↓↓↓↓↓
          4 - start↓↓↓↓↓↓↓↓↓↓↓↓

    1 - beforeAll
    1 - beforeEach
    1 - test!!!!!!!!!!!!!
    1 - end↑↑↑↑↑↑↑↑↑↑↑↑↑
    1 - afterEach

    ✍️ トップにある*Allの挙動は期待通りだが、describe内にある*Allはどにあってもここで実行され期待通りではない
        なので、*Allはファイルのトップに1度だけ登録するほうがよい
      2 - beforeAll
        3 - beforeAll
          4 - beforeAll
          4 - afterAll
        3 - afterAll
      2 - afterAll

    1 - beforeEach
      2 - beforeEach
      2 - test!!!!!!!!!!!!!
      2 - end↑↑↑↑↑↑↑↑↑↑↑↑↑
      2 - afterEach
    1 - afterEach

    1 - beforeEach
      2 - beforeEach
        3 - beforeEach
        3 - test!!!!!!!!!!!
        3 - end↑↑↑↑↑↑↑↑↑↑↑↑↑
        3 - afterEach
      2 - afterEach
    1 - afterEach

    1 - beforeEach
      2 - beforeEach
        3 - beforeEach
          4 - beforeEach
          4 - test!!!!!!!!!!!
          4 - end↑↑↑↑↑↑↑↑↑↑↑↑↑
          4 - afterEach
        3 - afterEach
      2 - afterEach
    1 - afterEach

    1 - afterAll
*/

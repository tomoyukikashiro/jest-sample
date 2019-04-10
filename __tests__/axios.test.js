// mockするfunctionの戻り値が固定値なら.fn().mockReturnValue
const mockFn1 = jest.fn()
                .mockReturnValueOnce(1)
                .mockReturnValueOnce(2)
                .mockReturnValue(true)

test('mock return test', () => {
  expect(mockFn1()).toBe(1)
  expect(mockFn1()).toBe(2)
  expect(mockFn1()).toBe(true)
  expect(mockFn1()).toBe(true)
  expect(mockFn1()).toBe(true)
})

// ------------------------------------------
// mockするfunctionの戻り値が都度変わるならfn().mockImplementation
const mockFn2 = jest.fn()
                .mockImplementationOnce(() => 1)
                .mockImplementationOnce(() => 2)
                .mockImplementation(() => true)

test('mock return test', () => {
  expect(mockFn2()).toBe(1)
  expect(mockFn2()).toBe(2)
  expect(mockFn2()).toBe(true)
  expect(mockFn2()).toBe(true)
  expect(mockFn2()).toBe(true)
})

// ------------------------------------------
// 依存モジュールをmockする
const axios = require('axios')

jest.mock('axios')
axios.get.mockResolvedValue({data: {foo: 'foo', bar: 'bar'}})

test('should return dummy data', async () => {
  const res = await axios.get('https://dummy.example.com')
  expect(res.data).toEqual({foo: 'foo', bar: 'bar'})
})

// ------------------------------------------
// export defaultしたfunctionをmockする

jest.mock('../src/foo')
const foo = require('../src/foo')
foo.mockImplementation(() => 'bar')
// foo.mockImplementationOnce

test('mock default export module', () => {
  expect(foo()).toEqual('bar')
})

import {Cache} from "../src/cache";

let cache;

beforeEach(() => {
    cache = new Cache();
})
test('cache can return value exactly one time', () => {
  cache.set('sample_data', 'data content', 1);
  expect(cache.get('sample_data')).toBe('data content');
  expect(cache.get('sample_data')).toBe(null);
});

test('cache knows default number of hits', () => {
    cache.set('sample_data', 'data content');
    expect(cache.get('sample_data')).toBe('data content');
    expect(cache.get('sample_data')).toBe(null);
});

test('cache can produce logs', () => {
    cache.set('sample_data', 'data content');
    cache.set('sample_data_2', 'data content 2', 99);
    cache.get('sample_data')
    cache.get('sample_data')
    cache.get('sample_data_2')
    expect(cache.getLogs()).toEqual([
        'sample_data, data content, 0',
        'sample_data, null',
        'sample_data_2, data content 2, 98',
    ])
});
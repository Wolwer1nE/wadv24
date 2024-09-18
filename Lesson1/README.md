## Limited Access Cache (Eng)
1. Implement a class to work with a cache that supports a finite number of hits.
2. The cache stores key-value pairs.
3. For each key, the number of hits is known, after which the cache must be cleared.
4. After each call, you need to reduce the number of hits by 1.
5. If there is no value for the key or if the number of hits is 0, then the cache returns null
6. If a key-value pair is set without specifying the number of hits, then the hit count is 1.
7. You need the ability to get cache statistics in the form of a list of hits:
   Key, Value, How many hits left.
8. Use TDD.

## Test


```bash
npm install
```

Run tests
```bash
npm run test
```
Coverage
```bash
npm run coverage
```

   

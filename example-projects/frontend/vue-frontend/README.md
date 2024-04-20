# Vue testing (Vite + Vitest)

1. Install dependencies
    1. `vitest` for testing framework
    2. `jsdom` for virtual dom in tests
    3. `@vue/test-utils` for vue specific test utilities
    4. eg. `npm install --save-dev vitest jsdom @vue/test-utils`
2. Configure vitest to be run with command `npm test`. `package.json`:
    ```
        "scripts": {
            "test": "vitest"
        },
    ```
3. Configure vitest to use `jsdom`. `vite.config.ts`:
    ```
        test: {
            globals: true,
            environment: 'jsdom',
        },
    ```

4. See example test file `src/components/Todo.test.ts`
5. Execute tests with `npm test`
# Testing

I haven't messed with the test directory (apart from removing the default test file)

With the refactoring mentioned in [TODO.md](./TODO.md) testing would become more feasible. If I'd started with the testing side (I opted not to with my lack of experience with it) then the structure and separation would have been handled sooner.

From there:

## Stores

Testing stores would involve following along with the documentation outlined in the the [Pinia docs](https://pinia.vuejs.org/cookbook/testing.html).

The store itself would be mocked and as each is essentially just acting as a store for the API requests that are made they could be tested separately. this would be possible following on from the refactor that moved store to store calls into actions. The responses for these could be mocked.

## Components

From my initial research I had done a little reading on [Testing Library](https://testing-library.com/docs/vue-testing-library/intro) and was planning on integrating that.

Again with how the data is structured with clear typing, the props being passed into the components could be mocked making use of the Tyepscript interfaces.
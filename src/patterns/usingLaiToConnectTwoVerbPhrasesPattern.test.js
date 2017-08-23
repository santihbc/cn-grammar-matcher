/* --- AUTOGENERATED FILE -----------------------------
* If you make changes to this file delete this comment.
* Otherwise the file may be overwritten in the future.
* --------------------------------------------------- */

const usingLaiToConnectTwoVerbPhrasesPattern = require('./usingLaiToConnectTwoVerbPhrasesPattern');
const { assertAllExamplesMatch, assertNoneMatch } = require('../lib/testUtils');

test('matches all examples', async () => {
  await assertAllExamplesMatch(usingLaiToConnectTwoVerbPhrasesPattern);
});

// TODO: Add more tests

test("doesn't match negative examples", async () => {
  await assertNoneMatch(
    usingLaiToConnectTwoVerbPhrasesPattern,
    [
      // TODO: add negative examples here
    ]
  );
});

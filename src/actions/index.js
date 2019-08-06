export const SET_TEST_NAME = 'SET_TEST_NAME';
export const setTestName = testName => ({
  type: SET_TEST_NAME,
  testName
});
export const setTestNameAsync = testName => dispatch => {
  setTimeout(() => {
    dispatch(setTestName(testName))
  }, 100)
}

export const SET_TEST_NAME = 'SET_TEST_NAME';
/**
 * 真正的action，其实就是一个对象
 */
// 这里是一个action构造器
export const setTestName = testName => ({
  type: SET_TEST_NAME,
  payload: {
    testName
  }
});

/**
 * 不纯粹的 action
 */
export const setTestNameAsync = (testName) => dispatch => {
  return new Promise(resolve => {
    setTimeout(() => {
      dispatch(setTestName(testName));
      resolve(testName);
    }, 100);
  });
}

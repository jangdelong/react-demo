/**
 * About页状态管理
 */
const initialState = {
  testName: ''
};

function setTestName (state = { testName: '' }, action) {
  if (typeof state === 'undefined') {
    return initialState
  }

  switch (action.type) {
    case 'SET_TEST_NAME':
      return Object.assign({}, state, {
        testName: action.testName
      });
    default:
      return state;
  }
}

export default setTestName

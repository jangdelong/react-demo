/**
 * About页状态管理
 * reducer：一般都是一个函数
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
        testName: action.payload.testName
      });
    default:
      return state;
  }
}

export default setTestName

import { combineReducers } from 'redux'
import testReducer from '../../features/teatarea/testReducer'

const rootReducer=combineReducers({
    test:testReducer
})

export default rootReducer;
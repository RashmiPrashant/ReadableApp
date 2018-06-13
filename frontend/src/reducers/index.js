import { combineReducers } from 'redux'
import categories from './categoriesReducer'
import comments from './commentsReducer'
import posts from './postsReducer'
import sorting from './sortingReducer'
 
export default combineReducers({
  comments,
  posts,
  categories,
  sorting
      })
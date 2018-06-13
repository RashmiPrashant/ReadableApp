import { GET_ALL_CATEGORIES} from '../actions';

const initialCategoriesState = [];
  function categoriesReducer(state = initialCategoriesState , action){
      switch(action.type){
          case GET_ALL_CATEGORIES:
            return action.categories
          default :
            return state
        }
      }

export default categoriesReducer      
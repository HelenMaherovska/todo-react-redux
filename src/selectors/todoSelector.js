import { createSelector } from "reselect";
import { FILTERS } from "constants.js";

const todosSelector = state => state.todos;
const filterSelector = state => state.filterTodo;

export const selectVisibleTodos = createSelector(
  [todosSelector, filterSelector],
  (todos, filter) => {
    switch (filter) {
      case FILTERS.ALL:
        return todos;
      case FILTERS.ACTIVE:
        return todos.filter(todo => !todo.completed);
      case FILTERS.COMPLETE:
        return todos.filter(todo => todo.completed);
      default:
        return todos;
    }
  }
);

import { atom, selector } from 'recoil';

/* 
Todo: {
    task: string;
    isCompleted: boolean;
}
*/

export const todoListState = atom({
    key: 'todoListState',
    default: [],
});

// 1 = Show All
// 2 = Show Checked
// 3 = Show Unchecked
export const todoListFilterState = atom({
    key: 'TodoListFilter',
    default: '1',
});

export const filteredTodoListState = selector({
    key: 'filteredTodoListState',
    get: ({ get }) => {
        const filter = get(todoListFilterState);
        const list = get(todoListState);

        switch (filter) {
            case '2':
                return list.filter((item) => item.isComplete);
            case '3':
                return list.filter((item) => !item.isComplete);
            default:
                return list;
        }
    },
});

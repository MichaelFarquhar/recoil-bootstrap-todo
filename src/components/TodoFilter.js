import { FormSelect } from 'react-bootstrap';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { todoListFilterState, todoListState } from '../state/todos';

export const TodoFilter = () => {
    const todoList = useRecoilValue(todoListState);
    const setTodoListFilter = useSetRecoilState(todoListFilterState);

    const onSelect = (e) => {
        setTodoListFilter(e.target.value);
    };

    return (
        <FormSelect
            className="d-flex mb-3"
            size={'sm'}
            style={{ width: 'fit-content' }}
            disabled={todoList.length === 0}
            onChange={(e) => onSelect(e)}
        >
            <option value="1">Show All</option>
            <option value="2">Show Checked</option>
            <option value="3">Show Unchecked</option>
        </FormSelect>
    );
};

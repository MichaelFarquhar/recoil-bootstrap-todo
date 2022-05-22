import { FormSelect } from 'react-bootstrap';
import { useRecoilValue } from 'recoil';
import { todoListState } from '../state/todos';

export const TodoFilter = () => {
    const todoList = useRecoilValue(todoListState);
    return (
        <FormSelect
            className="d-flex mb-3"
            size={'sm'}
            style={{ width: 'fit-content' }}
            disabled={todoList.length == 0}
        >
            <option>Filter Todos</option>
            <option value="1">Show All</option>
            <option value="2">Show Checked</option>
            <option value="3">Show Unchecked</option>
        </FormSelect>
    );
};

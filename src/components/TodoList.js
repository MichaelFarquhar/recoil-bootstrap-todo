import { FormCheck, ListGroup } from 'react-bootstrap';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import { todoListState, filteredTodoListState } from '../state/todos';

const TodoList = () => {
    const setTodoList = useSetRecoilState(todoListState);
    const todoListFiltered = useRecoilValue(filteredTodoListState);

    const completeTodo = (todo, index) => {
        const changedTodo = {
            ...todo,
            isComplete: !todo.isComplete,
        };
        setTodoList((oldTodo) => [
            ...oldTodo.slice(0, index),
            changedTodo,
            ...oldTodo.slice(index + 1),
        ]);
    };

    return (
        <div>
            <ListGroup>
                {todoListFiltered.length === 0 ? (
                    <ListGroup.Item>
                        <span style={{ fontStyle: 'italic' }}>No tasks to list.</span>
                    </ListGroup.Item>
                ) : (
                    todoListFiltered.map((todo, index) => (
                        <ListGroup.Item
                            key={index}
                            action
                            onClick={() => completeTodo(todo, index)}
                        >
                            <div className="d-flex">
                                <FormCheck
                                    type="checkbox"
                                    id="default-checkbox"
                                    label={``}
                                    disabled
                                    checked={todo.isComplete}
                                />
                                <div
                                    style={{
                                        textDecoration: todo.isComplete
                                            ? 'line-through'
                                            : 'inherit',
                                    }}
                                >
                                    {todo.task}
                                </div>
                            </div>
                        </ListGroup.Item>
                    ))
                )}
            </ListGroup>
        </div>
    );
};

export default TodoList;

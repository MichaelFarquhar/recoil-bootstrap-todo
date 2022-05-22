import { FormCheck, ListGroup } from 'react-bootstrap';
import { useRecoilValue } from 'recoil';
import { todoListState } from '../state/todos';

const TodoList = () => {
    const todoList = useRecoilValue(todoListState);
    return (
        <div>
            <ListGroup>
                {todoList.length === 0 ? (
                    <ListGroup.Item>
                        <span style={{ fontStyle: 'italic' }}>No tasks to list.</span>
                    </ListGroup.Item>
                ) : (
                    todoList.map((todo, index) => (
                        <ListGroup.Item
                            key={index}
                            action
                            onClick={() => console.log('cicked: ' + index)}
                        >
                            <div className="d-flex">
                                <FormCheck
                                    type="checkbox"
                                    id="default-checkbox"
                                    label={``}
                                    disabled
                                    checked={todo.isComplete}
                                />
                                <div>{todo.task}</div>
                            </div>
                        </ListGroup.Item>
                    ))
                )}
            </ListGroup>
        </div>
    );
};

export default TodoList;

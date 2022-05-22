import { ListGroup } from 'react-bootstrap';
import { useRecoilValue } from 'recoil';
import { todoListState } from '../state/todos';

const TodoList = () => {
    const todoList = useRecoilValue(todoListState);
    return (
        <div>
            <ListGroup>
                {todoList.length == 0 ? (
                    <ListGroup.Item>
                        <span style={{ fontStyle: 'italic' }}>
                            All tasks are complete!
                        </span>
                    </ListGroup.Item>
                ) : (
                    todoList.map((todo, index) => (
                        <ListGroup.Item
                            key={index}
                            action
                            onClick={() => console.log('cicked: ' + index)}
                        >
                            {todo.task}
                        </ListGroup.Item>
                    ))
                )}
            </ListGroup>
        </div>
    );
};

export default TodoList;

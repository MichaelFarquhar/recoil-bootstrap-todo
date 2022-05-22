import { Col, Button, Stack, InputGroup, FormControl, Card } from 'react-bootstrap';
import { useRecoilState } from 'recoil';
import { todoListState } from '../state/todos';
import { TodoFilter } from './TodoFilter';
import TodoList from './TodoList';

export const Todo = () => {
    const [todoList, setTodoList] = useRecoilState(todoListState);
    return (
        <Stack gap={3}>
            <Col>
                <h1>Todo List</h1>
            </Col>
            <Card>
                <Card.Header>
                    <InputGroup className="mb-1 mt-1">
                        <FormControl
                            placeholder="Write a new todo"
                            aria-label="Write a new todo"
                            aria-describedby="add-todo"
                        />
                        <Button variant="outline-dark" id="add-todo">
                            Add Todo
                        </Button>
                    </InputGroup>
                </Card.Header>
            </Card>
            <Card className="mt-2">
                <Card.Body>
                    <TodoFilter />
                    <TodoList />
                    <div className="d-flex justify-content-end">
                        <Button
                            className="mt-3"
                            variant="primary"
                            id="clear-checked"
                            disabled={todoList.length == 0}
                        >
                            Clear Checked
                        </Button>
                    </div>
                </Card.Body>
            </Card>
        </Stack>
    );
};

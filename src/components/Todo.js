import { useRef, useState } from 'react';
import {
    Col,
    Button,
    Stack,
    InputGroup,
    FormControl,
    Card,
    Tooltip,
    Overlay,
} from 'react-bootstrap';
import { useRecoilState } from 'recoil';
import { todoListState } from '../state/todos';
import { TodoFilter } from './TodoFilter';
import TodoList from './TodoList';

export const Todo = () => {
    const [todoInput, setTodoInput] = useState('');
    const [todoList, setTodoList] = useRecoilState(todoListState);

    const [showTooltip, setShowTooltip] = useState(false);
    const target = useRef(null);

    const onChange = (e) => {
        const value = e.target.value;
        setTodoInput(value);
    };

    const addTodo = () => {
        if (todoInput === '') {
            setShowTooltip(true);
            return;
        }
        setShowTooltip(false);

        setTodoList((oldTodo) => [
            ...oldTodo,
            {
                task: todoInput,
                isComplete: false,
            },
        ]);
        setTodoInput('');
    };

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
                            onChange={(e) => onChange(e)}
                            value={todoInput}
                        />
                        <Button
                            variant="outline-dark"
                            id="add-todo"
                            onClick={() => addTodo()}
                            ref={target}
                        >
                            Add Todo
                        </Button>
                        <Overlay
                            target={target.current}
                            show={showTooltip}
                            placement="right"
                        >
                            {(props) => (
                                <Tooltip id="overlay-example" {...props}>
                                    Todo cannot be empty
                                </Tooltip>
                            )}
                        </Overlay>
                    </InputGroup>
                </Card.Header>
            </Card>
            <Card className="mt-3">
                <Card.Body>
                    <TodoFilter />
                    <TodoList />
                    <div className="d-flex justify-content-end">
                        <Button
                            className="mt-3"
                            variant="primary"
                            id="clear-checked"
                            disabled={todoList.length === 0}
                        >
                            Clear Checked
                        </Button>
                    </div>
                </Card.Body>
            </Card>
        </Stack>
    );
};

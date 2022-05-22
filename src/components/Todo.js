import { Col, Button, Stack, InputGroup, FormControl } from 'react-bootstrap';

export const Todo = () => {
    return (
        <Stack gap={3}>
            <Col>
                <h1>Todo List</h1>
            </Col>
            <InputGroup className="mb-3">
                <FormControl
                    placeholder="Write a new todo"
                    aria-label="Write a new todo"
                    aria-describedby="add-todo"
                />
                <Button variant="outline-secondary" id="add-todo">
                    Add Todo
                </Button>
            </InputGroup>
        </Stack>
    );
};

import { RecoilRoot } from 'recoil';
import { Todo } from './components/Todo';

function App() {
    return (
        <RecoilRoot>
            <div style={{ margin: '5em 1em', maxWidth: '500px' }}>
                <Todo />
            </div>
        </RecoilRoot>
    );
}

export default App;

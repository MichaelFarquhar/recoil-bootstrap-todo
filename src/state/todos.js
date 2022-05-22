import { atom } from 'recoil';

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

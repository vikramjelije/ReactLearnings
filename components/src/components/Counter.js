import { useState, useReducer } from 'react';
import Button from './Button';
import Panel from './Panel';

const INCREMENT_COUNT = 'increment_count';
const DECREMENT_COUNT = 'idecrement_count';
const SET_VALUE_TO_ADD = 'set_value_to_add';
const ADD_VALUE_TO_COUNT = 'add_value_to_count';

const reducer = (state, action) => {
    switch(action.type) {
        case SET_VALUE_TO_ADD:
            return {
                ...state,
                valueToAdd: action.payload,
            };
        case INCREMENT_COUNT:
            return {
                ...state,
                count: state.count + 1,
            };
        case DECREMENT_COUNT:
            return {
                ...state,
                count: state.count + -1,
            };
        case ADD_VALUE_TO_COUNT:
            return {
                ...state,
                count: state.count + state.valueToAdd,
                valueToAdd: 0,
            };
        default:
            throw new Error('unexpected action type: ' + action.type);
    }
}

function Counter({ initialCount }) {
    // const [count, setCount] = useState(initialCount);
    // const [valueToAdd, setValueToAdd] = useState(0);

    const [state, dispatch] = useReducer(reducer, {
        count: initialCount,
        valueToAdd: 0,
    });

    const { count, valueToAdd } = state;

    const handleChange = (event) => {
        const value = parseInt(event.target.value) || 0;
        dispatch({
            type: SET_VALUE_TO_ADD,
            payload: value
        });
    }

    const handleCounterIncrement = () => {
        // setCount(count + valueToAdd);
        dispatch({
            type: INCREMENT_COUNT
        });
    }

    const handleCounterDecrement = () => {
        // setCount(count + valueToAdd);
        dispatch({
            type: DECREMENT_COUNT
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        // setCount(count + valueToAdd);
        // setValueToAdd(0);
        dispatch({
            type: ADD_VALUE_TO_COUNT
        });
    }

    return <Panel className="m-3">
        <h1 className='text-lg'>Current count: {count}</h1>
        <div className='flex flew-flow'>
            <Button onClick={handleCounterIncrement}>Increment</Button>
            <Button onClick={handleCounterDecrement}>Decrement</Button>
        </div>
        <form>
            <label>Add a lot!</label>
            <input
                type='number' className='p-1 m-3 bg-gray-50 border border-gray-300'
                value={valueToAdd || ''}
                onChange={handleChange}
            />
            <Button onClick={handleSubmit}>Add it!</Button>
        </form>
    </Panel>
}

export default Counter;
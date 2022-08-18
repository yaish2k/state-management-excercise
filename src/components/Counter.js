import { useStore, useSelect } from '../store';

const Counter = ({headerName}) => {
  let [globalState, setGlobalState] = useStore();
  let counter = useSelect((state => state.counter));
  return (
    <div>
      <h1>{headerName}</h1>
      <p>counter value is {counter}</p>
      <button
        onClick={() =>
          setGlobalState((prevState) => ({ counter: prevState.counter + 1 }))
        }
      >
        Increment
      </button>
      <button
        onClick={() =>
          setGlobalState((prevState) => ({ counter: prevState.counter - 1 }))
        }
      >
        Decrement
      </button>
      <button onClick={() => store.undo()}>Undo</button>
      <button onClick={() => store.redo()}>Redo</button>
    </div>
  );
}

export default Counter;
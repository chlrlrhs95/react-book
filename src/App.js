import CounterContainer from './containers/CounterContainer';
import TodosContainer from './containers/TodosContainer';

function App() {
  return (
    <div>
      <CounterContainer></CounterContainer>
      <hr />
      <TodosContainer />
    </div>
  );
}

export default App;

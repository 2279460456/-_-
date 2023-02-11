import IndexRouter from './router/index';
import './util/http'; //对axios的baseurl进行定义
import './App.css';

function App() {
  return (
    <div className="App">
      <IndexRouter></IndexRouter>
    </div>
  );
}

export default App;

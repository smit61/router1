
import './App.css';
import { useNavigate } from 'react-router-dom'

function App() {
  const navi = useNavigate();

  const submmit = () => {
    navi('/vc')
  }
  const hwl = () => {
    navi('/handle')
  }

  return (
    <div>
      <button onClick={() => submmit()}>submmit</button>
      <button onClick={() => hwl()}>hello</button>
    </div>
  );
}

export default App;

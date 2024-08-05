import { Provider } from 'react-redux'
import './App.css'
import store from './utils/redux/appStore.ts';
import Home from './components/Home/Home.tsx';

function App() {




  return (
    <Provider store={store}>
      <Home/>
    </Provider>
  )
}

export default App

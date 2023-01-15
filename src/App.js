import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';
import store from './redux/index';
import MainPage from './pages/MainPage/MainPage';
import ListPage from './pages/ListPage/ListPage';

import './reset.css';
import './common.css';


function App() {
    return (
      <Provider store={store}>
        <div className="app">
              <Route path="/" exact component={MainPage} />
              <Route path="/list/:id" exact component={ListPage} />
        </div>
      </Provider>
    );
}

export default App;


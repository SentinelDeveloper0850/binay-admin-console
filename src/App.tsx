import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Dashboard from './pages/dashboard';
import Invoices from './pages/invoices';
import Quotations from './pages/quotations';
import Receipts from './pages/receipts';

import { AmplifyAuthenticator } from '@aws-amplify/ui-react';
import HomePage from './pages/home';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <HomePage />
        </Route>
        <AmplifyAuthenticator>
          <Route exact path='/dashboard'>
            <Dashboard />
          </Route>
          <Route exact path='/quotations'>
            <Quotations />
          </Route>
          <Route exact path='/invoices'>
            <Invoices />
          </Route>
          <Route exact path='/receipts'>
            <Receipts />
          </Route>
        </AmplifyAuthenticator>
      </Switch>
    </Router>
  );
}

export default App;

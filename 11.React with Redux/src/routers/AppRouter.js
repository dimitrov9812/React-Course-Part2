import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
//Imports for the Challenge
import ExpenseDashboardPage from './../components/ExpenseDashboardPage';
import AddExpensePage from './../components/AddExpensePage';
import EditExpensePage from './../components/EditExpensePage';
import HelpPage from './../components/Help';
import NotFoundPage from './../components/NotFoundPage';
import Header from './../components/Header';

  const AppRouter = () => (
    <BrowserRouter>
    <div>
        <Header />
        
        <Switch>
          <Route 
              path='/'
              component={ExpenseDashboardPage}
              exact = {true}
          />
          <Route 
              path='/create'
              component={AddExpensePage}
          />
          <Route 
              path='/edit/:id'
              component={EditExpensePage}
          />
          <Route 
              path='/help'
              component={HelpPage}
          />
          <Route component={NotFoundPage} />
        </Switch>
    </div>
    </BrowserRouter>
  );
  
    export default AppRouter;


    // =========Challenge=========
// Create 6 new files for the 6 components
// use the sam names
// setup the imports, the component itself, default export
// import into AppRouter so they can be used later
/*
  const ExpenseDashboardPage = () => (
    <div>
      This is from my dashboard component
    </div>
  );

  const AddExpensePage = () => (
    <div>
      This is from my add expense component
    </div>
  );
  
  // =========Challenge========
  // 1.Create 2 more components - EditExpensePage and HelpPage
  // 2.Add them to our app and make sure the navigation to them work fine
  
  // We create the edit expense component
  const EditExpensePage = () => (
    <div>
      Edit Expense
    </div>
  );
  // We create the help cpomponent
  const HelpPage = () => (
    <div>
      Help 
    </div>
  );
  
  const NotFoundPage = () => (
    <div>
      404! <Link to="/">Go home</Link>
    </div>
  );
  const Header = () => (
    <header>
      <h1>Budget App</h1>
    </header>
  );
  */
import { Switch, Route } from 'react-router-dom'

import Home from './Pages/Home/Home'
import Newsbody from './Pages/Newsbody/Newsbody'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Nav from './Components/Nav'

function App() {
  return (
    <>
      <Header />
        <Nav />

        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/newsbody' component={Newsbody} exact />
        </Switch>
      <Footer />
    </>
  );
}

export default App;

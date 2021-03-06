import React from 'react';
import { Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';
import { Switch } from 'antd';
import { Navbar, Exchanges, Homepage, Cryptocurrencies, CryptoDetails, News  } from './components';

import './App.css';

const App = () => {
  return (
    <div className='app'>
        <div className='navbar'>
            <Navbar />
        </div>
        <div className='main'>
          <Layout>
            <div className='routes'>
              <Switch>
                <Route exact path='/'>
                  <Homepage />
                </Route>
                <Route exact path='/exchanges'>
                  <Exchanges />
                </Route>
                <Route exact path='/cryptocurrencies'>
                  <Cryptocurrencies />
                </Route>
                <Route exact path='/crypto/:coindId'>
                  <CryptoDetails />
                </Route>
                <Route exact path='/news'>
                  <News />
                </Route>
              </Switch>
            </div>
          </Layout>
        </div>
        <div className='footer'>

        </div>
    </div>    
  )
}

export default App
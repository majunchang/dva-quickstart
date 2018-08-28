import React from 'react'
import { Router, Route, Switch } from 'dva/router'
import IndexPage from './routes/IndexPage'
import Product from './routes/product'

function RouterConfig ({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path='/' exact component={IndexPage} />
        <Route path='/product' exact component={Product} />
      </Switch>
    </Router>
  )
}

export default RouterConfig

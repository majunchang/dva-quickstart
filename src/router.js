import React from 'react'
import { Router, Route, Switch } from 'dva/router'
import IndexPage from './routes/IndexPage'
import Product from './routes/product'
import Counter from './routes/counter'

function RouterConfig ({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path='/' exact component={IndexPage} />
        <Route path='/product' exact component={Product} />
        <Route path='/counter' exact component={Counter} />

      </Switch>
    </Router>
  )
}

export default RouterConfig

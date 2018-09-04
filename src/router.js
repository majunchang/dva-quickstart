import React from 'react'
import { Router, Route, Switch } from 'dva/router'
import IndexPage from './routes/IndexPage'
import Product from './routes/product'
import Counter from './routes/counter'
import TodoList from './routes/todoList'

function RouterConfig ({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path='/' exact component={IndexPage} />
        <Route path='/product' component={Product} />
        <Route path='/counter' component={Counter} />
        <Route path='/todolist' component={TodoList} />

      </Switch>
    </Router>
  )
}

export default RouterConfig

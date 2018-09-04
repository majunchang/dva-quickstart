import queryString from 'query-string'
import * as todoService from '../services/todo'

export default {

  namespace: 'todo',
  state: {
    list: []
  },
  subscriptions: {
    setup ({ dispatch, history }) {
      return history.listen(({ pathname, search }) => {
        const query = queryString.parse(search)
        let arr = []
        console.log(pathname)
        console.log(search)
        console.log(query)
        if (pathname === '/todolist') {
          dispatch({ type: 'save', payload: {arr} })
        }
      })
      // eslint-disable-line
    }
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' })
    },
    * add ({payload: value}, {call, select, put}) {
      // const data = yield call(todoService.query, value)
      // console.log(data)
      // console.log(payload)
      console.log(value)

      let tempList = yield select(state => state.todo.list)
      let list = []
      list = list.concat(tempList)
      const tempObj = {}
      tempObj.title = value
      tempObj.id = list.length
      tempObj.finished = false
      list.push(tempObj)

      yield put({ type: 'save', payload: { list } })
    },
    * toggle () {

    },
    * delete () {

    }
  },

  reducers: {
    save (state, action) {
      console.log('reducer中的save方法')
      console.log(state)
      console.log(action)
      state = {
        list: []
      }
      return { ...state, ...action.payload }
    }
  }

}

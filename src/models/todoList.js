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
        console.log(query)
        if (pathname === '/todolist') {
          //  通过监听路由变化 触发action  清空原有数据
          dispatch({ type: 'save', payload: {arr} })
        }
      })
    }
  },
  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' })
    },
    * add ({payload: value}, {call, select, put}) {
      const data = yield call(todoService.query, value)
      console.log(data)
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
      state = {
        list: []
      }
      return { ...state, ...action.payload }
    }
  }

}

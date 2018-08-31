import React from 'react'
import {connect} from 'dva'
import styles from './IndexPage.css'
import {Button} from 'antd'

function Counter ({dispatch, count}) {
  function minusClick (value) {
    dispatch({type: 'count/minus'})
  }
  function addClick (value) {
    dispatch({type: 'count/add'})
  }

  return (
    <div>
      <h2>{count}</h2>
      <Button className={styles.minus} onClick={minusClick.bind(null, 'xx')}>-</Button>
      <Button className={styles.add} onClick={addClick.bind(null, 'xx')}>+</Button>
    </div>
  )
}

function mapStateToProps (state) {
  return {
    count: state.count
  }
}

export default connect(mapStateToProps)(Counter)

//  也可以直接合并起来写
// export default connect((state)=>{
//   return {
//     count:state.count
//   }
// })(Counter)

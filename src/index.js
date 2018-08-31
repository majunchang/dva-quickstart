import dva from 'dva'
import './index.css'
import models from './models'

// 1. Initialize
// const app = dva()
const app = dva({
  initialState: {
    products: [
      { name: 'dva', id: 1 },
      { name: 'antd', id: 2 }
    ],
    count: 0
  }
})

// 2. Plugins
// app.use({});

// 3. Model
models.forEach(v => app.model(v))
// app.model(require('./models/counter').default)

// 4. Router
app.router(require('./router').default)

// 5. Start
app.start('#root')

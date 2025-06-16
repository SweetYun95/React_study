import './App.css'

import { Provider } from 'react-redux'
import Counter from './ToolkitCounter/Counter'
import store from './ToolkitCounter/store'

function App() {
   return (
      <Provider store={store}>
         <Counter />
      </Provider>
   )
}

export default App

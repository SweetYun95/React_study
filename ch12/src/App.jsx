import './App.css'
import { Provider } from 'react-redux'

// import Counter from './NonToolkit/Counter'
// import storeNonToolkit from './NonToolkit/store'

import Counter from './UseToolkit/Counter'
import User from './UseToolkit/User'
import storeUseToolkit from './UseToolkit/store'

function App() {
   return (
      // <Provider store={storeNonToolkit}>
      <Provider store={storeUseToolkit}>
       <Counter />
       <User/>
      </Provider>
   )
}

export default App

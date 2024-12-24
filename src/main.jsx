
import { createRoot } from 'react-dom/client'
import './index.css'
import { store } from './redux/store.js'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import router from './routers/routers.jsx'
import 'sweetalert2/dist/sweetalert2.js'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
)

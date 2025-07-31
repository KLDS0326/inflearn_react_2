import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider} from 'react-router';
import router from './router/root.tsx';
import store from './store.tsx';
import { Provider } from 'react-redux';



  


createRoot(document.getElementById('root')!).render(
  <Provider store = {store}>
  <RouterProvider router={router}></RouterProvider>,
  </Provider>
)

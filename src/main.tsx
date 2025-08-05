import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider} from 'react-router';
import router from './router/root.tsx';
// import store from './store.tsx';
import { Provider } from 'react-redux';

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient()


  


// createRoot(document.getElementById('root')!).render(
//   <Provider store = {store}>
//   <RouterProvider router={router}></RouterProvider>,
//   </Provider>
//)

//react store는 이제 안쓰려고 노력한다고 함. 장바구니나 회원기능 주스탠드로바군답니다.
createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
  {/* <Provider store={store}> */}
      <RouterProvider router={router}  />
  {/* </Provider> */}
      <ReactQueryDevtools initialIsOpen={true} />
  </QueryClientProvider>
)


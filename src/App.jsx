import Dashboard from "./components/dashboard/Dashboard";
import { RouterProvider , createBrowserRouter } from 'react-router-dom'
import Transaction from "./components/transaction/Transaction";
import Support from "./components/support/Support";
import Layout from "./components/layout/Layout";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Dashboard /> },          // "/"
        { path: "transaction", element: <Transaction /> },
        {path: "support" , element : <Support /> }// "/transaction"
      ],
    },
  ]);


    return (
<RouterProvider router={router} />
  );
};
export default App;

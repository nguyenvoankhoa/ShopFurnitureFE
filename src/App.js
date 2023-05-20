import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import HomePage, { loader } from "./pages/HomePage";
import ItemsLayout from "./pages/ItemsLayout";
import InfoPage from "./pages/InfoPage";
import ServicePage from "./pages/ServicePage";
import Items, { loader as itemsFetching } from "./pages/Items";
import ItemDetail, { loaderItem as itemLoader } from "./pages/ItemDetail";
import Modal from "./pages/Modal";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import AdminPage from "./pages/AdminPage";
import EditItem, { loadEditedItem } from "./pages/EditItem";
import AddItem from "./pages/AddItem";
import ManageProduct, { loader as loaderProduct } from "./pages/ManageProduct";
import ManageUser, {
  loaderListUser as loaderUser,
  loaderUserEdited as userLoader,
} from "./pages/ManageUser";
import NewUser from "./pages/NewUser";
import PaySuccess from "./pages/PaySuccess";
import ErrorPage from "./pages/ErrorPage";
const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <Root />,
    children: [
      { index: true, element: <HomePage />, loader: loader },
      {
        path: "items",
        element: <ItemsLayout />,
        children: [
          { index: true, element: <Items />, loader: itemsFetching },
          { path: ":itemId", element: <ItemDetail />, loader: itemLoader },
        ],
      },
      { path: "about", element: <InfoPage /> },
      { path: "service", element: <ServicePage /> },
      { path: "login", element: <LoginPage /> },
      { path: "register", element: <RegisterPage /> },
      { path: "success", element: <PaySuccess /> },
    ],
  },
  {
    path: "/admin",
    element: <AdminPage />,
    children: [
      { index: true, element: <ManageProduct />, loader: loaderProduct },
      {
        path: "user",
        children: [
          { index: true, element: <ManageUser />, loader: loaderUser },
          { path: ":userId", element: <NewUser />, loader: userLoader },
        ],
      },
      { path: ":itemId", element: <EditItem />, loader: loadEditedItem },
      { path: "new", element: <AddItem /> },
    ],
  },
]);
function App() {
  return (
    <RouterProvider router={router}>
      <Modal />
    </RouterProvider>
  );
}

export default App;

import Home from "./pages/Home";
import { BrowserRouter as Router,Route,Routes, Navigate } from "react-router-dom";
import Menu from "./pages/Menu";
import Dashboard from "./pages/Dashboard";
import Services from "./pages/Services";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Cart from "./pages/Cart";
import { Toaster } from "react-hot-toast";
import { useContext } from "react";
import { UserContext } from "./context/UserContext";
import CreateOrder from "./pages/CreateOrder";
import Profile from "./pages/Profile";
import Order from './pages/Order'
import Orders from './pages/Orders'
import TrackOrder from "./pages/TrackOrder";
import MenuDetail from './pages/Menu_Detail'
import ConfrimOrder from './pages/ConfirmOrder'
import NotFound from './pages/NotFound'
import Contact from './pages/Contact'

const queryClient=new QueryClient({
  defaultOptions:{
    queries:{
      staleTime:0
    }
  }
})

function App() {

  const {authUser}=useContext(UserContext)

  return (
    <div className="h-screen text-center justify-center">
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false}/>
      <Router>
       <Routes>
         <Route exact path='/' element={<Home/>}/>
         <Route path="/cart" element={!authUser ? <Navigate to='/login'/> : <Cart/>}/>
         <Route path="/menu" element={<Menu/>}/>
         <Route path="/contact" element={<Contact/>}/>
         <Route exact path="/menu_detail/:id" element={<MenuDetail/>}/>
         <Route path="/order/:id" element={<Order/>}/>
         <Route path="/services" element={<Services/>}/>
         <Route path="/login" element={authUser ? <Navigate to='/'/> : <Login/>}/>
         <Route path="/signup" element={<SignUp/>}/>
         <Route path="/confirmorder/:id" element={<ConfrimOrder/>}/>
         <Route path="/dashboard" element={!authUser ? <Navigate to='/login'/> : <Dashboard/>}>
           <Route path="profile" element={<Profile />} />
           <Route path="orders" element={<Orders/>}/>
           <Route path="/dashboard/trackorder/:id" element={<TrackOrder/>}/>
        </Route>
         <Route path="/createorder" element={!authUser ? <Navigate to='/login'/> : <CreateOrder/>}/>
         <Route path="*" element={<NotFound/>}/>
       </Routes>
      </Router>
      </QueryClientProvider>
      <Toaster position="top-center"
       reverseOrder={false}/>
    </div>
  );
}

export default App;

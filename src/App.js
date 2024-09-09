import Home from "./pages/Home";
import { BrowserRouter as Router,Route,Routes, Navigate } from "react-router-dom";
import Menu from "./pages/Menu";
import Dashboard from "./pages/Dashboard";
import Footer from "./components/Footer";
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
    <div  className="h-screen text-center justify-center">
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false}/>
      <Router>
       <Routes>
         <Route exact path='/' element={<Home/>}/>
         <Route path="/cart" element={!authUser ? <Navigate to='/login'/> : <Cart/>}/>
         <Route path="/menu" element={<Menu/>}/>
         <Route path="/order/:id" element={<Order/>}/>
         <Route path="/services" element={<Services/>}/>
         <Route path="/login" element={authUser ? <Navigate to='/'/> : <Login/>}/>
         <Route path="/signup" element={authUser ? <Navigate to='/'/> : <SignUp/>}/>
         <Route path="/dashboard" element={!authUser ? <Navigate to='/login'/> : <Dashboard/>}>
            <Route path="/dashboard/profile" element={<Profile/>}/>
         </Route>
         <Route path="/createorder" element={!authUser ? <Navigate to='/login'/> : <CreateOrder/>}/>
       </Routes>
       <Footer/>
      </Router>
      </QueryClientProvider>
      <Toaster position="top-center"
  reverseOrder={false}/>
    </div>
  );
}

export default App;

import { useEffect, useState } from 'react';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import {Footer, Header} from './components';
import AllRoutes from './routes/AllRoutes'
import { UserContext } from './context/UserContext';


function App() {

  const [currentUser, setCurrentUser] = useState(localStorage.getItem('token'))
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (currentUser !== null) {
      setCurrentUser(true)
    }
    setIsLoading(false)
  },[])

  if (isLoading) return 

  return (
    <div className="App">
      <UserContext.Provider value={{currentUser, setCurrentUser}}>
          <Header />
          <AllRoutes />
          <Footer />
      </UserContext.Provider>
      <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          />
      <ToastContainer />
    </div>
  );
}

export default App;

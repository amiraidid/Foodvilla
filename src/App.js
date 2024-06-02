import { useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import {Footer, Header} from './components';
import AllRoutes from './routes/AllRoutes'
import { UserContext } from './context/UserContext';
import './App.css';


function App() {

  const [currentUser, setCurrentUser] = useState(localStorage.getItem('token'))
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (currentUser !== null) {
      setCurrentUser(true)
    }
    setIsLoading(false)
  },[currentUser])

  if (isLoading) return 

  return (
    <div className="App">
      <UserContext.Provider value={{currentUser, setCurrentUser}}>
          <Header />
          <AllRoutes />
          <Footer />
      </UserContext.Provider>
      <Toaster position='top-right' />
    </div>
  );
}

export default App;

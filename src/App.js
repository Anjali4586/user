import { useState } from 'react';
import './App.css';
import Address from './Components/Address';
import Register from './Components/Register';

function App() {
  
  const [userId, setUserId] = useState(null);
  const handleRegister = (id) => {
    setUserId(id);
};

  return (

    <div className="App">
  
{!userId ? (
                <Register onRegister={handleRegister} />
            ) : (
                <Address userId={userId} />
            )}
    </div>
  );
}

export default App;

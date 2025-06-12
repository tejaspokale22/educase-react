import { useNavigate } from 'react-router-dom'

function App() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleCreateAccountClick = () => {
    navigate('/register');
  };

  return (
    <div className="flex flex-col justify-end w-full max-w-sm p-5 box-border min-h-screen items-end pb-5 mx-auto border border-gray-200">
      <div className="text-left">
        <h1 className="text-3xl font-semibold text-gray-800 mb-2">Welcome to PopX</h1>
        <p className="text-base text-gray-500 mb-8 leading-normal">Lorem ipsum dolor sit amet, <br/>consectetur adipiscing elit,</p>
        <button className="w-full p-3 border-none rounded-lg text-lg font-semibold cursor-pointer mb-4 bg-purple-700 text-white" onClick={handleCreateAccountClick}>Create Account</button>
        <button 
        className="w-full p-3 rounded-lg text-lg font-semibold cursor-pointer bg-purple-200 text-black"
        onClick={handleLoginClick}
        >
        Already Registered? Login</button>
      </div>
    </div>
  )
}

export default App

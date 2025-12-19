import reactLogo from './assets/react.svg'
import dockerLogo from '/docker.svg'
import awsLogo from '/aws.svg'
import './App.css'

function App() {

  return (
    <>
      <div className='card'>
        <img src={reactLogo} className="logo react" alt="React logo" />
        <img src={dockerLogo} className="logo" alt="Docker logo" />
        <img src={awsLogo} className="logo" alt="AWS logo" />
      </div>
      <h1>Ranjanasri I 23bcs148</h1>
    </>
  )
}

export default App

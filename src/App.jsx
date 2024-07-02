import ProfileImage from './Components/Profileimage/ProfileImage'
import ProfileInfo from './Components/Profileinfo/ProfileInfo'
import ProfileContact from './Components/ProfileContact/ProfileContact'
import './App.css'

function App() {
  return(
        <div id='Maincontainer'>
          <ProfileImage></ProfileImage>
          <ProfileInfo></ProfileInfo>
          <ProfileContact></ProfileContact>
        </div>
  )
}

export default App

import Image from '../../assets/images/avatar-jessica.jpeg'
import './ProfileImage.css'

function ProfileImage(){
    return(
        <div id='ImageContaine'>
            <img id='JessicaImage' src={Image} alt="This is Jessica Image" />
        </div>
    )
}

export default ProfileImage
import './ProfileContact.css'
import ContactItems from '../ContactItems/ContactItems'
function ProfileContact(){
    return(

        <div id='ContactDiv'>
            <ContactItems ContactType = 'GitHub'></ContactItems>
            <ContactItems ContactType = 'Frontend Mentor'></ContactItems>
            <ContactItems ContactType = 'LinkedIn'></ContactItems>
            <ContactItems ContactType = 'Twitter'></ContactItems>
            <ContactItems ContactType = 'Instagram'></ContactItems>
        </div>
   
    )
}

export default ProfileContact
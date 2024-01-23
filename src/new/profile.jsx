import ChangeUserName from './changeusername'

const Profile = (props) => {
    return (
        <div>
            <h1>The user is: {props.username}</h1>
            <ChangeUserName setUserName={props.setUserName} />
        </div>
    )
}

export default Profile

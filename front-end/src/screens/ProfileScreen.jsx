import React from 'react'
import contactData from '../dummyData/contact.json'
import Profile from '../components/ProfileScreenComponents/Profile'

const ProfileScreen = () => {
    return (
        <Profile {...contactData} />
    )
}

export default ProfileScreen

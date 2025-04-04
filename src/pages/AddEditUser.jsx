


import { useState, useContext, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { UserContext } from '../context/UserContext'
import UserForm from '../components/UserForm'

const AddEditUser = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { users, addUser, editUser, getUser } = useContext(UserContext)
  const [user, setUser] = useState({
    name: '',
    email: '',
    type: '',
    password: ''
  })

  useEffect(() => {
    if (id) {
      const fetchUser = async () => {
        const existingUser = await getUser(id)
        if (existingUser) {
          setUser(existingUser)
        }
      }
      fetchUser()
    }
  }, [id, getUser])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      editUser(id, user)
    } else {
      addUser(user)
    }
    navigate('/users')
  }

  return (
    <div className="user-form-page">
      <h1>{id ? 'Edit' : 'Add'} User</h1>
      <UserForm 
        user={user} 
        setUser={setUser} 
        onSubmit={handleSubmit} 
      />
    </div>
  )
}

export default AddEditUser
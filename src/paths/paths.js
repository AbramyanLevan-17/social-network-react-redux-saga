import Home from '../components/Home/Home'
import Auth from '../components/Auth/Auth'
import Profile from '../components/Profile/Profile'
import SingUp from '../components/SignUp/SignUp'
import PostID from '../components/Post/PostID'


export const paths = [
  {
    id: 1,
    path: '/auth',
    component: Auth,
  },
  {
    id: 2,
    path: '/signup',
    component: SingUp,
  },
  {
    id: 3,
    path: '/profile',
    component: Profile,
  },
  {
    id: 4,
    path: '/posts/:id',
    component: PostID,
  },
  {
    id: 5,
    path: '/',
    component: Home,
  }
 
]

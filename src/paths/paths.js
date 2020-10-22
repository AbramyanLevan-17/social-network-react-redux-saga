import Home from '../components/Home/Home'
import Auth from '../components/Auth/Auth'
import Profile from '../components/Profile/Profile'
import SingUp from '../components/SignUp/SignUp'



export const paths = [
  {
    id:1,
    path:'/auth',
    component: Auth,
  },
  {
    id:2,
    path:'/signup',
    component: SingUp,
  },
  {
    id:3,
    path:'/profile',
    component: Profile,
  },
  {
    id:4,
    path:'/',
    component: Home,
  },
]


import SearchInput from './SearchInput'
import Conversations from './Conversations'
import LogoutButton from './LogoutButton'

const Sidebar = () => {
  return (
    <div className='border-r border-purple-500 p-4 flex flex-col'>
        <SearchInput/>
        <div className='divider px-3 divider-primary'></div>
        <Conversations/>
        <LogoutButton/>
    </div>
  )
}

export default Sidebar
import ChatBox from '../../modules/ChatBox/ChatBox'
import UserList from '../../modules/UserList/UserList'
import GamePage from '../GamePage/GamePage'
const MainPage = () => {
  return (
    <>
        <UserList />
        <ChatBox />
        <GamePage />
    </>
  )
}

export default MainPage
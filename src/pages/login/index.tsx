import { useAppDispatch, useAppSelector } from '@/store'
import {  getUserName ,setUserName} from '@/store/module/userInfo'

const Login = () =>{
    const dispatch = useAppDispatch();
    const userName = useAppSelector(getUserName)

    const handleChangeUser = () => {
        dispatch(setUserName('kKsbd'))
    }
    return <div>

        <div>你好 {userName} 登陆</div>

        <button onClick={handleChangeUser}>切换登陆</button>

    </div>
}


export default Login
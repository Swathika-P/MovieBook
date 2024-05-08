import { useSelector } from "react-redux";
import { Navigate} from 'react-router-dom';

const ProtectedRoutes = ({children})=>{
    // const navigate = useNavigate();
    let isLogin = useSelector((state) => state.isLogin);
    isLogin = isLogin || localStorage.getItem("userId");
    
    return(
       
        isLogin ? children : <Navigate to="/login"/>
    
    )
}

export default ProtectedRoutes
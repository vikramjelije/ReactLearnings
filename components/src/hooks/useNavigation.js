import NavigationContext from "../context/navigation";
import  { useContext } from 'react';

function useNavigationContext() {
    return useContext(NavigationContext);
}

export default useNavigationContext;
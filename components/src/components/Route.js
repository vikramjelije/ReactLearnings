import useNavigationContext from "../hooks/useNavigation";

function Route({path, children}) {
    const { currentPath } = useNavigationContext();
    if(currentPath === path) {
        return children;
    }

    return null;
}

export default Route;
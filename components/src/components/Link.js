import classNames from "classnames";
import useNavigationContext from "../hooks/useNavigation";

function Link({to, children, className, activeClassName}) {
    const { currentPath, navigate } = useNavigationContext();
    const classes = classNames('text-blue-500', className, currentPath === to && activeClassName);
    const handleClick = (event) => {
        if(event.metaKey || event.ctrKey) {
            return;
        }
        event.preventDefault();
        navigate(to);
    };

    return <a className={classes} href={to} onClick={handleClick}>{children}</a>;
}

export default Link;
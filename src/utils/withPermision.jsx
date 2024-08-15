import { useSelector } from "react-redux";
const withPermision = (Component, permissionsName) => {
    const WithPermision = (props) => {
        const counter = useSelector((state) => state.counter);
        const permissions = useSelector((state) => state.permissions);
        if (!(permissions && permissions[permissionsName])) {
            return <Component {...props} counter={counter.count} />
        } else {
            return <h2>You don't have permissions</h2>

        }

    }

    return WithPermision;

}

export default withPermision;
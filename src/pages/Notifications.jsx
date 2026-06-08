import { useEffect, useState } from "react";
import getTopNotifications from "../login/notification.helper";
import createLog from "../login/login.helper";

const Notifications = () => {
    const [notifications, setNotifications] = useState([]);

    useEffect(() => {
        fetchNotifications();
    }, []);

    const fetchNotifications = async () => {
        try{
            await createLog(
                "frontend",
                "info",
                "component",
                "Started fetching notifications"
            );
            const data = await getTopNotifications();
            setNotifications(data);
            await createLog(
                "frontend",
                "info",
                "component",
                `Fetched ${data.length} notifications`
            );
        }
        catch {
            await createLog(
                "frontend",
                "error",
                "component",
                "Error In fetching the notifications"
            );
        }
    };

    return (
        <div>
            {notifications.map(notification => (
                <div key={notification.ID}>
                    <h3>{notification.Type}</h3>
                    <p>{notification.Message}</p>
                    <small>{notification.Timestamp}</small>
                </div>
            ))}
        </div>
    )
};

export default Notifications;
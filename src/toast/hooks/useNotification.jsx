import { useState } from "react";
import NotificationComponent from "../Notification";

const useNotification = () => {
  const [notification, setNotification] = useState(null);

  const triggerNotification = (props) => {
    setNotification(props);
    setTimeout(() => {
      setNotification(null);
    }, props.duration ?? "1000");
  };

  const Notification = notification ? (
    <div>
      <NotificationComponent {...notification} />
    </div>
  ) : null;

  return { Notification, triggerNotification };
};

export default useNotification;

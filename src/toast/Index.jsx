import useNotification from "./hooks/useNotification";

const Index = () => {
  const { Notification, triggerNotification } = useNotification();
  return (
    <div>
      <button
        onClick={() =>
          triggerNotification({
            message: "Hi",
            variant: "success",
            duration: "900",
          })
        }
      >
        show toast
      </button>
      {Notification}
    </div>
  );
};

export default Index;

import { useEffect, useState } from "react";
import { onMessage } from "./firebase";
import { messaging } from "./firebase";

export const NotificationListener = () => {
  const [payload, setPayload] = useState(null);

  useEffect(() => {
    const handleIncomingMessage = (payload) => {
      setPayload(payload);

      // Show a browser notification when the app is in the foreground
      if (Notification.permission === "granted") {
        new Notification(payload.notification.title, {
          body: payload.notification.body,
          //icon: "/icon.png", // Custom icon for the notification
        });
      }
    };

    // Listen for incoming messages (when the app is in the foreground)
    onMessage(messaging, handleIncomingMessage);
  }, []);

  return (
    <div>
      <div>Title: {payload && payload.notification.title}</div>
      <div>Body: {payload && payload.notification.body}</div>
    </div>
  );
};

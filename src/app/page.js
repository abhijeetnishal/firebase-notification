"use client";

import RequestNotificationPermission from "../utils/RequestNotificationPermission";
import { NotificationListener } from "../utils/NotificationListener";

export default function Home() {
  return (
    <div>
      <h1>Welcome to Firebase Notification App</h1>
      <RequestNotificationPermission />
      <NotificationListener />
    </div>
  );
}

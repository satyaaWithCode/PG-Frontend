import { useEffect } from "react";
import SockJS from "sockjs-client/dist/sockjs.min.js";
import Stomp from "stompjs";
import { toast } from "react-toastify";

const WEBSOCKET_URL = "https://pg-backend-87c6.onrender.com/ws";

export default function useWebSocket() {
  useEffect(() => {
    const socket = new SockJS(WEBSOCKET_URL);
    const stompClient = Stomp.over(socket);

    stompClient.debug = (str) => {
      console.log("STOMP DEBUG:", str);
    };

    stompClient.connect({}, () => {
      console.log(" WebSocket connected!");

      stompClient.subscribe("/topic/students", (message) => {
        console.log(" Received:", message.body);
        toast.info(message.body);
      });
    });

    return () => {
      if (stompClient && stompClient.connected) {
        stompClient.disconnect(() => {
          console.log("WebSocket disconnected");
        });
      }
    };
  }, []);
}

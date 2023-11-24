import { ENV } from "@src/utils/env";
import { io } from "socket.io-client";

export const socket = io(ENV.API_SERVER);

export type SocketListener = (data: string) => void;

const listeners: {
  [event: string]: SocketListener[];
} = {};

export const addSocketListener = (event: string, listener: SocketListener) => {
  if (listeners[event]) {
    listeners[event].push(listener);
    return;
  }

  socket.on(event, data => {
    listeners[event].forEach(e => e(data));
  })
  listeners[event] = [listener];
};

export const removeSocketListener = (event: string, listener: SocketListener) => {
  if (listeners[event])
    listeners[event] = listeners[event].filter(e => e !== listener);
};

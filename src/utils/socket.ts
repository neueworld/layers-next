import { io } from 'socket.io-client';

import { APP_URL } from './url';

// export const socket = io(APP_URL);
const socket = io(APP_URL as string, {
  //   autoConnect: false,
  withCredentials: true,
});

export default socket;

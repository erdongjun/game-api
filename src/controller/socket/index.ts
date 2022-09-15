import { Server } from 'socket.io'
import { GAME_TYPE } from '../../config/game-config'

const ROOM = 'game'

const onLineUsers = {}
const onLineCount = 0

export const initSocket = (httpServer: any) => {
  const io = new Server(httpServer, {
    cors: {
      origin: '*',
      credentials: false,
    },
    path:'/socket/game'
  })
  io.on('connection', (socket: any) => {
    // socket.emit('data',GAME_TYPE[1001])
    socket.join(ROOM)
    socket.on('data', (data: any) => {
      console.log('data',data)
      socket.to(ROOM).emit('data', {
        ...GAME_TYPE[data.type],
        ...data
      })
    })
  })
  io.on('data', data => {
    console.log('data',data)
  })
}


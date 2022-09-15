
type GameTypes = {
  [key: number]: {
    type: number
    text: string
  }
}

export const GAME_TYPE: GameTypes = {
  // 100x 游戏状态
  // 200x 游戏动作
  // 300x 榜单动作
  1001: {
    type: 1001,
    text: '开始游戏',
  },
  1002: {
    type: 1002,
    text: '暂停游戏',
  },
  1003: {
    type: 1003,
    text: '退出游戏',
  },
  1004: {
    type: 1004,
    text: '重新开始游戏',
  },
  1005: {
    type: 1005,
    text: '复活',
  },
  1006: {
    type: 1006,
    text: '你被击败',
  },
  1007: {
    type: 1007,
    text: '击杀成功',
  },
  1008: {
    type: 1008,
    text: '上一步',
  },
  1009: {
    type: 1009,
    text: '加入游戏',
  },
  1010: {
    type: 1010,
    text: '退出游戏',
  },
  2001: {
    type: 2001,
    text: '左转',
  },
  2002: {
    type: 2002,
    text: '右转',
  },
  2003: {
    type: 2003,
    text: '向上走',
  },
  2004: {
    type: 2004,
    text: '向下走',
  },
  2005: {
    type: 2005,
    text: '向左走',
  },
  2006: {
    type: 2006,
    text: '向右走',
  },
  3001: {
    type: 3001,
    text: '上榜了',
  },
  3002: {
    type: 3002,
    text: '继续加油',
  },
  3003: {
    type: 3003,
    text: '恭喜成为',
  },
  3004: {
    type: 3004,
    text: '加油',
  },
}
import { markRoomAsVisited } from './house'
import { highlightCaseWhenAddItem } from './inventory'

const middlewares = [
  markRoomAsVisited,
  highlightCaseWhenAddItem,
]

export default middlewares

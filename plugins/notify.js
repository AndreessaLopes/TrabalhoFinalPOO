// Array of request routes which response should not be diplayed as a notification
let preventNotification = [
]

export default {
  sendSuccess (messages, route) {
    if (!preventNotification.includes(route)) {
    }
  },
  sendError (messages) {
  }
}
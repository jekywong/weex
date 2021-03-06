/**
 * @fileOverview
 * Weex instance constructor & definition
 */

import { requireModule } from '../../../default/app/register'
import { updateActions, callTasks } from './ctrl'
import App from '../../../default/app/instance'

/**
 * @deprecated
 */
App.prototype.requireModule = function (name) {
  return requireModule(this, name)
}

/**
 * @deprecated
 */
App.prototype.updateActions = function () {
  updateActions(this)
}

/**
 * @deprecated
 */
App.prototype.callTasks = function (tasks) {
  callTasks(this, tasks)
}

export default App

import * as Registry from '../Registry'

export function actionToggle() {
  console.log('Toggling...');
  return {
    type: Registry.ACTION_TOGGLE
  }
}

export function actionSetToggle(toggled) {
  return {
    type: Registry.ACTION_SET_TOGGLE,
    payload: toggled
  }
}

export function actionSetRoute(route) {
  return {
    type: Registry.ACTION_SET_ROUTE,
    payload: route
  }
}

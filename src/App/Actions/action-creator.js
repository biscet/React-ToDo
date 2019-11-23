import {
  ADD_TASK,
  REMOVE_TASK,
  COMPLETE_TASK,
  REVERSE_TASK
} from "../constants.js"

export const addTask = (id, text, isCompleted) => ({
  type: ADD_TASK,
  id,
  text,
  isCompleted
})

export const removeTask = id => ({
  type: REMOVE_TASK,
  id
})

export const completeTask = id => ({
  type: COMPLETE_TASK,
  id
})

export const reverseTask = () => ({
  type: REVERSE_TASK
})

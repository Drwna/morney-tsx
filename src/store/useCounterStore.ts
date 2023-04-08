import { defineStore } from 'pinia'

interface CounterState {
  count: number
}

interface Actions {
  increment(): void
  decrement(): void
}

export const useCounterStore = defineStore<'counter', CounterState, {}, Actions>('counter', {
  state: () => ({ count: 0 }),
  actions: {
    increment() {
      this.count++
    },
    decrement() {
      this.count--
    },
  },
})

import type { PropType } from 'vue'
import { computed, defineComponent } from 'vue'

export const NumberPad = defineComponent({
  props: {
    modelValue: {
      type: String as PropType<string>,
    },
    onSubmit: {
      type: Function as PropType<() => void>,
    },
  },
  emits: ['update:modelValue', 'submit'],
  setup: (props, { emit }) => {
    const number = computed({
      get: () => props.modelValue || '0',
      set: value => emit('update:modelValue', value),
    })
    const inputContent = (e: MouseEvent) => {
      const button = e.target as HTMLButtonElement
      const content = button.textContent!
      if (number.value.length >= 16)
        return
      if (number.value.includes('.') && content === '.')
        return
      if (number.value === '0')
        number.value = content === '.' ? '0.' : content
      else
        number.value += content
    }
    const clear = () => number.value = '0'
    const remove = () => {
      if (number.value.length === 1)
        number.value = '0'
      else
        number.value = number.value.slice(0, -1)
    }
    const ok = () => {
      emit('submit', number.value)
      clear()
    }
    return () => (
      <div>
        <input class="w-full bg-white outline-none px-3 py-2 text-4xl text-right font-mono"
          readonly value={number.value} />
        <div class="grid grid-cols-4 grid-rows-4">
          <button onClick={inputContent} class="h-16 bg-[#f2f2f2]">1</button>
          <button onClick={inputContent} class="h-16 bg-[#e8e8e8]">2</button>
          <button onClick={inputContent} class="h-16 bg-[#dedede]">3</button>
          <button onClick={remove} class="h-16 bg-[#d3d3d3]">删除</button>
          <button onClick={inputContent} class="h-16 bg-[#e8e8e8]">4</button>
          <button onClick={inputContent} class="h-16 bg-[#dedede]">5</button>
          <button onClick={inputContent} class="h-16 bg-[#d3d3d3]">6</button>
          <button onClick={clear} class="h-16  bg-[#c9c9c9]">清空</button>
          <button onClick={inputContent} class="h-16 bg-[#dedede]">7</button>
          <button onClick={inputContent} class="h-16 bg-[#d3d3d3]">8</button>
          <button onClick={inputContent} class="h-16 bg-[#c9c9c9]">9</button>
          <button onClick={ok} class="h-32 row-span-2 bg-[#b5b5b5]">OK</button>
          <button onClick={inputContent} class="h-16 col-span-2 bg-[#c9c9c9]">0</button>
          <button onClick={inputContent} class="h-16 bg-[#bfbfbf]">.</button>
        </div>
      </div>
    )
  },
})

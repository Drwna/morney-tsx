import type { PropType } from 'vue'
import { computed, defineComponent } from 'vue'

export const Tags = defineComponent({
  props: {
    tagSource: {
      type: Array as PropType<string[]>,
      required: true,
    },
    selected: {
      type: Array as PropType<string[]>,
      default: () => [],
    },
  },
  emits: ['update:selected'],
  setup: (props, context) => {
    const selectedTags = computed({
      get() { return props.selected },
      set(value) { context.emit('update:selected', value) },
    })
    const toggle = (tag: string) => {
      if (selectedTags.value.includes(tag)) {
        const index = selectedTags.value.indexOf(tag)
        selectedTags.value.splice(index, 1)
      }
      else {
        selectedTags.value.push(tag)
      }
    }
    return () => (
      <div class="h-full mx-4 flex flex-col-reverse">
        <div>
          <button class="my-2 underline text-[#999999] text-sm">新增标签</button>
        </div>
        <ul class="flex flex-1 overflow-auto gap-3 my-2 text-sm flex-wrap content-start">
          {
            props.tagSource.map((tag) => {
              return (
                <li onClick={() => toggle(tag)} class={
                  selectedTags.value.includes(tag)
                    ? 'h-6 leading-6 rounded-full px-5 text-[#f5f5f5] bg-[#737373]'
                    : 'h-6 leading-6 rounded-full px-5 bg-[#d9d9d9]'
                }>{tag}</li>
              )
            })
          }
        </ul>
      </div>
    )
  },
})

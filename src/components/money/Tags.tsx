import type { PropType } from 'vue'
import { computed, defineComponent } from 'vue'
import { useRecordStore } from '@/store/useRecordStore'

export const Tags = defineComponent({
  props: {
    tagSource: {
      type: Array as PropType<Tag[]>,
      required: true,
    },
    selected: {
      type: Array as PropType<Tag[]>,
      default: () => [],
    },
  },
  emits: ['update:selected'],
  setup: (props, context) => {
    const selectedTags = computed({
      get() { return props.selected },
      set(value) { context.emit('update:selected', value) },
    })
    const isSelected = (tag: Tag) => {
      for (const item of selectedTags.value) {
        if (item.id === tag.id)
          return true
      }
      return false
    }
    const toggle = (tag: Tag) => {
      if (isSelected(tag)) {
        const index = selectedTags.value.findIndex(item => item.id === tag.id)
        selectedTags.value.splice(index, 1)
      }
      else {
        selectedTags.value.push(tag)
      }
    }
    const recordStore = useRecordStore()
    const createTag = () => {
      const name = window.prompt('请输入标签名')
      recordStore.createTag(name)
    }
    return () => (
      <div class="h-full mx-4 flex flex-col-reverse">
        <div>
          <button onClick={createTag} class="my-2 underline text-[#999999] text-sm">新增标签</button>
        </div>
        <ul class="flex flex-1 overflow-auto gap-3 my-2 text-sm flex-wrap content-start">
          {
            props.tagSource.map((tag) => {
              return (
                <li onClick={() => toggle(tag)} class={
                  isSelected(tag)
                    ? 'h-6 leading-6 rounded-full px-5 text-[#f5f5f5] bg-[#737373]'
                    : 'h-6 leading-6 rounded-full px-5 bg-[#d9d9d9]'
                }>{tag.name}</li>
              )
            })
          }
        </ul>
      </div>
    )
  },
})

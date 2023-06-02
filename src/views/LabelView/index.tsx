import type { PropType } from 'vue'
import { defineComponent } from 'vue'
import { RouterLink } from 'vue-router'
import { Icon } from '@/components/icons/Icon'
import { MButton } from '@/components/MButton'
import { useRecordStore } from '@/store/useRecordStore'

const LabelView = defineComponent({
  props: {
    name: {
      type: String as PropType<string>,
    },
  },
  setup: () => {
    const recordStore = useRecordStore()
    const labels = recordStore.tagList
    const createTag = () => {
      const name = window.prompt('请输入标签名')
      name && recordStore.createTag(name)
    }
    return () => (
      <div class="">
        <ul class="px-4 bg-white">
          {
            labels.map(label =>
              <li class="flex items-center min-h-[44px] text-base last:border-0 border-b-2 border-solid border-[#e6e6e6]">
                <RouterLink to={`/label/edit/${label.id}`} class="flex-1 min-h-[44px] flex items-center">
                  {label.name}
                </RouterLink>
                <Icon name="right" size={16} class="text-[#333]" />
              </li>,
            )
          }
        </ul>
        <div class="mt-8 text-center">
          <MButton onClick={createTag}> 新建标签 </MButton>
        </div>
      </div>
    )
  },
})

export default LabelView

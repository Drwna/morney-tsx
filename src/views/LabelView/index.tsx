import type { PropType } from 'vue'
import { defineComponent } from 'vue'
import { RouterLink } from 'vue-router'
import { Icon } from '@/components/icons/Icon'

const LabelView = defineComponent({
  props: {
    name: {
      type: String as PropType<string>,
    },
  },
  setup: (props, context) => {
    const labels = [
      { id: 1, name: '衣' },
      { id: 2, name: '食' },
      { id: 3, name: '住' },
      { id: 4, name: '行' },
    ]
    return () => (
      <div class="">
        {/* <RouterLink to={'/label/edit/1'}>编辑</RouterLink>
        <button>新增标签</button> */}
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
          <button class="bg-[#767676] h-[40px] text-white rounded-md px-4">新建标签</button>
        </div>
      </div>
    )
  },
})

export default LabelView

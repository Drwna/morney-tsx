import type { PropType } from 'vue'
import { defineComponent, ref } from 'vue'

import { useRoute } from 'vue-router'
import { Icon } from '@/components/icons/Icon'
import { FormItem } from '@/components/money/FormItem'
import { MButton } from '@/components/MButton'

export const LabelEditView = defineComponent({
  props: {
    name: {
      type: String as PropType<string>,
    },
  },
  setup: (props, context) => {
    const router = useRoute()
    const { id } = router.params
    console.log(id)
    const value = ref(id)
    const deleteLabel = () => {
      const flag = window.confirm('确定删除标签吗？')
      console.log(flag)
    }
    return () => (
      <div>
        <div class="flex justify-between px-4 py-3 bg-white">
          <Icon name="left" class="text-[#333]" />
          <span>编辑标签</span>
          <Icon name="right" class="invisible" />
        </div>
        <FormItem name="标签名" v-model={value.value} class="bg-white mt-2" />
        <div class="mt-8 text-center">
          <MButton onClick={() => deleteLabel()}> 删除标签 </MButton>
        </div>
      </div>
    )
  },
})

export default LabelEditView

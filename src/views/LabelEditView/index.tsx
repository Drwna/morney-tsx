import type { PropType } from 'vue'
import { defineComponent, ref } from 'vue'

import { useRoute, useRouter } from 'vue-router'
import { Icon } from '@/components/icons/Icon'
import { FormItem } from '@/components/money/FormItem'
import { MButton } from '@/components/MButton'

export const LabelEditView = defineComponent({
  props: {
    name: {
      type: String as PropType<string>,
    },
  },
  setup: () => {
    const route = useRoute()
    const router = useRouter()
    const { id } = route.params
    const tagName = ref(id)
    const deleteLabel = () => {
      const flag = window.confirm('确定删除标签吗？')
    }
    return () => (
      <>
        <div class="flex justify-between px-4 py-3 bg-white">
          <Icon onClick={router.back} name="left" class="text-[#333]" />
          <span>编辑标签</span>
          <Icon name="left" class="invisible" />
        </div>
        <FormItem name="标签名" v-model={tagName.value} class="bg-white mt-2" />
        <div class="mt-8 text-center">
          <MButton onClick={deleteLabel}> 删除标签 </MButton>
        </div>
      </>
    )
  },
})

export default LabelEditView

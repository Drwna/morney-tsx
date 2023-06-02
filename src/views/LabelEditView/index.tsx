import { computed, defineComponent, ref } from 'vue'

import { useRoute, useRouter } from 'vue-router'
import { Icon } from '@/components/icons/Icon'
import { FormItem } from '@/components/money/FormItem'
import { MButton } from '@/components/MButton'
import { useRecordStore } from '@/store/useRecordStore'

export const LabelEditView = defineComponent({
  setup: () => {
    const route = useRoute()
    const router = useRouter()
    const { id } = route.params
    const recordStore = useRecordStore()

    const tag = recordStore.findTag(id as string)
    const tagName = ref(tag.name)

    const deleteLabel = () => {
      const flag = window.confirm('确定删除标签吗？')
      if (flag) {
        recordStore.deleteTag(id as string)
        router.back()
      }
    }
    const isShowConfirm = computed(() => {
      return tagName.value !== tag.name
    })
    const submit = () => {
      recordStore.updateTag(id as string, tagName.value)
    }

    return () => (
      <>
        <div class="flex justify-between px-4 py-3 bg-white">
          <Icon onClick={router.back} name="left" class="text-[#333]" />
          <span>编辑标签</span>
          <Icon name="left" class="invisible" />
        </div>
        <FormItem name="标签名" v-model={tagName.value} class="bg-white mt-2" />
        <div class="mt-8 flex justify-around">
          <MButton onClick={deleteLabel} class="bg-red-800"> 删除标签 </MButton>
          { isShowConfirm.value && <MButton onClick={submit}> 确认修改 </MButton> }
        </div>
      </>
    )
  },
})

export default LabelEditView

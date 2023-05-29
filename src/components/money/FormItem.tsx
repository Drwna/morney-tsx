import type { PropType } from 'vue'
import { defineComponent } from 'vue'
import { Icon } from '@/components/icons/Icon'

export const FormItem = defineComponent({
  props: {
    name: {
      type: String as PropType<string>,
    },
    modelValue: {
      type: String as PropType<string>,
    },
  },
  setup: (props, context) => {
    const onInput = (e: Event) => {
      const target = e.target as HTMLInputElement
      context.emit('update:modelValue', target.value)
    }
    const clear = () => {
      context.emit('update:modelValue', '')
    }
    return () => (
      <label class="flex items-center px-4 text-sm bg-[#f5f5f5]">
        <span class="pr-4 ">{props.name}</span>
        <input class="h-10 flex-1 outline-none bg-transparent" type="text"
          value={props.modelValue}
          onInput={onInput}
          placeholder='输入备注信息' />
        {
          (props.modelValue && (props.modelValue.length > 0))
            ? <Icon onClick={clear} name="clear" size="18px" class="text-[#C0C4CC] ml-2" />
            : null
        }
      </label>
    )
  },
})

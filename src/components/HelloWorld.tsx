import type { PropType } from 'vue'
import { defineComponent, ref } from 'vue'

export const HelloWorld = defineComponent({
  props: {
    msg: {
      type: String as PropType<string>,
    },
  },
  setup: (props, context) => {
    const count = ref(0)
    return () => (
      <div>
        <h1>{props.msg}</h1>
        <div className="card">
          <button type="button" onClick={() => count.value++}>count is {count.value}</button>
          <p>
            Edit
            <code>components/HelloWorld.vue</code> to test HMR
          </p>
        </div>
      </div>
    )
  },
})

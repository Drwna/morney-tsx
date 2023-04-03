import { defineComponent } from 'vue'
import { HelloWorld } from '@/components/helloWorld/HelloWorld'

export default defineComponent({
  setup: () => {
    return () => (
      <div class="page">
        <HelloWorld />
      </div>
    )
  },
})

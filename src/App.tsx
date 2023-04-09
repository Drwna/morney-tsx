import { defineComponent } from 'vue'
import { RouterView } from 'vue-router'
import { MLayout } from './components/layout/index'

export default defineComponent({
  setup: () => {
    return () => (
      <div class="page">
        <MLayout>
          <RouterView />
        </MLayout>
      </div>
    )
  },
})

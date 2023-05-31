import { defineStore } from 'pinia'
import clone from '@/util/clone'

interface State {
  recordList: RecordItem[]
  tagList: Tag[]
  currentTag?: Tag
}

const defaultTagList = [
  { id: 'x1xx', name: '买衣服' },
  { id: 'x2xx', name: '吃饭' },
  { id: 'x3xx', name: '住宿' },
  { id: 'x4xx', name: '出行' },
]

export const useRecordStore = defineStore('record', {
  state: (): State => ({
    recordList: [],
    tagList: [...defaultTagList],
    currentTag: undefined,
  }),
  actions: {
    createTag(name: string | undefined | null) {
      if (name === null || name === undefined)
        return
      if (name.trim() === '')
        return window.alert('标签名不能为空')
      const tag = {
        id: `${Math.random().toString(36).slice(2, 8)}`,
        name,
      }
      // 判断name是否重复
      const hasName = this.tagList.filter(item => item.name === name).length > 0
      if (hasName)
        return window.alert('标签名重复了')
      this.tagList.push(tag)
    },
    createRecord(record: RecordItem) {
      const newRecodItem = clone(record)
      if (parseFloat(newRecodItem.amount) <= 0)
        return window.alert('金额不能为0')
      if (newRecodItem.tags.length === 0)
        return window.alert('请至少选择一个标签')
      newRecodItem.createdAt = new Date().toISOString()
      this.recordList.push(newRecodItem)
      window.alert('保存成功')
    },
  },
  persist: {
    key: 'tally_app_state',
    storage: window.localStorage,
    paths: ['recordList', 'tagList'],
  },
})

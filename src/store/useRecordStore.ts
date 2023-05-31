import { defineStore } from 'pinia'

interface Tag {
  id: string
  name: string
}

interface RecordItem {
  tags: Tag[]
  notes: string
  type: string
  amount: number
  createdAt?: string
}

interface State {
  recordList: RecordItem[]
  tagList: Tag[]
  currentTag?: Tag
}

export const useRecordStore = defineStore('record', {
  state: (): State => ({
    recordList: [],
    tagList: [],
    currentTag: undefined,
  }),
  actions: {
    fetchRecordList() {
      this.recordList = JSON.parse(window.localStorage.getItem('recordList') || '[]')
    },
    fetchTagList() {
      this.tagList = JSON.parse(window.localStorage.getItem('tagList') || '[]')
    },
  },
  persist: {
    key: 'record',
    storage: window.localStorage,
    paths: ['recordList', 'tagList'],
  },
})

interface Tag {
  id: string
  name: string
}

interface RecordItem {
  tags: Tag[]
  notes: string
  type: string
  amount: string
  createdAt?: string
}

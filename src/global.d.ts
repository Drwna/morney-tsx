interface Tag {
  id: string
  name: string
}

interface RecordItem {
  tags: Tag[]
  notes: string
  type: TransactionType
  amount: string
  createdAt?: string
}

type TransactionType = 'income' | 'expense'

// Firebase
import { firestore } from 'firebase-admin'

export const itemsResolver = (root, args) => firestore()
  .collection('items')
  .get()
  .then(querySnapshot => {
    const items = []
    querySnapshot.forEach((document) => {
      items.push({ id: document.id, ...document.data() })
    })
    return items
  })
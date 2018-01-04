import factory from './lib/fetch-graphql'
const request = factory('http://localhost:5000/graphql-datastore/us-central1/api/graphql')
const query = `
  {
    items {
      id,
      title,
      createdAt,
    }
  }
  `
const renderItems = (items: { id: string, title: string, content: string }[]) => {
  const body = document.querySelector('body') as HTMLBodyElement
  const ul = document.createElement('ul')
  const li = document.createElement('li')
  items.forEach(({ id, title }) => {
    li.setAttribute('id', id)
    li.textContent = title
    ul.appendChild(li)
  })
  body.appendChild(ul)
}
request(query)
  .then(({ items }) => renderItems(items))
import 'isomorphic-fetch'

const method = 'POST'
const headers = new Headers()
headers.append('content-type', 'application/json')
const body = ''
const defaultOptions = { method, headers, body }

export default function factory(url: string) {
  return function GraphqlFetch(
    query: string,
    variables = {},
    options = defaultOptions,
  ) {
    const _options = { ...defaultOptions, ...options }
    _options.body = JSON.stringify({ query, variables })
    const key = _options.body
    return fetch(url, _options).then(res => res.json()).then(({ data }) => data)
  }
}
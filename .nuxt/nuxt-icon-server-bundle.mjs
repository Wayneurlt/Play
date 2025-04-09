function createRemoteCollection(fetchEndpoint) {
  let _cache
  return async () => {
    if (_cache)
      return _cache
    const res = await fetch(fetchEndpoint).then(r => r.json())
    _cache = res
    return res
  }
}

export const collections = {
  'flat-color-icons': () => import('@iconify-json/flat-color-icons/icons.json', { with: { type: 'json' } }).then(m => m.default),
  'heroicons': () => import('@iconify-json/heroicons/icons.json', { with: { type: 'json' } }).then(m => m.default),
  'iconamoon': () => import('@iconify-json/iconamoon/icons.json', { with: { type: 'json' } }).then(m => m.default),
}
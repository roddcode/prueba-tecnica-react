export const fetchUsers = async ({ pageParam = 1 }: { pageParam?: number }) => {
  return await fetch(
    `https://randomuser.me/api?results=10&seed=roddcode&page=${pageParam}`
  )
    .then(async (res) => {
      if (!res.ok) throw new Error('Error en la peticion')
      return await res.json()
    })
    .then(res => {
      const currentPage = Number(res.info.page)
      const nextCursor = currentPage > 2 ? undefined : currentPage + 1
      return {
        users: res.results,
        nextCursor
      }
    })
}

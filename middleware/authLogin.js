export default function({ redirect, store }) {
    const isAuthenticated = store.state.token ? true : false
    if (isAuthenticated== true) {
      redirect('/admin/lead')
    }
}
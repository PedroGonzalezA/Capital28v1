export default function({ redirect, store }) {
    const isAuthenticated = store.state.user.email ? true : false
    if (isAuthenticated== true) {
      redirect('/admin/lead')
    }
  }
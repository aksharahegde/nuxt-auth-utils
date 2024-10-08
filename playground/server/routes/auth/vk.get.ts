export default defineOAuthVKEventHandler({
  async onSuccess(event, { user }) {
    await setUserSession(event, {
      user: {
        vk: user.user.email,
      },
      loggedInAt: Date.now(),
    })

    return sendRedirect(event, '/')
  },
})

export default defineOAuthXSUAAEventHandler({
  async onSuccess(event, { user }) {
    await setUserSession(event, {
      user: {
        xsuaa: user.email,
      },
      loggedInAt: Date.now(),
    })

    return sendRedirect(event, '/')
  },
})

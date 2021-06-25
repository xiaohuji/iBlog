const getters = {
  loginCode: ({ login }) => login.code,
  loginMessage: ({ login }) => login.message,

  registerCode: ({ register }) => register.regcode,
  registerMessage: ({ register }) => register.regmessage,

  contentList: ({ contentList }) => contentList.contentList,
  headline: ({ headline }) => headline.headline,

  article: ({ article }) => article,

  tags: ({ tags }) => tags.tagSet,

  tagContentList: ({ tagContentList }) => tagContentList.tagContentList,
  tagContentListId: ({ tagContentList }) => tagContentList.tagId
}
export default getters

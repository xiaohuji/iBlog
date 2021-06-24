const getters = {
  loginCode: ({ login }) => login.code,
  loginMessage: ({ login }) => login.message,

  contentList: ({ contentList }) => contentList.contentList,
  headline: ({ headline }) => headline.headline,

  article: ({ article }) => article,

  tags: ({ tags }) => tags.tagSet,

  tagContentList: ({ tagContentList }) => tagContentList.tagContentList,
  tagContentListId: ({ tagContentList }) => tagContentList.tagId,

  commentsList: ({ commentsList }) => commentsList.commentsList
}
export default getters

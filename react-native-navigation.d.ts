declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {
      Landing: {isFilterDirty: boolean};
      PostView: {postTitle: string};
    }
  }
}

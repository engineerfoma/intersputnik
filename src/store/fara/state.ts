interface InitialState {
  breadcrumb: {
    show: boolean,
    name: string,
    url: string
  }
}
// Initial Setting State
export const initialState: InitialState = {
  breadcrumb: {
    show: false,
    name: '',
    url: ''
  }
};
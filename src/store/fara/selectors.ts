// Selectors
interface breadcrumb {
    show: boolean,
    name: string,
    url: string
}
interface InitialState {
    fara: {
        breadcrumb: breadcrumb
    }
}
export const getBreadcrumb = (state: InitialState): breadcrumb => state.fara.breadcrumb;
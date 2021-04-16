import { wrapper } from '../redux/store'
import '../styles/global.css'

const MyApp = ({Component, PageProps}) => (
    <Component { ...PageProps } />
)

export default wrapper.withRedux(MyApp)


import {withRouter} from 'next/router'
import Comp from '../components/comp'
const B=({router})=><Comp>{router.query.id}</Comp>  

export default withRouter(B)
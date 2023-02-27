import './TokenStatus.css'
import Chart from 'react-apexcharts'
const TokenStatus = (props) => {
    return ( 
        <div>
            <Chart
                    options={props.opt.options}
                    series={props.opt.series}
                    type='area'
                    height= '200'
                    width="100%"
                 />
        </div>
     );
}
 
export default TokenStatus;
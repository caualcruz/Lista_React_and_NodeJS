/* eslint-disable react/prop-types */

const TabButton = ({children, onClick}) =>{
    return <li><button onClick={onClick}>{children}</button></li>
}
export default TabButton;
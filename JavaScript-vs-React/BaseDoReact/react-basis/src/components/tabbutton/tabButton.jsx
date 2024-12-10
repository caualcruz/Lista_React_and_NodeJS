/* eslint-disable react/prop-types */

//props.children
const TabButton = ({children, onClick}) =>{
    return <li><button onClick={onClick}>{children}</button></li>
}
export default TabButton;
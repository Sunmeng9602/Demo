import React ,{useContext} from "react";
import {ColorContext} from './Color'
function showArea() {
    const color = useContext(ColorContext)
    return (
        <div style={{color:'blue'}}>
            字体颜色是{color}
        </div>
    )
}
export default showArea
import React from 'react';
import "./SidebarOption.css"

function SidebarOption({ Icon, title }) {
    return (
        <div className="sidebaroption">
            {Icon && <Icon className="sidebaroption__icon" />}  {/*This pass Icon if passed in props */}
          
            {Icon ? 
                <h3>{title}</h3> :
                <h3 className="sidebaroption__channel">
                    <span className="sidebaroption__hash">#</span> {title}
                </h3>
            }
            
        </div>
    )
}

export default SidebarOption

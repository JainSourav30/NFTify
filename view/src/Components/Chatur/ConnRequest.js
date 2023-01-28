import React from "react";

const ConnRequest = ({name, phone, mail}) => {

	return (
    	<div className="w-full ">
            {name}
            {phone}
            {mail}
        
        </div>
    );
}

export default ConnRequest;
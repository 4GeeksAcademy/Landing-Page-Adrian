import React from "react";

const Navbar = () => {
    return (
        <div className="p-5 my-3 bg-body-tertiary rounded-3"> 
			<div className="container-fluid py-5">
				<h1 className="display-5 fw-bold">Custom jumbotron</h1> 
				<p className="col-12 fs-4">Lorem ipsum dolor sit amet consectetur adipiscing elit habitant torquent euismod lacinia taciti maecenas, fermentum nullam inceptos nulla leo et interdum tempus sed felis per risus. Consequat volutpat suscipit id tristique nullam quis suspendisse cras euismod semper non mauris erat, phasellus habitant eleifend varius posuere rutrum dignissim integer imperdiet blandit facilisis hendrerit. Sociosqu nisl quis hac orci nec parturient augue libero suspendisse, nulla purus penatibus sed vel odio litora torquent viverra, tellus sem etiam sodales porta vivamus aliquam dictum.</p> 
				<button className="btn btn-primary btn-lg" type="button">Example button</button> 
			</div> 
		</div>
    );
};

export default Navbar;
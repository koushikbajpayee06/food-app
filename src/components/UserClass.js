import React from "react"

class UserClass extends React.Component{

    constructor(props){
        super(props);
        console.log(props);
    }
    render(){
        const {name, location} = this.props;
        return(
        <div className='user-card'>
            <h1>Name: {name}</h1>
            <h3>Location:{location}</h3>
            <h4>Contact:@Koushikbaju06</h4>
        </div>
        )
    }
}

export default UserClass;
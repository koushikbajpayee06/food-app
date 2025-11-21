import React from "react"

class UserClass extends React.Component{

    constructor(props){
        super(props);
        this.state={

        }
        // console.log(this.props.name + ' Child  constructor is called')
    }

    componentDidMount(){
        // console.log(this.props.name + " Child Component Did mount");
    }

    render(){
        const {name, location} = this.props;
        // console.log(this.props.name + ' Child render is called')

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
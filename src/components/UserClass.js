import React from "react"

class UserClass extends React.Component{

    constructor(props){
        super(props);
        this.state={
            UserInfo:{
                login:"Dummy",
                location:"Default",
            }
        }
        // console.log(this.props.name + ' Child  constructor is called')
    }

    async componentDidMount(){
        // console.log(this.props.name + " Child Component Did mount");
        const data = await fetch("https://api.github.com/users/koushikbajpayee06");
        const json = await data.json();
        // console.log(json);

        this.setState({
            UserInfo: json,
        });

    }

    componentDidUpdate(){
        // console.log("Component Did Update"); 
    }

    componentWillUnmount(){
        // console.log("Component will unmount");
    }

    render(){
        const {login, location, avatar_url} = this.state.UserInfo;
        // console.log(this.props.name + ' Child render is called')

        return(
        <div className='user-card'>
            <img src={avatar_url}></img>
            <h1>Name: {login}</h1>
            <h3>Location:{location}</h3>
            <h4>Contact:@Koushikbaju06</h4>
        </div>
        )
    }
}

export default UserClass;
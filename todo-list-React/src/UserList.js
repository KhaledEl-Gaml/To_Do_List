import React from 'react';
import UserView from './UserView';
import Alert from 'react-bootstrap/Alert';


class UserList extends React.Component{

    constructor(props){
        super(props);
        this.state={
            users:[],
            loading:false
        };
    }
    
    async componentDidMount(){
        this.setState({loading:true});
        setTimeout(async ()=>{
    
        
        let res= await fetch("https://reqres.in/api/users?page=2",{
            method:"GET",
            headers:{
                "content-type":"application/json"
            }
        });
        let resJson = await res.json();
        this.setState({users:resJson.data,loading: false});
    },3000)
    }
    
    render(){ 

        if( this.props.loggedInStatus === "unauthorized" ){
          return (<Alert variant="">
            <Alert.Heading>Unauthorized</Alert.Heading>
            
            
            </Alert>);
        }else{
            return (<div>
                        {/* <h2>Status: { this.props.loggedInStatus }</h2> */}
                        {!this.state.loading ? this.state.users.map((item)=>{
                            return <UserView key={item.id}  user={item} />
                        }) : "Loading..."  }
                     </div>);
        }
        
    }
    }
    
export default UserList;
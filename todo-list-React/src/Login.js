import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class Login extends React.Component {

    constructor(props){
        super(props);
        this.state={
            email:"",
            password:"",
        }
    }

    setInputValue=(e)=>{
        this.setState({[e.target.name]:e.target.value});
    }

    login=async (e)=>{

        e.preventDefault();

        let user = {
            email:this.state.email,
            password:this.state.password
        }
        let res= await fetch("https://reqres.in/api/login",{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(user)
        });
        let resJson = await res.json();
        if(resJson.token){
            this.props.history.push('/users');
            this.props.handleLogin();

        }else{
            alert(resJson.error);
        }
    }

    render() {

        return(
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Control type="email" value={this.state.email} onChange={(e)=>this.setState({email:e.target.value})} name="email" placeholder="Enter email" />
                   
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  
                    <Form.Control type="password" value={this.state.password} onChange={this.setInputValue} name="password" placeholder="Password" />
                </Form.Group>

                <Button variant="success" type="submit" onClick={this.login}>
                    Submit
                </Button>
            </Form>
        );
    }
}

export default Login;
import React, { Component } from 'react'

class Auth extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             controls:{
                 email:{
                     elementType:'input',
                     elementConfig:{
                         type:'email',
                         placeholder:'Mail Address'
                     },
                     value:'',
                     validation:{
                         required:true,
                         isEmail:true
                     },
                     valid:false,
                     touched:false
                 },
                 password:{
                    elementType:'input',
                    elementConfig:{
                        type:'password',
                        placeholder:'Password'
                    },
                    value:'',
                    validation:{
                        required:true,
                        minLength:6
                    },
                    valid:false,
                    touched:false
                }
             }
        }
    }
    
    render() { 
        const formElementsArray= [];
        for(let key in this.state.orderForm){
            formElementsArray.push({
                id:key,
                config:this.state.orderForm[key]
            });
        }
         const form = formElementsArray.map(formElement =>(
            <input
                key = {formElement.id}
                elementType = {formElement.config.elementType}
                    elementConfig = {formElement.config.elementConfig}
                    value = {formElement.config.value}
                    invalid = {!formElement.config.valid}
                    shouldValidate ={formElement.config.validation}
                    touched ={formElement.config.touched}
                    changed = {(event) => this.inputChangedHandler(event,formElement.id)}
            
            />
         ));
        return (
            <div>
                <form>
                    {}
                </form>
            </div>
        )
    }
}

export default Auth

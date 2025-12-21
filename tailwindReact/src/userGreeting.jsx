//conditional rendering using ternary operator
//renders a welcome message if the user is logged in, otherwise prompts to sign up
//props: isLoggedIn (boolean), username (string)

function UserGreeting(props){
    return(props.isLoggedIn 
        ? <h1 className="welcome-msg">Welcome back, {props.username}!</h1>
        : <h1 className="signup-msg">Please sign up.</h1>
    )
    
}

export default UserGreeting;
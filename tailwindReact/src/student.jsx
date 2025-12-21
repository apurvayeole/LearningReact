//props = read only properties that are shared between components.
//        A parent component can send data to a child component using props.
//        Props are immutable inside the child component.
//        We can use prop-types package to set type and default values for props.
//        To install prop-types package use the command: npm install prop-types
//        Here we are creating a Student component that takes name, age and isStudent as props.
//        We are also setting type and default values for these props using prop-types package.
//        In App.jsx we are using the Student component and passing different values for the props.
//        In the third usage of Student component we are not passing any props so the default values will be used.
//        Finally we are exporting the Student component to be used in other files.
//        <component key = value />
import propTypes from 'prop-types';
function Student(props){
    return(
        <div className = "student">
            <p>Name : {props.name}</p>
            <p>Age : {props.age}</p>
            <p>Student: {props.isStudent ? "Yes" : "No"}</p>
        </div>
    );
}

Student.propTypes = {
    name: propTypes.string,
    age: propTypes.number,
    isStudent: propTypes.bool
}
Student.defaultProps = {
    name : "None",
    age: 100,
    isStudent: false
}
export default Student;
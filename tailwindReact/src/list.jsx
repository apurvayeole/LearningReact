//understand props concept


// function List(){
//     // const Items = [{id: 1,name :"Apple", rate: 30},
//     //                {id: 2,name :"Banana", rate: 80},
//     //                {id: 3,name :"Cherry", rate: 63},
//     //                {id: 4,name :"Date", rate: 65},
//     //                {id: 5,name :"Elderberry", rate: 50}, 
//     //                {id: 6,name :"Fig", rate: 40},];
//     //items.sort((a,b) => a.name.localeCompare(b.name)); // Sort by name
//     //items.sort((a,b) => b.rate - a.rate);
//     //const lowRateItems = items.filter(items => items.rate < 50);
//     // const listitems = Items.map(Items => 
//     //                                     <li key = {Items.id}>{Items.name}&nbsp;
//     //                                     {Items.rate}</li>); 

//     // return (<ul>{listitems}</ul>);


    
// }

function List(props){

    const category = props.category;
    const itemList = props.items;

    const listItems = itemList.map(item => 
                                        <li key = {item.id}>{item.name}&nbsp;
                                        {item.rate}</li>);
    return (
    <>
    <h3 className="list-category">{category}</h3>
    <ul className="list-items">{listItems}</ul></>
);
}
List.defaultProps = {
    items: [],
    category: 'Default Category' 
}


export default List;
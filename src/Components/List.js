import React from "react";

const List = (props) => {

    return (
        <>
            <ul>
                {props.person.map((person) => {
                    return(
                        <li type='none'>
                        {console.log(person.name)}
                        <img src={person.image} />
                        <div className="article">
                            <p className="name">{person.name}</p>
                            <p className="age">{person.age}</p>
                        </div>
                    </li>
                    )
                })}


            </ul>
        </>
    )
}
export default List;
import React from "react";

export default function personList() {
    const person=[
      {
        id:1,
         name:"Utsav"
        },
        {
          id:2,
          name:"BCA"
        }]
    const plist=person.map(person=><li>Hello {person.id} Your username is: {person.name}</li>)
  return (
    <div>
      {
       <ul>{plist}</ul> 
      }
    </div>
  )
}
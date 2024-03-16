import { useState } from "react";
import UserProfile from "./UserProfile";
const userDetailsList = [
  {
    uniqueNo: 1,
    imageUrl: "https://assets.ccbp.in/frontend/react-js/esther-howard-img.png",
    name: "Esther Howard",
    role: "Software Developer",
  },
  {
    uniqueNo: 2,
    imageUrl: "https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png",
    name: "Floyd Miles",
    role: "Software Developer",
  },
  {
    uniqueNo: 3,
    imageUrl: "https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png",
    name: "Jacob Jones",
    role: "Software Developer",
  },
  {
    uniqueNo: 4,
    imageUrl: "https://assets.ccbp.in/frontend/react-js/esther-devon-lane.png",
    name: "Devon Lane",
    role: "Software Developer",
  },
];

const AllUsers = () => {
  const [allUsers, setAllUsers] = useState(userDetailsList);
  const [searchInput, setSearchInput] = useState("");

  const deletUser = (uniqNo) => {
    let newUsersList = allUsers.filter(
      (eachuser) => eachuser.uniqueNo !== uniqNo
    );
    setAllUsers(newUsersList);
  };

  const searchUser=(e)=>{
    setSearchInput(e.target.value)
    // console.log(e.target.value.length)
    
    
  }

  const filteredUsers = allUsers.filter(eachuser=> eachuser.name.toLowerCase().includes(searchInput));

  

  
  
  return (
    <div className="container-fluid">
      <div className="row ">
        <div className="col-md-6 mt-5 mb-5">
          <input
            type="search"
            placeholder="Search user here"
            className="form-control"
            value={searchInput}
            onChange={searchUser}
          />
        </div>
        <div className="col-12 d-flex flex-column jutify-content-center align-items-center ">
          {filteredUsers.length > 0 ? 
          (filteredUsers.map((eachItem) => (
            <UserProfile
              key={eachItem.uniqueNo}
              userDetails={eachItem}
              deleteFun={deletUser}
            />
          ))):(<p>Users Not found please try with other name</p>)}
        </div>
      </div>
    </div>
  );
};

export default AllUsers;

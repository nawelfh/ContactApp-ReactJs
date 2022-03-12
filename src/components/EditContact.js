import React from 'react';
import { useSelector } from 'react-redux';
import {Link ,useParams} from 'react-router-dom';
const EditContact = () => {
    const {id} =useParams();
    const contacts = useSelector(state=>state);
    const currentContact = contacts.find(
        contact=> contact.id === parseInt(id)
    );
    
return (
    <div className="container">
   { currentContact ? (
       <>
        <h1 className="display-3 my-5 text-center">
        Edit Contact {id}
        </h1>
        <div className='col-md-6 shadow mx-auto p-5'>
            <form>
               <div className="form-group">
                   <input type="text" placeholder="Name" 
                   className="form-control"/>
               </div> 
               <div className="form-group">
                   <input type="email" placeholder="Email"
                    className="form-control"/>
               </div> 
               <div className="form-group">
                   <input type="number" placeholder="Phone number"
                    className="form-control"/>
               </div> 
               <div className="form-group" align="center">
               <input type="submit"
                      value="Update Contact"
                      className="btn btn-dark"/>
                   <Link to ="/"
                    className="btn btn-danger ml-3"
                    > Cancel
                    </Link>
               </div> 
            </form>
          
        </div>
        </>
   ):(
       <h1 className="display-3 my-5 text-center">Contact with id {id} not exists</h1>
   )}
    </div>

  );
};

export default EditContact;

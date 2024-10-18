import { HiPhone } from "react-icons/hi2";
import { HiUser } from "react-icons/hi2";
import s from './Contact.module.css';
import { useDispatch } from "react-redux";

import { deleteContactThunk } from "../../redux/contactsOps";

const Contact = ({ id, name, number }) => {

const dispatch = useDispatch();

const handleDelete = () => dispatch(deleteContactThunk(id));

  return (
      <div className={s.wrapper}>
          <div className={s.datacontainer}>
              <p><HiUser /> {name}</p>
              <p><HiPhone /> {number}</p>
          </div>
          
          <button className={s.btn} type="submit" onClick={handleDelete}>Delete</button>
    </div>
  )
}

export default Contact

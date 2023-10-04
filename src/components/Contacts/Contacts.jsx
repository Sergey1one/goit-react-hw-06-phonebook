import PropTypes from 'prop-types';
import { Contact, DelBtn } from './Contacts.styled';
import {useDispatch } from 'react-redux';
import { remove } from 'redux/contactSlice';
import { useVisibleContacts } from 'components/hooks/useVisibleContacts';




const Contacts = () => {
    const dispatch = useDispatch();


    
const filteredContacts=useVisibleContacts()
  const deleteContact = id => {

      dispatch(remove(id))
    }

    return (<ul>
       { filteredContacts.map(({id,name,number}) => (
           <Contact key={id} ><p>{name}: {number}</p>
               <DelBtn
                   onClick={()=>deleteContact(id)}
               >Delete</DelBtn>
           </Contact>
    ))}
    </ul>)
}

Contacts.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object.isRequired)
}

export default Contacts
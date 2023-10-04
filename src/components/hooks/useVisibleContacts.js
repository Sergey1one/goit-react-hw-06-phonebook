import { useSelector }from "react-redux";
const { getFilter, getContacts } = require("redux/selectors");

 


export const useVisibleContacts = () => {

    const filter = useSelector(getFilter);
    const contacts = useSelector(getContacts);
    const normalizedFilter = filter.toLowerCase();
    console.log(contacts)
    return contacts.filter(contact=>contact.name.toLowerCase().includes(normalizedFilter))
   
     
  }
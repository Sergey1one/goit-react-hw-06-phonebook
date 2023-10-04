
import { GlobalStyle } from "./Global Styles";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Section from "./Section";
import Contacts from "./Contacts";



import { Box } from "./Box";
import Filter from "./Filter";
import { FormContact } from "./Form/Form";


export function App(){
  
  return (
   
    <Box width='400px' pl='16px'>
       
        <Section title={'Phonebook'}>
                 
        <FormContact 
           
        />
      </Section>
      
       <Section title="Contacts">

        <Filter
          // value={filter} onChange={changeFilter}
        />
          
        <Contacts
          // contacts={getVisibleContacts()}
          // onDeleteContact={deleteContact}
        />
          
        </Section>
        <GlobalStyle/>
<ToastContainer/>
        </Box>
  )
}






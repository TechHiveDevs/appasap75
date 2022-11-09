
import { 
  Edit,
  SimpleForm,
  
required,
TextInput,
ReferenceInput,AutocompleteInput,
} from "react-admin";

// -------------------------------------------------------------

export default function EditLogin(props: any) {
return (
    <Edit>
      <SimpleForm redirect="list">
        <TextInput source="email" variant="outlined" validate={required()}  />
<ReferenceInput label="user" source="userid" reference="user">
        <AutocompleteInput variant="outlined" /* optionText="user"   */ />
      </ReferenceInput>
    

      </SimpleForm>
    </Edit>
  );
}
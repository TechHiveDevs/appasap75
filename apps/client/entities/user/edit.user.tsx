
import { 
  Edit,
  SimpleForm,
  
ReferenceInput,AutocompleteInput,
} from "react-admin";

// -------------------------------------------------------------

export default function EditUser(props: any) {
return (
    <Edit>
      <SimpleForm redirect="list">
        <ReferenceInput label="signup" source="signupid" reference="signup">
        <AutocompleteInput variant="outlined" /* optionText="signup"   */ />
      </ReferenceInput>
    

      </SimpleForm>
    </Edit>
  );
}
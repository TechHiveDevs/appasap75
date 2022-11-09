
import { 
  Create,
  SimpleForm,
  
ReferenceInput,AutocompleteInput,
} from "react-admin";

// ------------------------------------------------

export default function CreateUser(props: any) {
    return (
      <Create>
        <SimpleForm redirect="list">
          <ReferenceInput label="signup" source="signupid" reference="signup">
        <AutocompleteInput variant="outlined" /* optionText="signup"   */ />
      </ReferenceInput>
    

        </SimpleForm>
      </Create>
    );
  }

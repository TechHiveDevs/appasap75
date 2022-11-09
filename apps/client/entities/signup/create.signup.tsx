
import { 
  Create,
  SimpleForm,
  
required,
TextInput,
NumberInput,
BooleanInput,
} from "react-admin";

// ------------------------------------------------

export default function CreateSignup(props: any) {
    return (
      <Create>
        <SimpleForm redirect="list">
          <TextInput source="firstname" variant="outlined" validate={required()}  />
<TextInput source="lastname" variant="outlined" validate={required()}  />
<NumberInput source="phonenumber" variant="outlined" validate={required()} />
<BooleanInput source="gender" variant="outlined" validate={required()} />
<NumberInput source="confirmpassword" variant="outlined"  />

        </SimpleForm>
      </Create>
    );
  }

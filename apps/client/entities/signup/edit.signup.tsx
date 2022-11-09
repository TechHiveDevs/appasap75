
import { 
  Edit,
  SimpleForm,
  
required,
TextInput,
NumberInput,
BooleanInput,
} from "react-admin";

// -------------------------------------------------------------

export default function EditSignup(props: any) {
return (
    <Edit>
      <SimpleForm redirect="list">
        <TextInput source="firstname" variant="outlined" validate={required()}  />
<TextInput source="lastname" variant="outlined" validate={required()}  />
<NumberInput source="phonenumber" variant="outlined" validate={required()} />
<BooleanInput source="gender" variant="outlined" validate={required()} />
<NumberInput source="confirmpassword" variant="outlined"  />

      </SimpleForm>
    </Edit>
  );
}
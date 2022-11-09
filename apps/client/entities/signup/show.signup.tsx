
import { 
  Show,
  SimpleShowLayout,
  
NumberField,
DateField,
TextField,
BooleanField,
} from "react-admin";

// ------------------------------------------------

export default function ShowSignup(props: any) {
return (
    <Show>
      <SimpleShowLayout>
        <NumberField source="id" />
<TextField source="firstname" />
<TextField source="lastname" />
<NumberField source="phonenumber" />
<BooleanField source="gender" />
<NumberField source="confirmpassword" />
<DateField source="createdAt" />

      </SimpleShowLayout>
    </Show>
  );
}
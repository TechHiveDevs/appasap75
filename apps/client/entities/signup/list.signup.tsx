
import {
  List,
  Datagrid,
  
NumberField,
DateField,
TextField,
BooleanField,
  ShowButton,
  EditButton, 
  DeleteButton,
  TextInput
} from "react-admin";
import Actions from "../../react-admin/components/Actions";

// ------------------------------------------------

const filters = [
  <TextInput label="Search" source="q" variant="outlined" />,
];

// ------------------------------------------------

export default function ListSignup(props: any) {
return (
    <List {...props} filters={filters}>
    <Datagrid>
        <NumberField source="id" />
<TextField source="firstname" />
<TextField source="lastname" />
<NumberField source="phonenumber" />
<BooleanField source="gender" />
<NumberField source="confirmpassword" />
<DateField source="createdAt" />
<Actions>
        <ShowButton />
        <EditButton />
        <DeleteButton />
        </Actions>
    </Datagrid>
    </List>
  );
}
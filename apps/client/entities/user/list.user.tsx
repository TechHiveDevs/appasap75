
import {
  List,
  Datagrid,
  
NumberField,
DateField,
TextField,
ReferenceField,
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

export default function ListUser(props: any) {
return (
    <List {...props} filters={filters}>
    <Datagrid>
        <TextField source="id" />
<ReferenceField source="signupid" reference="signup" />
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
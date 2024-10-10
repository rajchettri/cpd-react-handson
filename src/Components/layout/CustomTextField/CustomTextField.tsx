import { TextField } from "@mui/material";

/*Custom text field for employee form */


type CPDTextFieldProps = {
    label: string,
    name: string,
    changeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void
   
}

const CustomTextField = (props: CPDTextFieldProps) => {
    return (
        <TextField
            label={props.label}
            name={props.name}
            onChange={props.changeHandler}
            
            variant={"outlined"} 
            size={"small"}
            margin={"dense"}
            fullWidth
        />
    );
}

export default CustomTextField
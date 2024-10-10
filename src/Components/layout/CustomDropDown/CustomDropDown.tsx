import { MenuItem, TextField } from "@mui/material";

type CPDDropDownProps = {
    label: string,
    name: string,
    changeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void,
    currentValue : number
    placeHolder: string
}

const CustomDropDown = (props: CPDDropDownProps) => {
    return (
        <TextField
            select //converts to a dropdown
            label={props.label}
            name={props.name}
            onChange={props.changeHandler}
            value={props.currentValue}
            placeholder={props.placeHolder}

            variant={"outlined"} //enables special material-ui styling
            size={"small"}
            margin={"dense"}
            fullWidth
            required
        >
            {[...Array(150).keys()].map((index) => (
                        <MenuItem key={index} value={index}>
                            {index}
                        </MenuItem>)
                    )} 
        </TextField>
    );
}

export default CustomDropDown
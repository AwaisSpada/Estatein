import { TextField, InputAdornment, IconButton } from "@mui/material";
import PropTypes from "prop-types";

const CustomTextField = ({
  placeholder = "Enter your text",
  startAdornment = null,
  endAdornment = null,
  ...props
}) => {
  return (
    <TextField
      fullWidth
      placeholder={placeholder}
      variant="outlined"
      slotProps={{
        input: {
          startAdornment: startAdornment && (
            <InputAdornment position="start">{startAdornment}</InputAdornment>
          ),
          endAdornment: endAdornment && (
            <InputAdornment position="end">
              <IconButton>{endAdornment}</IconButton>
            </InputAdornment>
          ),
        },
      }}
      {...props}
    />
  );
};
CustomTextField.propTypes = {
  placeholder: PropTypes.string,
  startAdornment: PropTypes.element,
  endAdornment: PropTypes.element,
};

export default CustomTextField;

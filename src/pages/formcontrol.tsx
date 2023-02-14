import { FormHelperText, Input, InputLabel, TextField } from "@mui/material";
import { FormControl as Form } from '@mui/material';



export default function FormControl() {
  return (
    <div className="w-full min-h-screen h-full">
      <div className="min-h-[80vh] h-full w-full text-black flex justify-center items-center flex-col">
        Form Control Example //
        <div className="flex mt-20 gap-6">
        <Form>
  <InputLabel htmlFor="my-input">Email address</InputLabel>
  <Input id="my-input" aria-describedby="my-helper-text" />
  <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
</Form>
        <TextField id="filled-basic" label="Filled" variant="filled" />
      </div>
      </div>
    </div>
  );
}

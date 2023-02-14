import { FormHelperText, Input, InputLabel, TextField } from "@mui/material";
import { FormControl as Form } from "@mui/material";
import { useForm } from "react-hook-form";

export default function FormControl() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => console.log(data);

  return (
    <div className="w-full min-h-screen h-full">
      <div className="min-h-[80vh] h-full w-full text-black flex justify-center items-center flex-col">
        Form Control Example //
        <div className="flex mt-20 gap-6">
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
            <input
              type="number"
              className="border border-solid border-black"
              {...register("example", { required: true, minLength: 6, })}
            />
            {errors.example && <span>შეავსეთ ველი</span>}
            <input className="border border-solid border-black" {...register("exampleRequired", { required: true })} />
            {errors.exampleRequired && <span>შეავსეთ ველი</span>}

            <button type="submit">submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

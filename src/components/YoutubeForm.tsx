import { useForm } from 'react-hook-form'
import { DevTool } from '@hookform/devtools'


const YoutubeForm = () => {
  const form = useForm<FormValues>()
  const { register, control, handleSubmit, formState } = form
  const {errors} = formState

  type FormValues = {
    username: string,
    email: string,
    channel: string
  }

  const onFormSubmit = (data: FormValues) => {
    console.log("form submitted", data)
  }

  return (
    <div>
      <h1>YouTube Form</h1>
      <form onSubmit={handleSubmit(onFormSubmit)} noValidate>
        <div className="form-control">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            {...register("username", {
             required:  {
               value: true,
               message: "Username is required"
             }
            })}
          />
          <p className="error">{errors.username?.message}</p>
        </div>
        
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            {...register("email", {
              pattern: {
                value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                message: "Invalid email format"
              }
            })}
          />
          <p className="error">{errors.email?.message}</p>
        </div>

        <div className="form-control">
          <label htmlFor="channel">Channel</label>
          <input
            type="text"
            id="channel"
            {...register("channel", {
              required: {
                value: true,
                message: "Channel name is required"
              }
            })} 
          />
          <p className="error">{errors.channel?.message}</p>
        </div>

        <button>Submit</button>
      </form>
      <DevTool control={control} />
    </div>
  )
}

export default YoutubeForm

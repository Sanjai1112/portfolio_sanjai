import React, { useState } from "react";
import { useForm, Resolver, FieldErrors } from "react-hook-form";
// import bcrypt from 'bcrypt';
// import Image from "next/image";

type FormValues = {
  name: string;
  email: string;
  message: String;
};

// const MAGIC_PASSWORD =  bcrypt.hash(process.env.MAGIC_PASSWORD, process.env.MAGIC_PASSWORD);
//Have to include magic password for personnal access.

const Contact = (): JSX.Element => {
  const [sendingMessage, setSendingMessage] = useState<boolean>(false);

  const resolver: Resolver<FormValues> = async (values) => {
    let newValues = {} as FormValues;
    let errors = {} as FieldErrors;

    if (values.name) {
      newValues["name"] = values.name;
    } else {
      errors["name"] = {
        type: "required",
        message: "This is required.",
      };
    }
    if (values.email) {
      newValues["email"] = values.email;
    } else {
      errors["email"] = {
        type: "required",
        message: "This is required.",
      };
    }
    if (values.message) {
      newValues["message"] = values.message;
    } else {
      errors["message"] = {
        type: "required",
        message: "This is required.",
      };
    }
    return {
      values: newValues,
      errors,
    };
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ resolver });

  const onSubmit = handleSubmit(async (data) => {
    setSendingMessage(true);
    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), 8000); //8 seconds to cancel the request if no response is comming within this time.
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        signal: controller.signal,
      });
      const resJson = await response.json();
      if (response.status === 200) {
        alert(`Success: ${resJson.message}`);
      } else {
        alert(`Failed: ${resJson.message}`);
      }
    } catch(err) {
      console.log("Error: ", err);
    } finally {
      setSendingMessage(false);
      clearTimeout(id);
    }
  });

  return (
    <div id='contact' className='contact'>
      <form onSubmit={onSubmit}>
        <input {...register("name")} placeholder='Your Name Please' />
        {errors?.name && <p>{errors.name.message}</p>}
        <input type="email" {...register("email")} placeholder='Your Email Please' />
        {errors?.email && <p>{errors.email.message}</p>}
        <textarea {...register("message")} placeholder='Your Message Please' />
        {errors?.message && <p>{errors.message.message}</p>}
        <input type='submit' disabled={sendingMessage} />
      </form>

      <div>Social Links like LinkedIn, Instagram and twitter.</div>
    </div>
  );
};

export default Contact;

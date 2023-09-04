import React, { useState } from "react";
import { useForm, Resolver, FieldErrors } from "react-hook-form";
import Image from "next/image";
import XTWITTER from '../public/x-twitter.svg';
// import bcrypt from 'bcrypt';

type FormValues = {
  name: string;
  email: string;
  message: String;
};
type ToastValues = {
  type: number;
  message: String;
}
// const MAGIC_PASSWORD =  bcrypt.hash(process.env.MAGIC_PASSWORD, process.env.MAGIC_PASSWORD);
//Have to include magic password for personnal access.

const Contact = (): JSX.Element => {
  const [sendingMessage, setSendingMessage] = useState<boolean>(false);
  const [toastObj, setToastObj] = useState<ToastValues | null>(null);

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
    if (sendingMessage) {
      return;
    }
    setSendingMessage(true);
    setToastObj({type: 3, message: "Sending Mail..."});
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
        setToastObj({type: 1, message: resJson.message});
      } else {
        setToastObj({type: 2, message: resJson.message});
      }
    } catch(err) {
      setToastObj({type: 2, message: String(err)});
    } finally {
      setSendingMessage(false);
      clearTimeout(id);
      setTimeout(() => {
        setToastObj(null);
      }, 2000);
    }
  });

  const getSuccessToast = (message: String): JSX.Element => {
    return (
      <div className="px-4 py-2 text-sm text-white rounded-lg bg-green-400 absolute top-[-50px]" role="alert">
        <span className="font-medium">{message}</span>
      </div>
    )
  }
  const getFailureToast = (message: String): JSX.Element => {
    return (
      <div className="px-4 py-2 text-sm text-white rounded-lg bg-red-400 absolute top-[-50px]" role="alert">
        <span className="font-medium">{message}</span>
      </div>
    )
  }
  const getSendingToast = (message: String): JSX.Element => {
    return (
      <div className="px-4 py-2 text-sm text-white rounded-lg bg-blue-600 absolute top-[-50px]" role="alert">
        <span className="font-medium">{message}</span>
      </div>
    )
  }
  const getToastElement = (): JSX.Element | null => {
    if (!toastObj) {
      return null;
    }
    if (toastObj.type === 1) {
      return getSuccessToast(toastObj.message);
    } else if (toastObj.type === 2) {
      return getFailureToast(toastObj.message);
    } else if (toastObj.type === 3) {
      return getSendingToast(toastObj.message);
    }
    return null;
  }

  return (
    <section
      id='contact'
      className='contact flex flex-col mobile:flex-row gap-y-8 mobile:gap-x-8 justify-center relative mb-4'
    >
      {
        getToastElement()
      }
      <form
        onSubmit={onSubmit}
        className='px-8 py-4 flex flex-col gap-y-4 bg-indigo-50/90 backdrop-blur-sm ring-1 rounded mobile:basis-[500px]'
      >
        <input
          {...register("name")}
          placeholder='Your Name Please'
          className='px-2 py-1  placeholder:italic outline-none border border-indigo-500 rounded-lg focus:scale-105 transition-transform'
        />
        {errors?.name && (
          <p className="before:content-['⚠_'] before:text-lg text-red-700 text-xs">
            {errors.name.message}
          </p>
        )}
        <input
          type='email'
          {...register("email")}
          placeholder='Your Email Please'
          className='px-2 py-1 placeholder:italic outline-none border border-indigo-500 rounded-lg focus:scale-105 transition-transform'
        />
        {errors?.email && (
          <p className="before:content-['⚠_'] before:text-lg text-red-700 text-xs">
            {errors.email.message}
          </p>
        )}
        <textarea
          {...register("message")}
          placeholder='Your Message Please'
          maxLength={200}
          spellCheck
          className='px-2 py-1 placeholder:italic outline-none border border-indigo-500 rounded-lg focus:scale-105 transition-transform'
        />
        {errors?.message && (
          <p className="before:content-['⚠_'] before:text-lg text-red-700 text-xs">
            {errors.message.message}
          </p>
        )}
        <input
          type='submit'
          disabled={sendingMessage}
          className='px-2 py-1 cursor-pointer bg-blue-500 hover:bg-blue-700 text-white rounded tracking-wider'
        />
      </form>

      <div className='flex flex-row  justify-center mobile:flex-col gap-x-4 mobile:gap-y-4'>
        <a href='https://twitter.com/sanjaial_alagar' target='_blank'>
          <Image
            src={XTWITTER}
            alt='Twitter / X'
            width='20'
            height='20'
            title='Twitter / X'
          />
        </a>
        <a href='https://github.com/sanjai1112' target='_blank'>
          <Image
            src='/github.png'
            alt='Github'
            width='20'
            height='20'
            title='Github'
          />
        </a>
        <a href='https://www.linkedin.com/in/sanjai-kumar' target='_blank'>
          <Image
            src='/linkedin.png'
            alt='LinkedIn'
            width='20'
            height='20'
            title='LinkedIn'
          />
        </a>
        <a href='mailto:sanjaikumar4773@gmail.com'>
          <Image
            src='/gmail.png'
            alt='Gmail'
            width='20'
            height='20'
            title='Gmail'
          />
        </a>
        <a
          href='https://www.instagram.com/sanjai_kumar_alagarsamy/'
          target='_blank'
        >
          <Image
            src='/instagram.png'
            alt='Instagram'
            width='20'
            height='20'
            title='Instagram'
          />
        </a>
      </div>
    </section>
  );
};

export default Contact;

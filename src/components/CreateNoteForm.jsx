// TODO: Import useForm, zodResolver, axios, useNavigate, useState, and noteSchema
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Save } from "lucide-react";


const formSchema = z.object({
  title: z.string().min(1, "Title is required, man.").max(100, "Title is too long"),
  content: z.string().min(1, "Content is required, man.").max(1000, "Content is too long"),
})

const CreateNoteForm = (onSubmitSuccess) => {
  // TODO: Setup isSubmitting state with useState
  const [isSubmitting, setIsSubmitting] = useState(false);
  // TODO: create navigate variable and set to useNavigate()


  // TODO: Set up the form with useForm from react-hook-form and zodResolver from @hookform/resolvers/zod
  const {register, handleSubmit, formState: { errors }, reset} = useForm({
    defaultValues: { title: "", content: "" },
    resolver: zodResolver(formSchema)
  });
  const testSubmit = (data) => {
    setTimeout(() => {
  
    }, 1000);
    console.log(data);
  }
  let success = false;
  const navigate = useNavigate();
  const sendToTheServer = async (data) => {
    // TODO: Send the data to the server
    try {
      setIsSubmitting(true);
      await axios.post("http://localhost:3001/api/notes", data, {
        headers: { "Content-Type": "application/json" },
      });
      setIsSubmitting(false);
      reset();
      setTimeout(() => {
        navigate("/notes");
      }, 500);
      if (onSubmitSuccess) {
        success = true;
        console.log("Submitted successfully, running callback");
        onSubmitSuccess();
      }
    } catch (error) {
      console.error("Error creating note:", error);
      setIsSubmitting(false);
    }
    // TODO: Use axios to create a new note in the server using the endpoint http://localhost:3001/api/notes
  };

  return (
    <>
    <div className="bg-white rounded-xl shadow-md p-10 md:p-8 max-w-2xl mx-auto">
    <h1 className="text-center">Create Note</h1>
    <form className="space-y-4" onSubmit={handleSubmit(sendToTheServer)}>
      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
      <input type="text" id="name" className="w-full p-2 border rounded-md" placeholder="Name, please" {...register("title")}></input>
      {errors.title && <p id="title-error" className="text-red-500 text-sm mt-1">{errors.title.message}</p>}

      <label htmlFor="content" className="block text-sm font-medium text-black mb-2">Content **</label>
      <textarea type="text" id="content" className="w-full h-32 border p-1 rounded-md" placeholder="Write here." {...register("content")}></textarea>
      {errors.content && <p id="content-error" className="text-red-500 text-sm mt-1">{errors.content.message}</p>}
      <div className="flex justify-center">
        <button className="btn btn-primary bg-yellow-600 p-2 rounded-md cursor-pointer w-full">
          Submit!
        </button>
      </div>
      {success && <p className="text-green-500 text-center">Note created successfully!</p>}
    </form>
    {/* TODO: Setup the form with TailwindCSS, create a form with the following fields: title, content, and submit button */}
    </div>
    </>
  );
};

export default CreateNoteForm;

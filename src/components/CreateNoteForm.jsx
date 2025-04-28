// TODO: Import useForm, zodResolver, axios, useNavigate, useState, and noteSchema


import { Save } from "lucide-react";

const CreateNoteForm = () => {
  // TODO: Setup isSubmitting state with useState
  // TODO: create navigate variable and set to useNavigate()


  // TODO: Set up the form with useForm from react-hook-form and zodResolver from @hookform/resolvers/zod

  const sendToTheServer = async (data) => {
    // TODO: Send the data to the server
    // TODO: Use axios to create a new note in the server using the endpoint http://localhost:3001/api/notes
  };

  return (
    <>
    <h1>Create Note</h1>
    {/* TODO: Setup the form with TailwindCSS, create a form with the following fields: title, content, and submit button */}
    </>
  );
};

export default CreateNoteForm;

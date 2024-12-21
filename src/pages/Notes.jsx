import { useEffect, useState } from "react";
// import { databases } from "../appwrite/config";
import  db  from "../appwrite/databases";
import NoteForm from "../components/NoteForm";
import {Query} from "appwrite";
import Note from "../components/Note";
import ThemeOption from "../components/ThemeOption";

const Notes = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await init();
    };
    fetchData();
  }, []);

  const init = async () => {
    try {
      console.log('Database ID:', import.meta.env.VITE_DATABASE_ID);
      console.log('Collection ID:', import.meta.env.VITE_COLLECTION_ID);
  
      // const response = await databases.listDocuments(
      //   import.meta.env.VITE_DATABASE_ID,
      //   import.meta.env.VITE_COLLECTION_ID
      // );
      const response = await db.notes.list(
        [Query.orderDesc('$createdAt')] 
      );

      if (response.documents !== notes) {
         setNotes(response.documents); 
       }
      console.log('Documents Response:', response);
      setNotes(response.documents);
    } catch (error) {
      console.error('Error fetching documents:', error);
    }
  };
  

  return (
    <>
      <div>
         <h1>Your Note</h1>
      </div>
      
      <div className="theme-options">
         <ThemeOption theme="light"/>
         <ThemeOption theme="dark"/>
         <ThemeOption theme="purple"/>
      </div>

      <NoteForm setNotes={setNotes}/>
      <div>
        {notes?.map((note) => (
         <Note key={note.$id} noteData={note} setNotes={setNotes}/>
        ))}
      </div>
    </>
  );
};

export default Notes;

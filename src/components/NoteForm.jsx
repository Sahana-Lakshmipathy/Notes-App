import db from '../appwrite/databases';

const NoteForm = ({setNotes}) => {
   const handleAdd = async (e) =>{
      e.preventDefault();

      const noteBody = e.target.body.value;

      // ensure an empty string is not submitted
      if (!noteBody === " ") return;

      try{
         // make our request
         const payload = {body:noteBody};
         const response = await db.notes.create(payload);
         setNotes((prevState)=>[response,...prevState]);

         // clear the input
         e.target.reset();
      } catch (error){
         console.error(error);
      }
   }

  return (
    <form onSubmit={handleAdd} id="todo-form">
      <input 
      type="text" 
      name="body" 
      placeholder="Write your ideas..." />
    </form>
  )
}

export default NoteForm
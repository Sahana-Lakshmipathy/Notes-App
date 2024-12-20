import db from '../appwrite/databases';

const NoteForm = ({setNotes}) => {
   const handleAdd = async (e) =>{
      e.preventDefault();

      const noteBody = e.target.body.value;

      try{
         // make our request
         const payload = {body:noteBody};
         const response = await db.notes.create(payload);
         setNotes((prevState)=>[response,...prevState]);
      } catch (error){
         console.error(error);
      }
   }

  return (
    <form onSubmit={handleAdd}>
      <input 
      type="text" 
      name="body" 
      placeholder="Write your ideas..." />
    </form>
  )
}

export default NoteForm
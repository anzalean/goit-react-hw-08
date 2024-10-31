const RegistrationForm = () => { 
  
  return (
    <form >
      <input
        type="text"
        name="name"
       
      />
      <input
        type="email"
        name="email"
       
      />
      <input
        type="password"
        name="password"
        
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default RegistrationForm;
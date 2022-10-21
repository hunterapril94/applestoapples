
export default function Login(props) {

  return (<form>
    <input          
      placeholder="Name"
      value={props.username}
      onChange={props.handleChange}
    />
    <button onClick={props.handleSubmit}>Submit</button>
  </form>)
}
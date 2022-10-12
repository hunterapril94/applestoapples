
export default function Login(props) {

  return (<>
    <input          
      placeholder="Name"
      value={props.username}
      onChange={props.handleChange}
    />
    <button onClick={props.handleSubmit}>Submit</button>
  </>)
}
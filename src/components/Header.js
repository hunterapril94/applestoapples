

export default function Header(props) {


  return (
    <>
      <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/fb65ad05-d4e0-46e3-a121-edd0ed4b4ef9/d7ugcvb-428c2c32-d9ed-4050-968b-0092bf55e49a.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2ZiNjVhZDA1LWQ0ZTAtNDZlMy1hMTIxLWVkZDBlZDRiNGVmOVwvZDd1Z2N2Yi00MjhjMmMzMi1kOWVkLTQwNTAtOTY4Yi0wMDkyYmY1NWU0OWEuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.rLhntiRykH3Sk0SLaMgaWNq2iH740JurI5X2lKqyMwE" />
      <h3>{props.username ? props.username : 'please login'}</h3>
    </>
  )
}
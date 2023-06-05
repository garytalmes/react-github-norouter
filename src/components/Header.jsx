
export default function Header({prefix}){

  return (
    <div>
      <p>Links:</p>
      <ul>
        <li><a href={`${prefix}/`}>Home</a></li>
        <li><a href={`${prefix}/about`}>About</a></li>
        <li><a href={`${prefix}/contact`}>Contact</a></li>
      </ul>
    </div>
  )
}
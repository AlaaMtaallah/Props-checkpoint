import '../Style/Menu.css'
const Menu = ({items}) => {

  return (
    <>
      <nav className ="row navMenu">
        <a href="#">Home</a>
        <a href="#">Blog</a>
        <a href="#">Work</a>
        <a href="#">About</a>
      </nav>
    </>
  )
}
export default Menu;
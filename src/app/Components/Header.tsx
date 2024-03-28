import HamburgerButton from "./HamburguerButton";

const Header = () => {
  return (
    <>
      <div className="">
        <h2 className='text-white mb-10 justify-end flex'>
          <HamburgerButton />
        </h2>
      </div>
    </>
  )
}

export default Header;
const Footer = () => {
  const date = new Date()
  const today = date.getFullYear()
  return (
    <footer className='h-8 bg-slate-500'>
      <p className='text-sm text-center text-slate-50'>
        &copy; {today}, All Right Reserved
      </p>
    </footer>
  )
}
export default Footer

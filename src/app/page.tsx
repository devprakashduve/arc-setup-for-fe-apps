import LoginForm from '@/components/molecules/LoginForm'

import Breadcrumb from '@/components/atoms/Breadcrumb'
export default function Home() {
  const submitForm = () => {
    console.log('Home page')
  }

  return (
    <main className="">
      <div className="container">
        <Breadcrumb items={['Home']} />

        {/* <LoginForm onSubmit={submitForm} /> */}
      </div>
    </main>
  )
}

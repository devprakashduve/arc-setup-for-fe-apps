import MyComponent from '@/MyComponent'
import Alert from '@/components/atoms/Alert'
import '@/styles/globals.scss'
export default function Home() {
  console.log('Home page')
  return (
    <div>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="container">
          <Alert type={'success'} message={'This is testing message'} />
          <MyComponent />

          <button className="button button-primary">Button</button>

          <button className="button button-secondary">Button</button>
          <h1>Different Text</h1>
        </div>
      </main>
    </div>
  )
}

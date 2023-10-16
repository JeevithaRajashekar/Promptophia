import '@styles/globals.css';
import Nav from '@components/Nav'; // importing here to be displayed across all page, that is the need for layout.jsx
import Provider from '@components/Provider';
export const metadata = {
    title: 'promptopia',
    description: 'Discover and share AI prompts'
}
const RootLayout = ({children}) => {
  return (
    <html lang="en">
        <body>
            <Provider>
                <div className="main">
                    <div className="gradient" />
                </div>
                <main className="app">
                    <Nav/>
                    {children}
                </main>
            </Provider>
        </body>
    </html>
  )
}

export default RootLayout;
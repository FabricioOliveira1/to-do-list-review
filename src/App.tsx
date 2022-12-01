import { Header } from './components/Header'
import styles from './App.module.css'
import { ContentBox } from './components/contentBox'

export function App() {

  return (
    <div className={styles.wrapper}>
      <Header />
      <ContentBox />
    </div>
    
  )
}



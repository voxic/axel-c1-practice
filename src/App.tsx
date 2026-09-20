import { HashRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { ProgressProvider } from './lib/progress-context'
import { ThemeProvider } from './lib/theme-context'
import { Flashcards } from './pages/Flashcards'
import { Home } from './pages/Home'
import { Quiz } from './pages/Quiz'
import { Topic } from './pages/Topic'
import { Topics } from './pages/Topics'
import { WeakSpots } from './pages/WeakSpots'

export default function App() {
  return (
    <ThemeProvider>
      <ProgressProvider>
        <HashRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="topics" element={<Topics />} />
              <Route path="topics/:topicId" element={<Topic />} />
              <Route path="quiz/:scope" element={<Quiz />} />
              <Route path="cards" element={<Flashcards />} />
              <Route path="cards/:topicId" element={<Flashcards />} />
              <Route path="weak" element={<WeakSpots />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Route>
          </Routes>
        </HashRouter>
      </ProgressProvider>
    </ThemeProvider>
  )
}

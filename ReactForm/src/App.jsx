import { Routes, Route } from "react-router-dom";
import Image from './Image'

function App() {
  return (
    <Routes>
      <Route path="/upload-album" element={<Image />} />
      <Route path="/uploadd-album" element={<Image />} />
    </Routes>
  )
}

export default App

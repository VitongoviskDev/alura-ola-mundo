import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "paginas/Inicio";
import SobreMim from "paginas/SobreMim";
import Menu from "components/Menu";
import Rodape from "components/Rodape";
import PaginaPadrao from "components/PaginaPadrao";
import Post from "components/Post";
import NaoEncontrada from "paginas/NaoEncontrada";


export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu/>
    
      <Routes>
        <Route path="/" element={<PaginaPadrao/>}>
          <Route index element = { <Inicio/> }/>
          <Route path = "sobremim" element = { <SobreMim/> }/>
        </Route>

        <Route path = "post/:id" element = { <Post/> }/>
        
        <Route path = "*" element = { <NaoEncontrada/> }/>
      </Routes>

      <Rodape/>
    </BrowserRouter>
  );
}

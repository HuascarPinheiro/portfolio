import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'

import { Descricao, BotaoTema, SideBarContainer } from './styles'

const Sidebar = () => (
  <aside>
    <SideBarContainer>
      <Avatar />
      <Titulo fontSize={20}>Huascar Pinheiro</Titulo>
      <Paragrafo tipo="secundario" fontSize={16}>
        HuascarPinheiro
      </Paragrafo>
      <Descricao tipo="principal" fontSize={12}>
        Full Stack Java
      </Descricao>
      <BotaoTema>Trocar tema</BotaoTema>
    </SideBarContainer>
  </aside>
)

export default Sidebar

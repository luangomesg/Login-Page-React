import React, {useState, useRef} from "react";
import People from './assets/People.svg';
import arrow from './assets/arrow.svg';
import { Excluir, P, User, Container, Imagem, ContainerItens, H1, Label, Input, Btn } from "./styles.js"


const App = () => {
  const [users, setUsers] = useState([]);
  const inputName = useRef();
  const inputAge = useRef();

  function addNewUser() {
    setUsers([...users, { id: Math.random(), name: inputName.current.value, age: inputAge.current.value }])
  }

  function deleteUser(userId) {
      const newUsers = users.filter((user) => {
          return user.id !== userId
      })
      setUsers(newUsers);
  }



  return (
    <Container>
      <Imagem alt="logo-img" src={People} />

      <ContainerItens>
        <H1>Olá</H1>

        <Label>Nome</Label>
        <Input ref={inputName} placeholder="Nome" />

        <Label>Idade</Label>
        <Input ref={inputAge} placeholder="Idade" />

        <Btn onClick={addNewUser}>Cadastrar <img alt="Seta" src={arrow} /></Btn>
        <ul>
          {

            users.map((user) => {
              return <User key={user.id}><P>{user.name} </P> <P>{user.age} Anos</P>
              <Excluir onClick={() => deleteUser(user.id)}></Excluir>
              </User>
            })

          }

        </ul>
      </ContainerItens>
    </Container>

  )
}


export default App
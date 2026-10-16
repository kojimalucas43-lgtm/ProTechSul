{modal !== undefined && <ModalInfo data={id[modal]} close={() => setModal()}/>}


<Container>
    <button onClick={props.close}>&#128473;</button><br></br>
    <img src={props.data.imagem}/>
    <p><strong>Texto:</strong> {props.data.texto}</p>
    <h2><strong>Valor:</strong> {props.data.location.valor}</h2>
</Container>
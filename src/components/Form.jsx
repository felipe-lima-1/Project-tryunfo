import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>
        <h1>Adicionar nova Carta</h1>
        <br />
        <label htmlFor="name">
          Nome
          <input type="text" data-testid="name-input" name="name" id="name" />
        </label>
        <br />
        <label htmlFor="description">
          Descrição
          <input
            type="textarea"
            data-testid="description-input"
            name="description"
            id="description"
          />
        </label>
        <br />
        <label htmlFor="att1">
          Atributo 1
          <input
            type="number"
            data-testid="attr1-input"
            name="att1"
            id="att1"
          />
        </label>
        <br />
        <label htmlFor="att2">
          Atributo 2
          <input
            type="number"
            data-testid="attr2-input"
            name="att2"
            id="att2"
          />
        </label>
        <br />
        <label htmlFor="att3">
          Atributo 3
          <input
            type="number"
            data-testid="attr3-input"
            name="att3"
            id="att3"
          />
        </label>
        <br />
        <label htmlFor="img">
          Imagem
          <input type="text" data-testid="image-input" name="img" id="img" />
        </label>
        <br />
        <label htmlFor="select">
          Raridade
          <select type="select" data-testid="rare-input" name="select" id="select">
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        <br />
        <label htmlFor="checkbox">
          Super Trybe Trunfo
          <input
            type="checkbox"
            data-testid="trunfo-input"
            name="checkbox"
            id="checkbox"
          />
        </label>
        <br />
        <button type="submit" data-testid="save-button">
          Salvar
        </button>
      </form>
    );
  }
}

export default Form;

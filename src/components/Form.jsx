import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  trunfoChecked = (event) => {
    if (!event) {
      return <p>Você já tem um Super Trunfo em seu baralho</p>;
    }
    return <p>Super Trunfo</p>;
  };

  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;
    return (
      <form>
        <h1>Adicionar nova Carta</h1>
        <br />
        <label htmlFor="name">
          Nome
          <input
            type="text"
            data-testid="name-input"
            name="cardName"
            id="name"
            value={ cardName }
            onChange={ onInputChange }
          />
        </label>
        <br />
        <label htmlFor="description">
          Descrição
          <textarea
            type="textarea"
            data-testid="description-input"
            name="cardDescription"
            id="description"
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </label>
        <br />
        <label htmlFor="att1">
          Atributo 1
          <input
            type="number"
            data-testid="attr1-input"
            name="cardAttr1"
            id="att1"
            value={ cardAttr1 }
            onChange={ onInputChange }
            max={ 90 }
            min={ 0 }
          />
        </label>
        <br />
        <label htmlFor="att2">
          Atributo 2
          <input
            type="number"
            data-testid="attr2-input"
            name="cardAttr2"
            id="att2"
            value={ cardAttr2 }
            onChange={ onInputChange }
            max={ 90 }
            min={ 0 }
          />
        </label>
        <br />
        <label htmlFor="att3">
          Atributo 3
          <input
            type="number"
            data-testid="attr3-input"
            name="cardAttr3"
            id="att3"
            value={ cardAttr3 }
            onChange={ onInputChange }
            max={ 90 }
            min={ 0 }
          />
        </label>
        <br />
        <label htmlFor="img">
          Imagem
          <input
            type="text"
            data-testid="image-input"
            name="cardImage"
            id="img"
            value={ cardImage }
            onChange={ onInputChange }
          />
        </label>
        <br />
        <label htmlFor="select">
          Raridade
          <select
            type="select"
            data-testid="rare-input"
            name="cardRare"
            id="select"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        <br />
        <label htmlFor="checkbox">
          Super Trybe Trunfo
          {this.trunfoChecked(hasTrunfo)}
          {hasTrunfo && (
            <input
              type="checkbox"
              data-testid="trunfo-input"
              name="cardTrunfo"
              id="checkbox"
              checked={ cardTrunfo }
              onChange={ onInputChange }
            />
          )}
        </label>
        <br />
        <button
          type="submit"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ () => {
            onSaveButtonClick({
              cardName,
              cardDescription,
              cardAttr1,
              cardAttr2,
              cardAttr3,
              cardImage,
              cardRare,
              cardTrunfo,
            });
          } }
        >
          Salvar
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
  hasTrunfo: PropTypes.bool,
  isSaveButtonDisabled: PropTypes.bool,
  onInputChange: PropTypes.func,
  onSaveButtonClick: PropTypes.func,
}.isRequired;

export default Form;

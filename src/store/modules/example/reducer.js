import * as types from '../types';

const initialState = {
  botaoClicado: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.BOTAO_CLICADO_SUCCESS: {
      // console.log('Sucesso');
      const novoEstado = { ...state };
      novoEstado.botaoClicado = !novoEstado.botaoClicado;
      return novoEstado;
    }
    case types.BOTAO_CLICADO_FAILURE: {
      // console.log('Deu erro =(');
      return state;
    }
    case types.BOTAO_CLICADO_REQUEST: {
      // console.log('Estou fazendo a requesicão');
      return state;
    }

    default: {
      return state;
    }
  }
};

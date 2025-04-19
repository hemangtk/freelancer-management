import { createContext, useContext, useReducer } from 'react';
import { mockProjects, mockClients, mockTimeEntries } from '../data/mockData';

const initialState = {
  projects: mockProjects,
  clients: mockClients,
  timeEntries: mockTimeEntries,
  invoices: [],
  activeTimerId: null,
};

const AppContext = createContext({
  state: initialState,
  dispatch: () => null,
});

const appReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_PROJECT':
      return {
        ...state,
        projects: [...state.projects, action.payload],
      };
    case 'UPDATE_PROJECT':
      return {
        ...state,
        projects: state.projects.map((project) =>
          project.id === action.payload.id ? action.payload : project
        ),
      };
    case 'DELETE_PROJECT':
      return {
        ...state,
        projects: state.projects.filter((project) => project.id !== action.payload),
      };
    case 'ADD_CLIENT':
      return {
        ...state,
        clients: [...state.clients, action.payload],
      };
    case 'UPDATE_CLIENT':
      return {
        ...state,
        clients: state.clients.map((client) =>
          client.id === action.payload.id ? action.payload : client
        ),
      };
    case 'DELETE_CLIENT':
      return {
        ...state,
        clients: state.clients.filter((client) => client.id !== action.payload),
      };
    case 'START_TIMER':
      return {
        ...state,
        activeTimerId: action.payload,
      };
    case 'STOP_TIMER':
      return {
        ...state,
        activeTimerId: null,
      };
    case 'ADD_TIME_ENTRY':
      return {
        ...state,
        timeEntries: [...state.timeEntries, action.payload],
      };
    case 'UPDATE_TIME_ENTRY':
      return {
        ...state,
        timeEntries: state.timeEntries.map((entry) =>
          entry.id === action.payload.id ? action.payload : entry
        ),
      };
    case 'DELETE_TIME_ENTRY':
      return {
        ...state,
        timeEntries: state.timeEntries.filter((entry) => entry.id !== action.payload),
      };
    case 'ADD_INVOICE':
      return {
        ...state,
        invoices: [...state.invoices, action.payload],
      };
    case 'UPDATE_INVOICE':
      return {
        ...state,
        invoices: state.invoices.map((invoice) =>
          invoice.id === action.payload.id ? action.payload : invoice
        ),
      };
    case 'DELETE_INVOICE':
      return {
        ...state,
        invoices: state.invoices.filter((invoice) => invoice.id !== action.payload),
      };
    default:
      return state;
  }
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
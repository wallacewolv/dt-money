import { useState } from 'react';
import Modal from 'react-modal'
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from './components/NewTransactionModal';
import { TransactionsContext } from './TransactionsContext';

import { GlobalStyle } from "./styles/global";

Modal.setAppElement('#root');

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionMaodal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionMaodal() {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <TransactionsContext.Provider value={[]}>
    
      <Header onOpenNewTransactionModal={handleOpenNewTransactionMaodal}/>

      <Dashboard />

      <NewTransactionModal 
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionMaodal}
      />

      <GlobalStyle />
    </TransactionsContext.Provider>
  );
}
import React from 'react';
import { DynamicWidget } from "@dynamic-labs/sdk-react-core";

interface WalletMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const WalletMenu: React.FC<WalletMenuProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-start justify-end z-50" onClick={onClose}>
      <div 
        className="mt-10 mr-2 w-[250px] h-[350px] bg-gray-800/80 backdrop-blur-md rounded-lg shadow-lg overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-4 h-full flex flex-col">
          <h3 className="text-lg font-semibold text-white mb-4">Wallet</h3>
          <div className="flex-grow overflow-y-auto" className="hide-scrollbar" style={{ height: '100vh' }}>
            <DynamicWidget />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletMenu;
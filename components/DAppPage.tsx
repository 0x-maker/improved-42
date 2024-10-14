import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft } from 'lucide-react';
import { DApp } from '@/types/dapp';

interface DAppPageProps {
  dApp: DApp;
  onBack: () => void;
  onInstall: (dapp: DApp) => void;
}

const DAppPage: React.FC<DAppPageProps> = ({ dApp, onBack, onInstall }) => {
  return (
    <div className="p-6 bg-gray-900">
      <Button variant="ghost" onClick={onBack} className="mb-4 text-white">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back
      </Button>
      <Card className="bg-gray-800 border-gray-700">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-white">{dApp.name}</CardTitle>
        </CardHeader>
        <CardContent>
          <img src={`/placeholder.svg?height=300&width=600&text=${dApp.name}`} alt={dApp.name} className="w-full h-64 object-cover rounded-md mb-4" />
          <p className="text-gray-300 mb-4">{dApp.description}</p>
          <h3 className="text-xl font-bold text-white mb-2">Features</h3>
          <ul className="list-disc list-inside text-gray-300">
            <li>Feature 1</li>
            <li>Feature 2</li>
            <li>Feature 3</li>
          </ul>
        </CardContent>
        <CardFooter>
          <Button className="w-full" onClick={() => onInstall(dApp)}>GET</Button>
        </CardFooter>
      </Card>
      <div className="mt-6">
        <h3 className="text-xl font-bold text-white mb-4">Screenshots</h3>
        <div className="grid grid-cols-3 gap-4">
          {[1, 2, 3].map((i) => (
            <img key={i} src={`/placeholder.svg?height=200&width=400&text=Screenshot ${i}`} alt={`Screenshot ${i}`} className="w-full h-32 object-cover rounded-md" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DAppPage;
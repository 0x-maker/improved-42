import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Compass, Wallet, BarChart2, Briefcase, ArrowUpDown, Code, Grid, RefreshCcw, Search, Star, TrendingUp, Image, Gamepad, Users, ShoppingCart, Fingerprint, Database, ArrowLeft } from 'lucide-react';
import DAppPage from './DAppPage';
import { DApp } from '@/types/dapp';

interface DAppStoreProps {
  isOpen: boolean;
  onClose: () => void;
  onInstall: (dapp: DApp) => void;
  installedDApps: DApp[];
}

interface Category {
  name: string;
  icon: React.ElementType;
  color: string;
}

const DAppStore: React.FC<DAppStoreProps> = ({ isOpen, onClose, onInstall, installedDApps }) => {
  const [activeTab, setActiveTab] = useState('discover');
  const [selectedDApp, setSelectedDApp] = useState<DApp | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);

  const sidebarItems = [
    { icon: Compass, label: 'Discover', value: 'discover' },
    { icon: Wallet, label: 'Wallets', value: 'wallets' },
    { icon: BarChart2, label: 'Trading', value: 'trading' },
    { icon: Briefcase, label: 'DeFi', value: 'defi' },
    { icon: ArrowUpDown, label: 'Exchanges', value: 'exchanges' },
    { icon: Code, label: 'Developer', value: 'developer' },
    { icon: Grid, label: 'Categories', value: 'categories' },
    { icon: RefreshCcw, label: 'Updates', value: 'updates' },
  ];

  const categories: Category[] = [
    { name: "NFTs", icon: Image, color: "bg-purple-500" },
    { name: "Gaming", icon: Gamepad, color: "bg-green-500" },
    { name: "Social", icon: Users, color: "bg-blue-500" },
    { name: "Marketplace", icon: ShoppingCart, color: "bg-yellow-500" },
    { name: "Identity", icon: Fingerprint, color: "bg-red-500" },
    { name: "Storage", icon: Database, color: "bg-indigo-500" },
    { name: "Analytics", icon: BarChart2, color: "bg-pink-500" },
    { name: "Governance", icon: Users, color: "bg-orange-500" },
  ];

  const handleDAppClick = (dapp: DApp) => {
    setSelectedDApp(dapp);
  };

  const handleBack = () => {
    setSelectedDApp(null);
    setSelectedCategory(null);
  };

  const handleCategoryClick = (category: Category) => {
    setSelectedCategory(category);
  };

  if (!isOpen) return null;

  const renderCategoryPage = (category: Category) => {
    const CategoryIcon = category.icon;
    return (
      <div className="p-6 bg-gray-900">
        <Button variant="ghost" onClick={handleBack} className="mb-4 text-white">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Categories
        </Button>
        <div className={`flex items-center justify-center ${category.color} w-20 h-20 rounded-full mb-6`}>
          <CategoryIcon className="h-12 w-12 text-white" />
        </div>
        <h2 className="text-3xl font-bold mb-6 text-white">{category.name}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <Card key={i} className="bg-gray-800 border-gray-700 cursor-pointer" onClick={() => handleDAppClick({ id: `${category.name}-${i}`, name: `${category.name} App ${i}`, description: `Description for ${category.name} App ${i}`, category: category.name, icon: '', url: '' })}>
              <CardContent className="p-4">
                <img src={`/placeholder.svg?height=200&width=400&text=${category.name} App ${i}`} alt={`${category.name} App ${i}`} className="w-full h-48 object-cover rounded-md mb-4" />
                <h4 className="font-bold text-lg mb-2 text-white">{category.name} App {i}</h4>
                <p className="text-sm text-gray-300">Description for {category.name} App {i}</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">GET</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    );
  };

  const renderAppCard = (app: DApp) => (
    <Card key={app.id} className="bg-gray-800 border-gray-700 cursor-pointer" onClick={() => handleDAppClick(app)}>
      <CardContent className="p-4">
        <img src={app.icon || `/placeholder.svg?height=200&width=400&text=${app.name}`} alt={app.name} className="w-full h-48 object-cover rounded-md mb-4" />
        <h4 className="font-bold text-lg mb-2 text-white">{app.name}</h4>
        <p className="text-sm text-gray-300">{app.description}</p>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full">GET</Button>
      </CardFooter>
    </Card>
  );

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50" onClick={onClose}>
      <div 
        className="w-[90%] h-[90%] bg-gray-900 rounded-lg shadow-lg overflow-hidden text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {selectedDApp ? (
          <ScrollArea className="h-full">
            <DAppPage dApp={selectedDApp} onBack={handleBack} onInstall={onInstall} />
          </ScrollArea>
        ) : selectedCategory ? (
          <ScrollArea className="h-full">
            {renderCategoryPage(selectedCategory)}
          </ScrollArea>
        ) : (
          <div className="flex h-full">
            {/* Sidebar */}
            <div className="w-56 bg-gray-800 p-4 flex flex-col">
              <div className="relative mb-6">
                <Input className="pl-10 bg-gray-700 border-gray-600 text-white" placeholder="Search Crypto Apps" />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              </div>
              {sidebarItems.map((item) => (
                <Button
                  key={item.value}
                  variant={activeTab === item.value ? 'secondary' : 'ghost'}
                  className={`justify-start mb-2 ${activeTab === item.value ? 'bg-gray-700 text-white' : 'text-gray-300 hover:bg-gray-700'}`}
                  onClick={() => setActiveTab(item.value)}
                >
                  <item.icon className="mr-2 h-4 w-4" />
                  {item.label}
                </Button>
              ))}
            </div>

            {/* Main Content */}
            <ScrollArea className="flex-1 p-6 bg-gray-900">
              <Tabs value={activeTab} className="w-full">
                <TabsContent value="discover">
                  <h2 className="text-3xl font-bold mb-6 text-white">Discover New DApps</h2>
                  <Card className="bg-gray-800 border-gray-700 mb-6">
                    <CardContent className="p-6">
                      <h3 className="text-2xl font-bold mb-4 text-white">Featured DApp</h3>
                      <div className="flex items-center">
                        <img src="/placeholder.svg?height=200&width=200&text=Featured" alt="Featured DApp" className="w-32 h-32 object-cover rounded-md mr-6" />
                        <div>
                          <h4 className="text-xl font-bold mb-2 text-white">CryptoTracker Pro</h4>
                          <p className="text-gray-300 mb-4">Track your entire crypto portfolio in one place</p>
                          <Button>Learn More</Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <h3 className="text-2xl font-bold mb-4 text-white">Popular DApps</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                      { id: '1', name: 'DeFi Yield Optimizer', description: 'Maximize your yields across multiple DeFi protocols', category: 'DeFi', icon: '', url: '' },
                      { id: '2', name: 'NFT Marketplace', description: 'Buy, sell, and trade unique digital assets', category: 'NFTs', icon: '', url: '' },
                      { id: '3', name: 'Decentralized Exchange', description: 'Trade cryptocurrencies without intermediaries', category: 'Exchanges', icon: '', url: '' },
                    ].map(renderAppCard)}
                  </div>
                </TabsContent>

                <TabsContent value="wallets">
                  <h2 className="text-3xl font-bold mb-6 text-white">Crypto Wallets</h2>
                  <p className="text-gray-300 mb-6">Secure your assets with these trusted wallet solutions</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                      { id: 'w1', name: 'Multi-Chain Wallet', description: 'Support for 100+ blockchains', category: 'Wallets', icon: '', url: '' },
                      { id: 'w2', name: 'Hardware Wallet App', description: 'Companion app for popular hardware wallets', category: 'Wallets', icon: '', url: '' },
                      { id: 'w3', name: 'DeFi Wallet', description: 'Built-in swaps and yield farming', category: 'Wallets', icon: '', url: '' },
                    ].map(renderAppCard)}
                  </div>
                </TabsContent>

                <TabsContent value="trading">
                  <h2 className="text-3xl font-bold mb-6 text-white">Trading Tools</h2>
                  <p className="text-gray-300 mb-6">Enhance your trading with advanced charts and analytics</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                      { id: 't1', name: 'CryptoCharts Pro', description: 'Advanced charting with 100+ indicators', category: 'Trading', icon: '', url: '' },
                      { id: 't2', name: 'AI Trade Predictor', description: 'Machine learning-based trade suggestions', category: 'Trading', icon: '', url: '' },
                      { id: 't3', name: 'Crypto Portfolio Tracker', description: 'Real-time tracking and analytics', category: 'Trading', icon: '', url: '' },
                    ].map(renderAppCard)}
                  </div>
                </TabsContent>

                <TabsContent value="defi">
                  <h2 className="text-3xl font-bold mb-6 text-white">DeFi Applications</h2>
                  <p className="text-gray-300 mb-6">Explore decentralized finance opportunities</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                      { id: 'd1', name: 'Yield Aggregator', description: 'Optimize your yields across multiple protocols', category: 'DeFi', icon: '', url: '' },
                      { id: 'd2', name: 'Lending Platform', description: 'Borrow and lend crypto assets securely', category: 'DeFi', icon: '', url: '' },
                      { id: 'd3', name: 'Liquidity Provider', description: 'Earn fees by providing liquidity to pools', category: 'DeFi', icon: '', url: '' },
                    ].map(renderAppCard)}
                  </div>
                </TabsContent>

                <TabsContent value="exchanges">
                  <h2 className="text-3xl font-bold mb-6 text-white">Decentralized Exchanges</h2>
                  <p className="text-gray-300 mb-6">Trade cryptocurrencies without intermediaries</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                      { id: 'e1', name: 'UniSwap Clone', description: 'Automated market maker for token swaps', category: 'Exchanges', icon: '', url: '' },
                      { id: 'e2', name: 'Order Book DEX', description: 'Decentralized exchange with limit orders', category: 'Exchanges', icon: '', url: '' },
                      { id: 'e3', name: 'Cross-Chain Bridge', description: 'Seamlessly transfer assets between blockchains', category: 'Exchanges', icon: '', url: '' },
                    ].map(renderAppCard)}
                  </div>
                </TabsContent>

                <TabsContent value="developer">
                  <h2 className="text-3xl font-bold mb-6 text-white">Developer Tools</h2>
                  <p className="text-gray-300 mb-6">Build and deploy your own blockchain applications</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                      { id: 'dev1', name: 'Smart Contract IDE', description: 'Integrated development environment for blockchain', category: 'Developer', icon: '', url: '' },
                      { id: 'dev2', name: 'Blockchain Explorer', description: 'Analyze transactions and smart contracts', category: 'Developer', icon: '', url: '' },
                      { id: 'dev3', name: 'Web3 Library', description: 'Comprehensive toolkit for dApp development', category: 'Developer', icon: '', url: '' },
                    ].map(renderAppCard)}
                  </div>
                </TabsContent>

                <TabsContent value="categories">
                  <h2 className="text-2xl font-bold mb-4 text-white">Categories</h2>
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                    {categories.map((category) => (
                      <Card key={category.name} className="bg-gray-800 border-gray-700 cursor-pointer" onClick={() => handleCategoryClick(category)}>
                        <CardContent className="p-4 flex flex-col items-center">
                          <div className={`flex items-center justify-center ${category.color} w-16 h-16 rounded-full mb-2`}>
                            <category.icon className="h-8 w-8 text-white" />
                          </div>
                          <h4 className="font-bold text-lg text-white">{category.name}</h4>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="updates">
                  <h2 className="text-3xl font-bold mb-6 text-white">Recent Updates</h2>
                  <p className="text-gray-300 mb-6">Stay up to date with the latest dApp improvements</p>
                  <div className="space-y-4">
                    {[
                      { name: 'CryptoTracker Pro', version: '2.1.0', description: 'Added support for NFT tracking' },
                      { name: 'DeFi Yield Optimizer', version: '1.5.2', description: 'Improved APY calculations' },
                      { name: 'Multi-Chain Wallet', version: '3.0.0', description: 'Major UI overhaul and performance improvements' },
                    ].map((update, index) => (
                      <Card key={index} className="bg-gray-800 border-gray-700">
                        <CardContent className="p-4">
                          <h4 className="font-bold text-lg text-white">{update.name} - v{update.version}</h4>
                          <p className="text-gray-300">{update.description}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </ScrollArea>
          </div>
        )}
      </div>
    </div>
  );
};

export default DAppStore;
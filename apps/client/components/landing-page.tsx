'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card';

export default function LandingPage() {
  const [activeTab, setActiveTab] = useState('sorting');
  return (
    <div className="flex flex-col min-h-screen p-6">
      {/* <header className="flex items-center justify-between pb-4 border-b">
        <h1 className="text-2xl font-bold">VisualDSA</h1>
        <nav className="flex gap-4">
          <a href="#" className="text-sm">
            ?
          </a>
          <a href="#" className="text-sm">
            FAQ
          </a>
          <a href="#" className="text-sm">
            GitHub
          </a>
        </nav>
      </header> */}
      <div className="flex flex-1 mt-6">
        <aside className="w-48 p-4 border-r">
          <div className="flex flex-col space-y-2">
            <Button
              variant={activeTab === 'sorting' ? 'secondary' : 'ghost'}
              onClick={() => setActiveTab('sorting')}
            >
              sorting
            </Button>
            <Button
              variant={activeTab === 'searching' ? 'secondary' : 'ghost'}
              onClick={() => setActiveTab('searching')}
            >
              searching
            </Button>
            <Button
              variant={activeTab === 'tree' ? 'secondary' : 'ghost'}
              onClick={() => setActiveTab('tree')}
            >
              tree
            </Button>
            <Button
              variant={activeTab === 'graph' ? 'secondary' : 'ghost'}
              onClick={() => setActiveTab('graph')}
            >
              graph
            </Button>
          </div>
        </aside>
        <main className="flex-1 p-4">
          <div className="text-center">
            <h2 className="text-2xl font-bold">
              {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
            </h2>
            <p className="text-sm text-muted-foreground">
              Pick one and get started!
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 mt-6 md:grid-cols-2 lg:grid-cols-3">
            {activeTab === 'sorting' && (
              <>
                <Card>
                  <CardHeader>
                    <CardTitle>Bubble Sort</CardTitle>
                    <CardDescription>lorem ipsum</CardDescription>
                    <Button variant={'link'} size={'icon'}>
                      {"Let's go ->"}
                    </Button>
                  </CardHeader>
                  <div className="w-24 h-24 bg-gray-200" />
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Bubble Sort</CardTitle>
                    <CardDescription>lorem ipsum</CardDescription>
                  </CardHeader>
                  <CardContent className="flex justify-center">
                    <div className="w-24 h-24 bg-gray-200" />
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Bubble Sort</CardTitle>
                    <CardDescription>lorem ipsum</CardDescription>
                  </CardHeader>
                  <CardContent className="flex justify-center">
                    <div className="w-24 h-24 bg-gray-200" />
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Bubble Sort</CardTitle>
                    <CardDescription>lorem ipsum</CardDescription>
                  </CardHeader>
                  <CardContent className="flex justify-center">
                    <div className="w-24 h-24 bg-gray-200" />
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Bubble Sort</CardTitle>
                    <CardDescription>lorem ipsum</CardDescription>
                  </CardHeader>
                  <CardContent className="flex justify-center">
                    <div className="w-24 h-24 bg-gray-200" />
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Bubble Sort</CardTitle>
                    <CardDescription>lorem ipsum</CardDescription>
                  </CardHeader>
                  <CardContent className="flex justify-center">
                    <div className="w-24 h-24 bg-gray-200" />
                  </CardContent>
                </Card>
              </>
            )}
            {activeTab === 'searching' && (
              <>
                <Card>
                  <CardHeader>
                    <CardTitle>Linear Search</CardTitle>
                    <CardDescription>lorem ipsum</CardDescription>
                  </CardHeader>
                  <CardContent className="flex justify-center">
                    <div className="w-24 h-24 bg-gray-200" />
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Binary Search</CardTitle>
                    <CardDescription>lorem ipsum</CardDescription>
                  </CardHeader>
                  <CardContent className="flex justify-center">
                    <div className="w-24 h-24 bg-gray-200" />
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Depth-First Search</CardTitle>
                    <CardDescription>lorem ipsum</CardDescription>
                  </CardHeader>
                  <CardContent className="flex justify-center">
                    <div className="w-24 h-24 bg-gray-200" />
                  </CardContent>
                </Card>
              </>
            )}
            {activeTab === 'tree' && (
              <>
                <Card>
                  <CardHeader>
                    <CardTitle>Binary Tree</CardTitle>
                    <CardDescription>lorem ipsum</CardDescription>
                  </CardHeader>
                  <CardContent className="flex justify-center">
                    <div className="w-24 h-24 bg-gray-200" />
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>AVL Tree</CardTitle>
                    <CardDescription>lorem ipsum</CardDescription>
                  </CardHeader>
                  <CardContent className="flex justify-center">
                    <div className="w-24 h-24 bg-gray-200" />
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Red-Black Tree</CardTitle>
                    <CardDescription>lorem ipsum</CardDescription>
                  </CardHeader>
                  <CardContent className="flex justify-center">
                    <div className="w-24 h-24 bg-gray-200" />
                  </CardContent>
                </Card>
              </>
            )}
            {activeTab === 'graph' && (
              <>
                <Card>
                  <CardHeader>
                    <CardTitle>Depth-First Search</CardTitle>
                    <CardDescription>lorem ipsum</CardDescription>
                  </CardHeader>
                  <CardContent className="flex justify-center">
                    <div className="w-24 h-24 bg-gray-200" />
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Breadth-First Search</CardTitle>
                    <CardDescription>lorem ipsum</CardDescription>
                  </CardHeader>
                  <CardContent className="flex justify-center">
                    <div className="w-24 h-24 bg-gray-200" />
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>{"Dijkstra's Algorithm"}</CardTitle>
                    <CardDescription>lorem ipsum</CardDescription>
                  </CardHeader>
                  <CardContent className="flex justify-center">
                    <div className="w-24 h-24 bg-gray-200" />
                  </CardContent>
                </Card>
              </>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}

import React, { useState, useEffect } from 'react'
import { Button } from "./components/ui/button"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "./components/ui/table";
import Sidebar from './components/layout/sidebar';
import { Badge } from "./components/ui/badge";
import './App.css';

function App() {
  const [categories, setCategories] = useState([{
    "id": 1,
    "name": "Casual Shoes",
    "status": "1",
    "slug": "casual-shoes",
    "created_at": null,
    "updated_at": null
  },
  {
    "id": 2,
    "name": "Sports Shoes",
    "status": "1",
    "slug": "sports-shoes",
    "created_at": null,
    "updated_at": null
  }]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [confirmPopOpen, setConfirmPopOpen] = useState(false);
  // const [loadData, setLoadData] = useState(false);
  // const [statusChangeSuccess, setStatusChangeSuccess] = useState(false);


  return (
      <div
        key="1"
        className="lg:grid min-h-screen w-full lg:overflow-hidden lg:grid-cols-[280px_1fr] theam_bg" >
        <Sidebar />
        <div className="flex flex-col">
          {/* <Header title="Category" /> */}
          <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6 bg-white">
            <div className="flex items-center">
              {/* <h1 className="font-semibold text-lg md:text-2xl">Products</h1> */}
              <Button className="ml-auto bg-black text-white" size="sm" >
                Add product
              </Button>
            </div>

            <div className="border shadow-sm rounded-lg">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[80px]">ID</TableHead>
                    {/* <TableHead className="w-[150px]">Image</TableHead> */}
                    <TableHead className="w-[200px]">Name</TableHead>
                    <TableHead className="w-[200px]">Status</TableHead>
                    <TableHead className="w-[210px]">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>

                  {categories.length > 0 ? categories?.map((cat, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{cat.id}</TableCell>
                      {/*  <TableCell>
                      <img
                        alt="Product image"
                        className="aspect-square rounded-md object-cover"
                        height="64"
                        src={cat.image}
                        width="64" />
                    </TableCell> */}
                      <TableCell className="font-medium">{cat.name}</TableCell>
                      <TableCell className="font-medium">
                        {Number(cat.status) === 0 ?
                          <Badge className="text-red-500 dark:text-gray-50" variant="outline">Inactive</Badge> :
                          <Badge className="text-greeb-500 dark:text-gray-50" variant="outline">  Active </Badge>}
                      </TableCell>
                      <TableCell className="w-[100px] justify-center items-center">
                        <Button className="bg-black text-white" size="sm" >
                          Status Change
                        </Button>
                        &nbsp;
                        <Button className="bg-black text-white" size="sm" variant="ghost" >
                          Edit
                        </Button>
                      </TableCell>
                    </TableRow>
                  )) :
                    '...loading'

                  }
                </TableBody>
              </Table>
            </div>
          </main>
        </div>

      </div>
  );
}

export default App;

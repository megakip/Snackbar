import React from 'react'
import { Card, CardContent } from './ui/card'

interface CategoryCardProps {
  name: string
  onClick: () => void
  isActive?: boolean
}

export const CategoryCard: React.FC<CategoryCardProps> = ({ 
  name, 
  onClick, 
  isActive = false 
}) => {
  return (
    <Card
      className={`flex items-center gap-4 p-3 relative self-stretch w-full bg-white rounded-lg border border-solid cursor-pointer transition-colors hover:bg-gray-50 ${
        isActive ? 'border-blue-500 bg-blue-50' : 'border-black'
      }`}
      onClick={onClick}
    >
      <CardContent className="flex items-center gap-4 p-0">
        <div className="relative w-[39.96px] h-[39.99px] overflow-hidden bg-[url(/clip-path-group.png)] bg-[100%_100%]">
          <div className="relative w-10 h-10">
            <img
              className="absolute w-[27px] h-[5px] top-[25px] left-[7px]"
              alt="Category icon"
              src="/clip-path-group-1.png"
            />
            <img
              className="absolute w-[27px] h-2.5 top-2.5 left-[7px]"
              alt="Category icon"
              src="/clip-path-group-2.png"
            />
            <img
              className="absolute w-[27px] h-[5px] top-5 left-[7px]"
              alt="Category icon"
              src="/clip-path-group-3.png"
            />
            <img
              className="absolute w-10 h-10 top-0 left-0"
              alt="Category icon"
              src="/clip-path-group-4.png"
            />
          </div>
        </div>
        <span className={`font-medium text-base ${isActive ? 'text-blue-700' : 'text-black'}`}>
          {name}
        </span>
      </CardContent>
    </Card>
  )
}
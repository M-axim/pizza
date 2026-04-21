"use client"

import { useCategoryStore } from '@/lib/store/category'
import { cn } from '@/lib/utils'
import React from 'react'

interface Props {
    className?: string,
}

const cats:Array<{
    id: number,
    name: string
}> = [
    { id: 1, name: "Пиццы"},
    { id: 2, name: "Комбо"},
    { id: 3, name: "Закуски"},
    { id: 4, name: "Коктели"},
    { id: 5, name: "Кофе"},
    { id: 6, name: "Напитки"},
    { id: 7, name: "Десерты"},
]
const activeIndex = 0

export const Categories: React.FC<Props> = ({className}) => {
    const categoryActiveId = useCategoryStore((state) => state.activeId)

    return (
    <div className={cn("inline-flex gap-1 bg-gray-50 p-1 rounded-2xl", className)}>
        {cats.map(({name, id}, index) => (
            <a
            href={`/#${name}`}
            className={cn("flex items-center font-bold h-11 rounded-2xl px-5 z-10",
                categoryActiveId === id && 'bg-white shadow-md shadow-gray-200 text-primary',
            )}
            key={index}>
                <button className='cursor-pointer'>
                    {name}
                </button>
            </a>
        ))}
    </div>
  )
}

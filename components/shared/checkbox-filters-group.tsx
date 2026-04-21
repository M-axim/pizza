"use client"

import { cn } from '@/lib/utils'
import React from 'react'
import { FilterChecboxProps, FilterCheckbox } from './filter-checkbox'
import { Input } from '../ui'

type Item = FilterChecboxProps

interface Props {
    title: string,
    items: Item[],
    defaultItems: Item[],
    limit?: number,
    searchInputPlaceholder?: string,
    onChange?: (values: string) => void,
    defaultValue?: string[],
    className?: string,
}
 
export const CheckBoxFiltersGroup: React.FC<Props> = ({
    title,
    items,
    defaultItems,
    limit = 5,
    searchInputPlaceholder = "Поиск...",
    className,
    onChange,
    defaultValue 
}) => {
    const [showAll, setShowAll] = React.useState(false)
    const [searchValue, setSearchValue] = React.useState("") 

    const list = showAll ? items.filter((item) => item.text.toLowerCase().includes(searchValue.toLocaleLowerCase())) : defaultItems?.slice(0, limit)
     
    const onChangeSearchInput = (value: string) => {
         setSearchValue(value)
    }

  return (
    <div className={cn("", className)}>
        <p className='font-bold mb-3'>{title}</p>
        
        {showAll && (
            <div className="mb-5">
                <Input 
                onChange={(e) => onChangeSearchInput(e.target.value)}
                placeholder={searchInputPlaceholder} className='bg-gray-50 border-none' />
            </div>
        )}

        <div className="flex flex-col gap-4 pr-2 overflow-auto scrollbar">
             {list.map((item, index) => (
                <FilterCheckbox
                    onCheckedChange={(ids) => console.log(ids)}
                    checked={false}
                    key={index}
                    value={item.value}
                    text={item.text}
                    endAdornment={item.endAdornment}
                />
             ))}
        </div>
            {items.length > limit && (
                <div className={showAll ? "border-t border-t-neutral-100 mt-4" : ""}>
                    <button onClick={() => setShowAll(!showAll)} className='text-primary mt-3 cursor-pointer'>
                        {showAll ? "Скрыть" : "+ Показать все"}
                    </button>
                </div>
            )}
    </div>
  )
}

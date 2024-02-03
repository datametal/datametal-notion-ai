'use client'
import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog'
import { useRouter } from 'next/router'

export default function AddProductModal() {
  const router = useRouter()
  const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className='bg-red-50 text-red-600'>Add Product</Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        // ADD PRODUCT FORM HERE
        <DialogFooter>
          <Button
            onClick={() => {
              addProduct(data).then(() => setOpen(false))
              router.refresh()
            }}
            className='bg-red-50 text-red-600 hover:bg-red-100'
            type='submit'>
            Add
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

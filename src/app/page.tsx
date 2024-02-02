import Head from 'next/head'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import styles from '@/app/index.module.css'

export default function Home() {
  return (
    <>
      <h1 className='text-red-600'> Hello World</h1>
      <Button>Click Me</Button>
    </>
  )
}

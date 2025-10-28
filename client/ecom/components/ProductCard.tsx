import Image from 'next/image'
export default function ProductCard({imageUrl,titolo,prezzo}:{imageUrl:string,titolo:string,prezzo:string}) {
  return (
    <div className='flex flex-col justify-center items-center'>
        <Image src={imageUrl} alt='Abiti'/>
        <h1>{titolo}</h1>
        <h1>{prezzo}</h1>
    </div>
  )
}
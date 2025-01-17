import { RequestIdGeneratorIFace } from './request.iface'
import { ResponseIdGeneratorIFace } from './response.iface'

// -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
export async function uf_idGenerator<T>(
   req: RequestIdGeneratorIFace<T>
): Promise<ResponseIdGeneratorIFace> {
   const alphabet = 'abcdefghijklmnopqrstuvwxyz'
   const randomIndex = Math.floor(Math.random() * alphabet.length)
   const randomLetter = alphabet[randomIndex] + alphabet[randomIndex]

   const randomNumber = Math.floor(Math.random() * 101)
   const randomID = randomLetter.toUpperCase() + randomNumber

   return {
      ID: randomID,
   }
}

import crypto from 'crypto';
import multer from 'multer'

import {extname, resolve} from 'path'

function getExt(file:any){
  const exts = file.split('.');
  const ext = exts[1];
  return ext;
}

export default{
  upload(folder: string){
    return{
      storage: multer.diskStorage({
        destination: resolve(__dirname, '..', '..', folder),

        filename: (request, file, callback) => {
          const fileHash = crypto.randomBytes(16).toString("hex");
          const fileName = `${fileHash}.${getExt(file.originalname)}`

          return callback(null, fileName)
        }
      })
    }
  }
}
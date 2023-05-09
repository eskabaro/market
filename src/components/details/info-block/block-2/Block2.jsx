import style from '../../../../styles/details/Details.module.scss' 

export default function Block2({ price, img, isLoading }) {
     return <div>
          <div className={style.border}>
               <div>
                    {isLoading ? <img src='/images/loader/placeholder.webp' alt='Product' /> : <img src={`/${img}`} alt="Product" />}
               </div>
          </div>
          <span>{price} $</span>
     </div>
}
import { Link } from 'react-router-dom'
import { ReactComponent as Spotify } from '../../../ui/svg/social-network/Spotify.svg'
import { ReactComponent as Facebook } from '../../../ui/svg/social-network/Facebook.svg'
import { ReactComponent as Pinterest } from '../../../ui/svg/social-network/Pinterest.svg'
import { ReactComponent as Instagram } from '../../../ui/svg/social-network/Instagram.svg'
import { ReactComponent as Youtube } from '../../../ui/svg/social-network/Youtube.svg'
import { ReactComponent as Twitter } from '../../../ui/svg/social-network/Twitter.svg'
import style from '../../../styles/footer/Footer.module.scss'

export default function Links() {
     return <div className='d-inline-flex'>
          <Link to={'https://open.spotify.com/user/starbucks'}>
               <div className={style['bg-link']}>
                    <Spotify width={30} height={30} />
               </div>
          </Link>
          <Link to={'https://www.facebook.com/Starbucks'}>
               <div className={style['bg-link']}>
                    <Facebook width={30} height={30} />
               </div>
          </Link>
          <Link to={'https://www.pinterest.com/starbucks'}>
               <div className={style['bg-link']}>
                    <Pinterest width={30} height={30} />
               </div>
          </Link>
          <Link to={'https://www.instagram.com/starbucks'}>
               <div className={style['bg-link']}>
                    <Instagram width={30} height={30} />
               </div>
          </Link>
          <Link to={'https://www.youtube.com/starbucks'}>
               <div className={style['bg-link']}>
                    <Youtube width={30} height={30} />
               </div>
          </Link>
          <Link to={'https://twitter.com/starbucks'}>
               <div className={style['bg-link']}>
                    <Twitter width={30} height={30} />
               </div>
          </Link>
     </div>
}
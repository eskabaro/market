import Links from './links/Links'
import style from '../../styles/footer/Footer.module.scss'

export default function Footer() {
     return <footer className={style.footer}>
          <Links />
          <h5>EARNING STARS</h5>
          <p>Stars cannot be earned on purchases of alcohol, Starbucks Cards or Starbucks Card reloads. Earn 1 Star per $1 spent when you scan your member barcode in the app, then pay with cash, credit/debit cards or mobile wallets at participating stores. You can also earn 1 Star per $1 spent when you link a payment method and pay directly through the app.</p>
          <p>© 2023 Starbucks Coffee Company. All rights reserved.</p>
     </footer>
}